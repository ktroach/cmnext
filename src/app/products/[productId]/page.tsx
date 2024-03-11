import { Block } from '@/components/containers/block'

export default async function PagePage({ params }: any) {
  console.log("params: ", params)
  return (
    <Block>
     <div className="w-full overflow-hidden flex flex-col items-center justify-center">
      product id route page {params.productId}
      </div>
    </Block>
  )
}
