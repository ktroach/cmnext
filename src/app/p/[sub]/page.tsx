'use server'

import React from 'react'
import { redirect } from 'next/navigation'

export default async function SubsiteHomePage({ params }: any) {
  const subRef: string | undefined = params?.sub ? params.sub : undefined
  if (subRef) {
    redirect(`/p/${subRef}/pages`)
  } else {
    redirect(`/`)
  }
  return (
    <>
    </>
  )
}
