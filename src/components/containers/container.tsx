import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const containerVariants = cva("grid items-center gap-8 pb-8 pt-6 md:py-8", {
  variants: {
    variant: {
      default: "container",
      sidebar: "",
      centered: "mx-auto mb-16 mt-20 max-w-md justify-center",
      markdown: "container max-w-3xl gap-0 py-8 md:py-10 lg:py-10",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {
  as?: React.ElementType
}

function Container({
  className,
  as: Comp = "section",
  variant,
  ...props
}: ContainerProps) {
  return (
    <Comp className={cn(containerVariants({ variant }), className)} {...props} />
  )
}

export { Container, containerVariants }
