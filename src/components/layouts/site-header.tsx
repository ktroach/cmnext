import Link from 'next/link'
import type { User } from '@clerk/nextjs/dist/types/server'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button, buttonVariants } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Icons } from '@/styles/icons'
import { ThemeToggle } from './theme-toggle'
import { RootConfig } from '@/config/root-config'
import { MainNav } from './main-nav'
import { getFrontendBaseUrl } from '@/lib/url'

interface SiteHeaderProps {
  user: User | null
  subRef: string | undefined
}

export function SiteHeader({ user, subRef }: SiteHeaderProps) {
  let accountInitials: string | undefined = ''
  let accountEmail: string | undefined = ''
  const publisherUrl: string | undefined = subRef ? `/publish/${subRef}` : undefined
  const baseUrl: string = getFrontendBaseUrl()
  const accountUrl: string = publisherUrl ? `${baseUrl}${publisherUrl}/settings` : ''

  if (user) {
    accountInitials = `${user?.firstName?.charAt(0) ?? ''} ${
      user?.lastName?.charAt(0) ?? user?.username
    }`

    accountEmail =
      user?.emailAddresses?.find((e) => e.id === user.primaryEmailAddressId)
        ?.emailAddress ?? ''
  }

  return (
    <header className="sticky top-0 z-[1000] w-full border-b bg-white dark:bg-black">
      <div className="container flex h-16 items-center">
        <MainNav items={RootConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <ThemeToggle />
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger className="" asChild>
                  <Button
                    variant="secondary"
                    className="relative h-8 w-8 rounded-full"
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src={user.imageUrl}
                        alt={user.username ?? ''}
                      />
                      <AvatarFallback>{accountInitials}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-56 my-3"
                  align="end"
                  forceMount
                >
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {user.firstName} {user.lastName}
                      </p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {accountEmail}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem asChild>
                      <Link href={accountUrl}>
                        <Icons.user
                          className="mr-2 h-4 w-4"
                          aria-hidden="true"
                        />
                        Account Settings
                        <DropdownMenuShortcut>⇧⌘A</DropdownMenuShortcut>
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/signout">
                      <Icons.logout
                        className="mr-2 h-4 w-4"
                        aria-hidden="true"
                      />
                      Sign Out
                      <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link href="/signin">
                <div
                  className={buttonVariants({
                    size: 'sm',
                  })}
                >
                  Sign In
                  <span className="sr-only">Sign In</span>
                </div>
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  )
}
