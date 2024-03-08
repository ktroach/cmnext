import { ClerkProvider } from '@clerk/nextjs'
import { cn } from '@/lib/utils'
import { Toaster } from 'sonner'
import { ThemeProvider } from '@/components/theme-provider'
import { TRPCReactProvider } from '@/trpc/provider'
import { fontSans, KaiseiDecolRegular, TheLastShuriken } from '@/styles/fonts'
import '@/styles/globals.css'

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <ClerkProvider>
        <html lang="en">
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
              />
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
              >
                {children}
              </ThemeProvider>
            </TRPCReactProvider>
          </body>
        </html>
      </ClerkProvider>
    </>
  )
}
