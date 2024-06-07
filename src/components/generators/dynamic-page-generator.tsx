// This is the initial page generator implementation in Typescript. By page generator, what we mean is that this module this will be generating content dynamically on the page based on a consistent data structure.
// This is by no means a new concept, nor do we claim to have innovated something that has never been done before.
// We will be creating a Page Generator like this one in Rust using WASM. This module uses pure Typescript and does not use Rust, but will it be used for performance comparisons.
// The purpose of this Typescript module is to prototype the generator module and also to compare with a Rust implemention. We will  measure and compare performance metrics and determine which approach yields the most benefits.
// One other thing we want to evaluate is the potential of dynamic page rendering issues and how we should address that if it is a problem.  We are targeting Rust for the long-term for generators that we develop.
// The Rust implementation is currently in development and will be included in an upcoming release

import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import CarouselTemplate from '@/components/templates/carousel'
import CardTemplate from '@/components/templates/card'
import BlockQuoteTemplate from '@/components/templates/blockquote'
import UnOrderedListTemplate from '@/components/templates/lists/UnOrderedListTemplate'

type ComponentProps = {
  [key: string]: any
}

type Node = {
  key: any
  value: string
  children: Node[]
  properties: ComponentProps
}

const componentsMap: { [key: string]: React.FC<ComponentProps> } = {
  block: ({ children, ...props }: ComponentProps) => (
    <div {...props}>{children}</div>
  ),
  image: (props: ComponentProps) => (
    <Image src={props.src} alt={props.alt} {...props} />
  ),
  carousel: ({ children, ...props }: ComponentProps) => (
    <CarouselTemplate children={children} {...props} />
  ),
  list: ({ children, ...props }: ComponentProps) => (
    <UnOrderedListTemplate children={children} {...props} />
  ),  
  card: ({ children, ...props }: ComponentProps) => (
    <CardTemplate children={children} {...props} />
  ),
  hr: (props: ComponentProps) => (
    <hr className={cn('my-5 md:my-5', props?.className)} />
  ),
  blockquote: (props: ComponentProps) => <BlockQuoteTemplate {...props} />,
  p: (props: ComponentProps) => (
    <p className={cn('leading-7 [&:not(:first-child)]:mt-6', props?.className)}>
      {props?.text}
    </p>
  ),  
  lead: (props: ComponentProps) => (
    <p className={cn('text-xl text-muted-foreground', props?.className)}>
      {props?.text}
    </p>
  ),  
  muted: (props: ComponentProps) => (
    <p className={cn('text-sm text-muted-foreground', props?.className)}>
      {props?.text}
    </p>
  ),    
  small: (props: ComponentProps) => (
    <p className={cn('text-sm font-medium leading-none', props?.className)}>
      {props?.text}
    </p>
  ), 
  large: (props: ComponentProps) => (
    <p className={cn('text-lg font-semibold', props?.className)}>
      {props?.text}
    </p>
  ),         
  code: (props: ComponentProps) => (
    <code className={cn('relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold', props?.className)}>
      {props?.text}
    </code>
  ),      
  h1: (props: ComponentProps) => (
    <h1 className={cn('scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl', props?.className)}>
      {props?.text}
    </h1>
  ),
  h2: (props: ComponentProps) => (
    <h2
      className={cn(
        'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
        props?.className
      )}
    >
      {props?.text}
    </h2>
  ),
  h3: (props: ComponentProps) => (
    <h3
      className={cn(
        'scroll-m-20 text-2xl font-semibold tracking-tight',
        props?.className
      )}
    >
      {props?.text}
    </h3>
  ),
  h4: (props: ComponentProps) => (
    <h4
      className={cn(
        'scroll-m-20 text-xl font-semibold tracking-tight',
        props?.className
      )}
    >
      {props?.text}
    </h4>
  ),
  h5: (props: ComponentProps) => (
    <h5
      className={cn(
        'mt-8 scroll-m-20 text-lg font-semibold tracking-tight',
        props?.className
      )}
    >
      {props?.text}
    </h5>
  ),
  h6: (props: ComponentProps) => (
    <h6
      className={cn(
        'mt-8 scroll-m-20 text-base font-semibold tracking-tight',
        props?.className
      )}
    >
      {props?.text}
    </h6>
  ),
}

const createComponent = (node: Node): React.ReactNode => {
  const Component = componentsMap[node.value]
  if (!Component) return null

  if (node?.children && node?.children?.length > 0) {
    const children = node.children.map((child, index) =>
      createComponent({ ...child, key: index })
    )
    return (
      <Component
        key={node.properties.key || Math.random()}
        {...node.properties}
      >
        {children}
      </Component>
    )
  }

  return (
    <Component
      key={node.properties.key || Math.random()}
      {...node.properties}
    ></Component>
  )
}

export interface DynamicPageGeneratorProps {
  jsonData: any
}

const DynamicPageGenerator = ({ jsonData }: DynamicPageGeneratorProps) => {
  return (
    <>
      {jsonData.children.map((node: any, index: number) =>
        createComponent({ ...node, key: index })
      )}
    </>
  )
}

export default DynamicPageGenerator
