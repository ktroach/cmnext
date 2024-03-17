// Pages Layout

interface SubsiteLayoutProps {
    children: React.ReactNode
  }
  
  export default async function SubsiteLayout({ children }: SubsiteLayoutProps) {
    return (
      <div className="relative flex min-h-screen flex-col">
        Sub Pages layout
        <main className="flex-1">{children}</main>{' '}
      </div>
    )
  }
  