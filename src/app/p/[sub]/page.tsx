import React from 'react'
import { allPages } from 'contentlayer/generated'
import { Block } from '@/components/containers/block'
import MenuContainer from '@/components/containers/menu'
import { MenuItemType } from '@/components/templates/navmenuthing'

export default async function PagePage({ params }: any) {
  console.log('params: ', params)

  let m: any = []
  const menu = allPages.map((page) => (m.push({
    label: page.title,
    href: page.slug,
    slug: page.slugAsParams.split('/'),
  })))

  console.log("menu >>> ", m)

  const menuItems: MenuItemType[] = [
    {
      label: 'Item 1',
      type: 'group',
      href: '',
      items: [
        {
          label: 'Sub Item 1.1',
          href: '',
          type: 'navlink',
        },
        {
          label: 'Sub Item 1.2',
          href: '',
          type: 'navlink',
        },
        {
          label: 'Sub Item 1.3',
          href: '',
          type: 'navlink',
        },
      ],
    },
    {
      label: 'Item 2',
      type: 'group',
      href: '',
      items: [
        {
          label: 'Sub Item 2.1',
          href: '',
          type: 'navlink',
        },
        {
          label: 'Sub Item 2.2',
          href: '',
          type: 'navlink',
        },
      ],
    },
    {
      label: 'Item 3',
      href: '',
      type: 'group',
    },
  ]

  return (
    <Block>
      <MenuContainer menuItems={menuItems} />
      <div className="w-full py-8 overflow-hidden flex flex-col items-center justify-center">
        sub: {params.subId} - sub Home
      </div>
    </Block>
  )
}
