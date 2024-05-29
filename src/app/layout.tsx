import { ClerkProvider } from '@clerk/nextjs'
import { cn } from '@/lib/utils'
import { Toaster } from 'sonner'
import { ThemeProvider } from '@/components/themes/theme-provider'
import { TRPCReactProvider } from '@/trpc/provider'
import { fontSans } from '@/styles/fonts'
import { Theme } from '@radix-ui/themes'
import '@/styles/globals.css'
import '@radix-ui/themes/styles.css'

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <ClerkProvider>
        <html lang="en" suppressHydrationWarning>
          <head />
          <body
            className={cn(
              'min-h-screen bg-background',
              `font-sans antialiased`,
              fontSans.variable,
            )}
          >
            <TRPCReactProvider>
              <Toaster
                expand
                visibleToasts={4}
                position="bottom-right"
                invert={true}
                closeButton={true}
                richColors
              />
              <Theme>
                <ThemeProvider
                  attribute="class"
                  defaultTheme="system"
                  enableSystem
                >
                  {children}
                </ThemeProvider>
              </Theme>
            </TRPCReactProvider>
          </body>
        </html>
      </ClerkProvider>
    </>
  )
}
