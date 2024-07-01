import React, { useState, useEffect, useRef } from 'react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'

interface PropertySetProps {
  children?: any
  designMode?: boolean
  onPropertyChange?: (key: string, value: any) => void
  onApplyChanges?: (propChanges: any) => void
}

export function PropertySet({ children, designMode, onPropertyChange, onApplyChanges }: PropertySetProps) {
  const [selected, setSelected] = useState(false)
  const [open, setOpen] = useState(false)
  const [properties, setProperties] = useState({})
  const containerRef = useRef(null)
  const popoverRef = useRef(null)  

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

  const handleOnApplyChanges = () => {
    if (onApplyChanges) {
        onApplyChanges(properties)
    }    
    handleClosePopover()
  }

  const selectedStyle = selected
    ? ' border-4 border-cyan-600'
    : ' hover:border-4 hover:border-cyan-600'

  const handleContainerClick = (e: React.MouseEvent) => {
    if (designMode && containerRef.current && containerRef.current.contains(e.target)) {
      if (!popoverRef.current || !popoverRef.current.contains(e.target)) {
        handleOpen()
      }
    }
  }  

  return (
    <div 
      ref={containerRef} 
      onClick={handleContainerClick} 
      className={designMode ? selectedStyle : ''}
    >
      {children}
      {designMode && (
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger >
            <div className="absolute top-0 left-0 w-full h-full cursor-pointer" />
          </PopoverTrigger>
          <PopoverContent ref={popoverRef} className={selectedStyle}>
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
              <Button onClick={handleOnApplyChanges}>Apply Changes</Button>
            </div>
          </PopoverContent>
        </Popover>
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
    if (propertyKey === 'imgSrc') {
        return (
            <>
              {React.Children.map(children, child =>
                React.isValidElement(child)
                  ? React.cloneElement(child)
                  : child
              )}
            </>
          )
    }
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