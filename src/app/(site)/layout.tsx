// SiteLayout

interface SiteLayoutProps {
  children: React.ReactNode
}

export default async function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <main className="flex-1">{children}</main>{' '}
    </div>
  )
}
