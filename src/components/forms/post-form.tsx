'use client'

import React, { useState, useEffect } from 'react'
import { Button } from '../ui/button'
import { Label } from '../ui/label'

export default function PostForm() {
  const [message, setMessage] = useState('')
  const createUser = async () => {
    try {
      const response = await fetch('/api/hello', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      console.log('>>> response >>> ', response)

      const data = await response.json()
      setMessage(data.message)
    } catch (error) {
      setMessage('An error occurred.')
    }
  }

  return (
    <div>
      <Button onClick={createUser}>GET</Button>
      <Label className=''>{message}</Label>
    </div>
  )
}
