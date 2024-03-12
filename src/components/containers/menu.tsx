"use client"

import React, { useState } from 'react'
import { NavMenuThing } from '@/components/templates/navmenuthing'

export default function MenuContainer(props: any) {
  const [active, setActive] = useState<string | null>(null)

  return (
    <>
      <NavMenuThing
        className="top-2"
        menuItems={props?.menuItems}
        active={active}
        setActive={setActive}
      />
    </>
  )
}  