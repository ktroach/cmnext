'use client'

import * as React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { catchError } from '@/lib/errors'
import { getFrontendBaseUrl } from '@/lib/url'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useDialog } from '@/hooks/use-dialog'
import { toast } from 'sonner'
import { humanAndFormattedDateHelper } from '@/lib/dates'

export function SiteSettings(props: any) {
  const EditNameDialog = useDialog()
  const EditLogoDialog = useDialog()
  const EditVisibilityDialog = useDialog()
  const EditDomainDialog = useDialog()
  const baseUrl = getFrontendBaseUrl()
  const viewWebsiteUrl = props?.subRef ? `${baseUrl}/p/${props?.subRef}/pages` : ''
  const [isPending, startTransition] = React.useTransition()
  const [editedSiteName, setEditedSiteName] = React.useState('')
  const [editedSiteLogo, setEditedSiteLogo] = React.useState('')

  const handleSubmit = () => {
    startTransition(() => {
      try {
        window.open(viewWebsiteUrl, '_blank')
      } catch (err) {
        catchError(err)
      }
    })
  }

  const handleSaveName = (editKey: any) => {
    EditNameDialog.dismiss()
    toast.success('Name saved successfully.')
  }

  const handleSaveLogo = (editKey: any) => {
    EditNameDialog.dismiss()
    toast.success('Name saved successfully.')
  }  

  const getSiteSettingsMapping = (siteData: any) => {
    if (!siteData) { return null }
    const subSiteDetailsMapping = [
      {
        key: 'name',
        label: 'Site Name',
        value: siteData?.name,
        editable: true,
        trigger: EditNameDialog.trigger,
      },
      { key: 'Account', label: 'Account', value: siteData?.accountName, editable: true },
      { key: 'Logo', label: 'Logo', value: siteData?.logoUrl, editable: true, trigger: EditLogoDialog.trigger, },
      { key: 'Visibility', label: 'Visibility', value: siteData?.siteVisibility, editable: true },
      { key: 'Domain Name', label: 'Domain Name', value: siteData?.domainName, editable: true },
      { key: 'Domain Status', label: 'Domain Status', value: siteData?.domainStatus, editable: false },
      { key: 'URL', label: 'Site URL', value: viewWebsiteUrl, editable: false },      
      { key: 'Slug', label: 'Slug', value: `/${siteData?.subsiteRef}`, editable: false },
      { key: 'Created', label: 'Created', value: humanAndFormattedDateHelper(siteData?.createdAt, 'MM-DD-YY'), editable: false },
      { key: 'Last Updated', label: 'Last Updated', value: humanAndFormattedDateHelper(siteData?.updatedAt, 'MM-DD-YY'), editable: false },
    ]    
    return subSiteDetailsMapping
  }  

  const siteDetailsData: any = props?.subSiteDetails ? props.subSiteDetails : null
  const siteSettings: any = getSiteSettingsMapping(siteDetailsData)

  return (
    <>
      <div className="mb-5 ">
        <div className="mt-5 border dark:border-gray-700 space-y-2">
          <Table>
            <TableBody>
              {siteSettings.map((setting: any) => (
                <TableRow key={setting.key}>
                  <TableCell>{setting?.label}</TableCell>
                  <TableCell>{setting?.value}</TableCell>
                  {setting?.editable === true ? (
                    <TableCell>
                      <Button className="h-8 w-10" onClick={setting?.trigger}>
                        Edit
                      </Button>
                    </TableCell>
                  ) : (
                    <></>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <Dialog {...EditNameDialog.props}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit Name</DialogTitle>
              <DialogDescription>
                Make changes to your site's Name here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  className="col-span-3"
                  placeholder="My Site"
                  value={editedSiteName}
                  onChange={(e) => {
                    setEditedSiteName(e.target.value)
                  }}
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" disabled={false} onClick={handleSaveName}>
                Save Changes
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <Dialog {...EditLogoDialog.props}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit Logo</DialogTitle>
              <DialogDescription>
                Upload your site's Logo here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Logo URL
                </Label>
                <Input
                  id="name"
                  className="col-span-3"
                  placeholder="My Site"
                  value={editedSiteLogo}
                  onChange={(e) => {
                    setEditedSiteLogo(e.target.value)
                  }}
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" disabled={false} onClick={handleSaveLogo}>
                Save Changes
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>        
      </div>
    </>
  )
}
