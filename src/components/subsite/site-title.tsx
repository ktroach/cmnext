// 'use client'

// import React, { useState } from 'react'
// import { useParams } from "next/navigation"
// import { useMounted } from '@/hooks/use-mounted'
// import { Label } from '../ui/label'

// export default function SiteTitle() {
//     const [title, setTitle] = useState('')
//     const mounted = useMounted()

//     if (mounted) {
//         const params = useParams()
//         const subsiteId = params?.id ? params.id : undefined; 
//         if (subsiteId) {
//             setTitle(`Subsite ${subsiteId}`)
//         }
//     }

//     return <div><Label>{title}</Label></div>
// }
