import { Block } from '@/components/containers/block'
import { FloatingNavTemplate } from '@/components/templates/floating-nav'

export default async function PagePage({ params }: any) {
  console.log('params: ', params)

  const menuItems = [
    {
      title: "products"
    },
    {
      title: "services"
    },
    {
      title: "blogs"
    },
  ]

  return (
    <Block>
      <FloatingNavTemplate className="top-2" menuItems={menuItems} />
      <div className="w-full py-8 overflow-hidden flex flex-col items-center justify-center">
        sub: {params.subId} - sub Home
      </div>
    </Block>
  )
}
