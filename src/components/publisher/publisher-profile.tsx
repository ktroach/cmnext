'use client'

import * as React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@/components/ui/table'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Icons } from '@/styles/icons'

export function PublisherProfile(props: any) {
  const profileData = props && props?.profileData ? props.profileData : undefined
  const userName = profileData ? profileData?.userName : ''
  const userHandle = userName ? `@${userName}` : ''
  const firstInitial = userName ? userName[0].toUpperCase() : ''
  const lastInitial =
    userName && userName.length > 1
      ? userName[userName.length - 1].toUpperCase()
      : ''
  const userInitials = firstInitial ? `${firstInitial}${lastInitial}` : ''

  return (
    <>
      <div className="mb-5 ">
        <div className=" mt-5 border dark:border-gray-700 space-y-2">
          {profileData ? (
            <Table>
              <TableBody>
                <TableRow key="handle">
                  <TableCell>Handle</TableCell>
                  <TableCell>{userHandle}</TableCell>
                </TableRow>
                <TableRow key="avatar">
                  <TableCell>Avatar</TableCell>
                  <TableCell>
                    <Avatar>
                      <AvatarImage
                        src={profileData?.userAvatar}
                        alt={`@${profileData?.userName}`}
                        title={`@${profileData?.userAvatar}`}
                      />
                      <AvatarFallback>{userInitials}</AvatarFallback>
                    </Avatar>
                  </TableCell>
                </TableRow>
                <TableRow key="userEmail">
                  <TableCell>Email</TableCell>
                  <TableCell>{profileData?.userEmail}</TableCell>
                </TableRow>
                <TableRow key="createdAt">
                  <TableCell>Member Since</TableCell>
                  <TableCell>{profileData?.createdAt}</TableCell>
                </TableRow>
                <TableRow key="lastSignInAt">
                  <TableCell>Last Sign-In</TableCell>
                  <TableCell>{profileData?.lastSignInAt}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          ) : (
            <Icons.spinner
              className="mr-4 h-8 w-8 animate-spin"
              aria-hidden="true"
            />
          )}
        </div>
      </div>
    </>
  )
}
