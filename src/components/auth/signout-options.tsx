'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'
import { SignOutButton } from '@clerk/nextjs'

import { cn } from '@/lib/utils'
import { useMounted } from '@/hooks/use-mounted'
import { Button, buttonVariants } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { Icons } from '@/styles/icons'
import { RootConfig } from '@/config/root-config'

export function SignoutOptions() {
  const router = useRouter()
  const mounted = useMounted()
  const [isPending, startTransition] = React.useTransition()
  const SignOutOptionText: string =
    RootConfig && RootConfig?.signoutOptions
      ? RootConfig?.signoutOptions?.signOutOptionText
      : 'Sign Out'

  return (
    <div className="flex w-full items-center space-x-2">
      {mounted ? (
        <SignOutButton
          signOutCallback={() =>
            startTransition(() => {
              router.push(`${window.location.origin}/?redirect=false`)
            })
          }
        >
          <Button
            aria-label={SignOutOptionText}
            size="sm"
            className="w-full"
            disabled={isPending}
          >
            {isPending && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            {SignOutOptionText}
          </Button>
        </SignOutButton>
      ) : (
        <Skeleton
          className={cn(
            buttonVariants({ size: 'sm' }),
            'w-full bg-muted text-muted-foreground'
          )}
        >
          {SignOutOptionText}
        </Skeleton>
      )}
      <Button
        aria-label="Go back to the previous page"
        variant="outline"
        size="sm"
        className="w-full"
        onClick={() => router.back()}
        disabled={isPending}
      >
        Go back
      </Button>
    </div>
  )
}
