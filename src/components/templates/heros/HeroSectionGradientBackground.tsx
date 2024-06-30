import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { PropertyControl, PropertySet } from '@/components/designers/PropertyComponents'

export interface HeroSectionGradientBackgroundProps {
  children?: any
  header?: string
  subHeader?: string
  tagLine?: string
  buttonTitle?: string
  button2Title?: string
  designMode?: boolean
  onPropertyChange?: (key: string, value: any) => void
}

export default function HeroSectionGradientBackground({
  children,
  header,
  subHeader,
  tagLine,
  buttonTitle,
  button2Title,
  designMode,
  onPropertyChange
}: HeroSectionGradientBackgroundProps) {
  
  const [properties, setProperties] = useState({
    tagLine,
    header,
    subHeader,
    buttonTitle,
    button2Title
  })

  const handlePropertyChange = (key: string, value: any) => {
    setProperties(prevProps => ({
      ...prevProps,
      [key]: value
    }))
    
    // Call the onPropertyChange prop if it exists
    if (onPropertyChange) {
      onPropertyChange(key, value)
    }
  }

  return (
    <>
      {/* Hero */}
      <div className="relative overflow-hidden py-24 lg:py-32">
        {/* Gradients */}
        <div
          aria-hidden="true"
          className="flex absolute -top-96 start-1/2 transform -translate-x-1/2"
        >
          <div className="bg-gradient-to-r from-background/50 to-background blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem]" />
          <div className="bg-gradient-to-tl blur-3xl w-[90rem] h-[50rem] rounded-full origin-top-left -rotate-12 -translate-x-[15rem] from-primary-foreground via-primary-foreground to-background" />
        </div>
        {/* End Gradients */}
       
        <PropertySet designMode={designMode} onPropertyChange={handlePropertyChange}>
          <div className="relative z-10">
            <div className="container py-10 lg:py-16">
              <div className="max-w-2xl text-center mx-auto">
                <PropertyControl propertyKey="tagLine" value={properties.tagLine}>
                  <p className="">{properties.tagLine}</p>
                </PropertyControl>
                
                <div className="mt-5 max-w-2xl">
                  <PropertyControl propertyKey="header" value={properties.header}>
                    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                      {properties.header}
                    </h1>
                  </PropertyControl>
                </div>
                
                <div className="mt-5 max-w-3xl">
                  <PropertyControl propertyKey="subHeader" value={properties.subHeader}>
                    <p className="text-xl text-muted-foreground">{properties.subHeader}</p>
                  </PropertyControl>
                </div>
                
                <div className="mt-8 gap-3 flex justify-center">
                  <PropertyControl propertyKey="buttonTitle" value={properties.buttonTitle}>
                    <Button size={'lg'}>{properties.buttonTitle}</Button>
                  </PropertyControl>
                  <PropertyControl propertyKey="button2Title" value={properties.button2Title}>
                    <Button size={'lg'} variant={'outline'}>{properties.button2Title}</Button>
                  </PropertyControl>
                </div>
              </div>
            </div>
          </div>
        </PropertySet>
      </div>
    </>
  )
}