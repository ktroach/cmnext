import React, { useState } from 'react'
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
}

function processChildren(children: any, propertyControls: any, otherChildren: any) {
  React.Children.forEach(children, (child) => {
    if (!React.isValidElement(child)) return

    if (child.type === PropertyControl) {
      propertyControls.push(child)
    } else {
      const newChild = React.cloneElement(child, {
        children: processChildren(child.props.children, propertyControls, []),
      })
      otherChildren.push(newChild)
    }
  })
  return otherChildren
}

export function PropertySet({ children, designMode }: PropertySetProps) {
  const [selected, setSelected] = useState(false)
  const [open, setOpen] = useState(false)
  const propertyControls: any = []
  const otherChildren = processChildren(children, propertyControls, [])

  const handleOpen = () => {
    setOpen(true)
    setSelected(true)
  }

  const handleClosePopover = () => {
    setOpen(false)
    setSelected(false)
  }

  const applyChanges = () => {
    toast('Changes applied')
  }

  const selectedStyle = selected
    ? ' border-4 border-cyan-600'
    : ' hover:border-4 hover:border-cyan-600'

  return (
    <div>
      {designMode ? (
        <>
          <div className={selectedStyle}>
            {otherChildren}

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
                      <div
                        className="grid grid-cols-1 items-center gap-4"
                        key="iconBlock1"
                      >
                        {propertyControls.map((control: any, index: number) => (
                          <div className="mb-4">
                            <div key={index}>
                              <label>{control.props.propertyKey}</label>
                              <Input
                                type="text"
                                value={control.props.value}
                                onChange={(e) =>
                                  control.props.onChange(
                                    control.props.propertyKey,
                                    e.target.value
                                  )
                                }
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <Button onClick={applyChanges}>Apply</Button>
                  </div>
                </>
              </PopoverContent>
            </Popover>
          </div>
        </>
      ) : (
        otherChildren
      )}
    </div>
  )
}

interface PropertyControlProps {
  children?: any
  value?: any
  propertyKey?: any
  onChange?: any
  designMode?: boolean
}

export function PropertyControl({
  children,
  value,
  propertyKey,
  onChange,
  designMode,
}: PropertyControlProps) {
  return <div>{children}</div>
}
