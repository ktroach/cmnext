import React, { useState, useEffect } from 'react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'
import { toast } from 'sonner'

interface PropertySetProps {
  children?: any
  designMode?: boolean
  onPropertyChange?: (key: string, value: any) => void
}

export function PropertySet({ children, designMode, onPropertyChange }: PropertySetProps) {
  const [selected, setSelected] = useState(false)
  const [open, setOpen] = useState(false)
  const [properties, setProperties] = useState({})

  const findPropertyControls = (children) => {
    const newProperties = {}
    const searchChildren = (element) => {
      React.Children.forEach(element, (child) => {
        if (React.isValidElement(child)) {
          if (child.type === PropertyControl) {
            newProperties[child.props.propertyKey] = child.props.value
          } else if (child.props.children) {
            searchChildren(child.props.children)
          }
        }
      })
    }
    searchChildren(children)
    return newProperties
  }

  useEffect(() => {
    const newProperties = findPropertyControls(children)
    console.log('>>> newProperties >>> ', newProperties)
    setProperties(newProperties)
  }, [children])

  const handleOpen = () => {
    setOpen(true)
    setSelected(true)
  }

  const handleClosePopover = () => {
    setOpen(false)
    setSelected(false)
  }

  const handlePropertyChange = (key: string, value: any) => {
    setProperties(prevProps => ({
      ...prevProps,
      [key]: value
    }))
    if (onPropertyChange) {
      onPropertyChange(key, value)
    }
  }

  const applyChanges = () => {
    toast('Changes applied')
    handleClosePopover()
  }

  const selectedStyle = selected
    ? ' border-4 border-cyan-600'
    : ' hover:border-4 hover:border-cyan-600'

  const renderChildren = () => {
    return React.Children.map(children, child => {
      if (React.isValidElement(child)) {
        if (child.type === PropertyControl) {
          return React.cloneElement(child, {
            ...child.props,
            value: properties[child.props.propertyKey] || child.props.value,
            onChange: handlePropertyChange,
            designMode
          })
        }
        return child
      }
      return child
    })
  }

  return (
    <div>
      {designMode ? (
        <>
          <div className={selectedStyle}>
            {renderChildren()}
            <Popover open={open} onOpenChange={handleOpen}>
              <PopoverTrigger asChild={true}>
                <div className="absolute top-0 left-0 w-full h-full cursor-pointer" />
              </PopoverTrigger>
              <PopoverContent className={selectedStyle}>
                <>
                  <div className="fixed top-2 right-4">
                    <X
                      className="flex-shrink-0 mt-2 h-5 w-5"
                      onClick={handleClosePopover}
                    />
                  </div>
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <h4 className="font-medium leading-none">
                        Component Properties
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Set the properties for the component
                      </p>
                    </div>
                    <div className="grid gap-2">
                      {Object.entries(properties).map(([key, value], index) => (
                        <div className="mb-4" key={index}>
                          <label>{key}</label>
                          <Input
                            type="text"
                            value={value as string}
                            onChange={(e) => handlePropertyChange(key, e.target.value)}
                          />
                        </div>
                      ))}
                    </div>
                    <Button onClick={applyChanges}>Apply</Button>
                  </div>
                </>
              </PopoverContent>
            </Popover>
          </div>
        </>
      ) : (
        renderChildren()
      )}
    </div>
  )
}

interface PropertyControlProps {
  children?: any
  value?: any
  propertyKey?: any
  onChange?: (key: string, value: any) => void
  designMode?: boolean
}

export function PropertyControl({
  children,
  value,
  propertyKey,
  onChange,
  designMode,
}: PropertyControlProps) {
  return (
    <>
      {React.Children.map(children, child =>
        React.isValidElement(child)
          ? React.cloneElement(child, { children: value })
          : child
      )}
    </>
  )
}