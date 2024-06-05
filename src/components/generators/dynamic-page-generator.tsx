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
  card: ({ children, ...props }: ComponentProps) => (
    <CardTemplate children={children} {...props} />
  ),
  quote: ({ className, children, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <blockquote
      className={cn('mt-6 border-l-2 pl-6 italic', className)}
      {...props}
      {...children ? (
        <p>
            {children}      
        </p>
        ):(<></>)}
    />
  ),
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cn('mt-2 scroll-m-20 text-4xl font-bold', className)}
      {...props}
    />
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cn(
        'mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0',
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={cn(
        'mt-8 scroll-m-20 text-xl font-semibold tracking-tight',
        className
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className={cn(
        'mt-8 scroll-m-20 text-lg font-semibold tracking-tight',
        className
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h5
      className={cn(
        'mt-8 scroll-m-20 text-lg font-semibold tracking-tight',
        className
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h6
      className={cn(
        'mt-8 scroll-m-20 text-base font-semibold tracking-tight',
        className
      )}
      {...props}
    />
  ),
  hr: ({ ...props }: React.HTMLAttributes<HTMLHRElement>) => (
    <hr className="my-4 md:my-8" {...props} />
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
