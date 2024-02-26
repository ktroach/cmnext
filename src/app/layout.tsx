import { ClerkProvider } from '@clerk/nextjs'
import { cn } from '@/lib/utils'
import { Toaster } from '@/components/ui/toaster'
import { ThemeProvider } from '@/components/theme-provider'
import { fontMono, fontSans } from '@/styles/fonts'
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
              'min-h-screen bg-background font-sans antialiased',
              fontSans.variable,
              fontMono.variable
            )}
          >
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              {children}
            </ThemeProvider>
            <Toaster />
          </body>
        </html>
      </ClerkProvider>
    </>
  )
}
