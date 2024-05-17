import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { Header } from '@/components/layouts/header'
import { Block } from '@/components/containers/block'
import { currentUser } from '@clerk/nextjs/server'
import { getFrontendBaseUrl } from '@/lib/url'
import { PageViewsChart } from '@/components/charts/PageViews'
import { VisitorTrafficChart } from '@/components/charts/VisitorTraffic'
import { getSubsiteDetails, verifySubRefAccess } from '@/lib/queries'
import { SiteDashboard } from '@/components/publisher/site-dashboard'

export const metadata: Metadata = {
  metadataBase: new URL(getFrontendBaseUrl()),
  title: 'Publisher Dashboard',
  description: 'Publish content to your site',
}

export default async function PublisherDashboard({ params }: any) {
  const curUser = await currentUser()
  if (!curUser) redirect('/')
  const subRef = params?.sub ? params.sub : null
  const hasAccess = await verifySubRefAccess(curUser, subRef)
  if (!hasAccess) redirect('/')
  const subsiteData: any = await getSubsiteDetails(curUser, subRef)

  const GridItem = ({ title, children }: any) => {
    return (
      <div className="flex flex-col items-center justify-center p-4 border border-slate-900 bg-slate-900/50 rounded-xl h-[400px]">
        <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
        {children}
      </div>
    )
  }

  return (
    <>
      <Block variant="sidebar">
        <Header
          title="Dashboard"
          description="Build and Publish Content for your Site"
          size="default"
        />
        <div>

        <SiteDashboard
          subRef={params?.sub}
          subsiteData={subsiteData}
        />

          <div className="grid w-full gap-10 max-w-[1400px] mb-10">
            <GridItem title="Page Views">
              <PageViewsChart />
            </GridItem>
          </div>
          <div className="grid w-full gap-10 max-w-[1400px]">
            <GridItem title="Visitor Traffic">
              <VisitorTrafficChart />
            </GridItem>
          </div>
        </div>
      </Block>
    </>
  )
}
