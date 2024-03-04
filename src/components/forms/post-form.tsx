// 'use client'

// import React, { useState } from 'react'
// import { Button } from '../ui/button'
// import { Label } from '../ui/label'
// import { SparklesCore } from "../ui/sparkles"

// export default function PostForm() {
//   const [message, setMessage] = useState('')
//   const createUser = async () => {
//     try {
//       const response = await fetch('/api/hello', {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       })
//       const data = await response.json()
//       setMessage(data.message)
//     } catch (error) {
//       setMessage('An error occurred.')
//     }
//   }

//   return (
//     <div>
//         <SparklesCore
//           id="tsparticlesfullpage"
//           background="transparent"
//           minSize={0.6}
//           maxSize={1.4}
//           particleDensity={100}
//           className="w-full h-full"
//           particleColor="#FFFFFF"
//         />
//     </div>
//   )
// }
