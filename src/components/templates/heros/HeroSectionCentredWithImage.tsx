import { useState } from 'react'
import Image from 'next/image'
import { PropertyControl, PropertySet } from '@/components/designers/PropertyComponents'
import { cn } from '@/lib/utils'

export interface HeroSectionCentredWithImageProps {
  children?: any
  className?: string
  header?: any
  subHeader?: any
  imgSrc?: any 
  designMode?: boolean
  onApplyChanges?: (propChanges: any) => void
}

export default function HeroSectionCentredWithImage({
  children,
  className,
  header,
  subHeader, 
  imgSrc,
  designMode,
  onApplyChanges  
}: HeroSectionCentredWithImageProps) {

  const [properties, setProperties] = useState({
    className,
    header,
    subHeader,
    imgSrc,
  })

  const handlePropertyChange = (key: string, value: any) => {
    setProperties(prevProps => ({
      ...prevProps,
      [key]: value
    }))
  }

  const handleOnApplyChanges = (propChanges: any) => {
    if (onApplyChanges) {
      onApplyChanges(propChanges)
    }    
  }  

  return (
    <>
      {/* Hero */}
      <div className={cn('relative overflow-hidden py-24 lg:py-32', className)}>
      <PropertySet designMode={designMode} onPropertyChange={handlePropertyChange} onApplyChanges={handleOnApplyChanges}>
        <div className="container">
          <div className="max-w-2xl text-center mx-auto ">
            <PropertyControl propertyKey="header" value={properties.header}>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              {properties.header}
            </h1>
            </PropertyControl>
            <PropertyControl propertyKey="subHeader" value={properties.subHeader}>
            <p className="mt-3 text-xl text-muted-foreground">
              {properties.subHeader}
            </p>
            </PropertyControl>
          </div>

          <div className="mt-10 relative max-w-5xl mx-auto">
            <PropertyControl propertyKey="imgSrc" value={properties.imgSrc}>
              <Image
                key={Math.random()}
                src={properties.imgSrc}
                alt="Image"
                width={800}
                height={800}
              />
            </PropertyControl>  
            <div className="absolute bottom-12 -start-20 -z-[1] w-48 h-48 bg-gradient-to-b from-primary-foreground via-primary-foreground to-background p-px rounded-lg">
              <div className="w-48 h-48 rounded-lg bg-background/10" />
            </div>
            <div className="absolute -top-12 -end-20 -z-[1] w-48 h-48 bg-gradient-to-t from-primary-foreground via-primary-foreground to-background p-px rounded-full">
              <div className="w-48 h-48 rounded-full bg-background/10" />
            </div>
          </div>
          

        </div>
        
        </PropertySet>
      </div>
      {/* End Hero */}
    </>
  )
}
