/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access */

"use client"

import * as React from "react"
import Link from 'next/link'
import type {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
} from "@tanstack/react-table"
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ChevronDown, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { 
  formatDateTime, 
  humanizeDate,
} from "@/lib/dates"
import { Icons } from "@/styles/icons"

export const CreateColumns = (contentType: string | undefined | null, subRef: string | undefined | null): ColumnDef<any>[] => {
  if (!contentType) {
    console.log("Failed to create columns, contentType is null or undefined")
    return []
  }
  const hasContentType: boolean = contentType ? true : false
  const contentTypePage: boolean = hasContentType && contentType === 'pages' ? true : false
  const contentTypeBlog: boolean = hasContentType && contentType === 'blogs' ? true : false  
  let cols: ColumnDef<any>[] = [
    {
      accessorKey: "id",
      header: "ID",
      cell: ({ row }) => (
        <div className="line-clamp-3 text-muted-foreground">{row.getValue("id")}</div>
      ),
    },     
    {
      accessorKey: "title",
      header: "Title",
      cell: ({ row }) => {
        const slugValue = row.getValue("slug")
        const editLink: string  = subRef && hasContentType && slugValue ? `/publish/${subRef}/${contentType}/edit/${slugValue}` : ''         
        return (
          <Link
            href={editLink}
          >
            <span className="hover:underline">{row.getValue("title")}</span>
          </Link>
        )      
      },
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => (
        <div className="line-clamp-3 text-muted-foreground">{row.getValue("status")}</div>
      ),
    },   
    {
      accessorKey: "slug",
      header: "Slug",
      cell: ({ row }) => (
        <div className="line-clamp-3 text-muted-foreground">{row.getValue("slug")}</div>
      ),
    },       
    {
      accessorKey: "parentPageId",
      header: "Parent ID",
      cell: ({ row }) => (
        <div className="line-clamp-3 text-muted-foreground">{row.getValue("parentPageId")}</div>
      ),
    },  
    {
      accessorKey: "pageOrder",
      header: "Sort Order",
      cell: ({ row }) => (
        <div className="line-clamp-3 text-muted-foreground">{row.getValue("pageOrder")}</div>
      ),
    },           
    {
      accessorKey: "publishedAt",   
      header: "Published",
      cell: ({ row }) => {
        const publishedAt: any = row.getValue("publishedAt")
        const formattedDate = publishedAt ? formatDateTime(publishedAt, 'ddd, MMM D, YYYY h:mm A (ZZ)') : ''
        const humanizedDate: string =  publishedAt ? humanizeDate(publishedAt) : ''
        if (publishedAt) {
          return (
            <div className="line-clamp-3 text-muted-foreground" title={formattedDate}>{humanizedDate}</div>
          )
        } else {
          return (
            <div className="line-clamp-3 text-muted-foreground"></div>
          )
        }
      },
    },     
    {
      accessorKey: "createdAt",   
      header: "Created",
      cell: ({ row }) => {
        const createdAt: any = row.getValue("createdAt")
        const formattedDate = createdAt ? formatDateTime(createdAt, 'ddd, MMM D, YYYY h:mm A (ZZ)') : ''
        const humanizedDate: string =  createdAt ? humanizeDate(createdAt) : ''
        if (createdAt) {
          return (
            <div className="line-clamp-3 text-muted-foreground" title={formattedDate}>{humanizedDate}</div>
          )
        } else {
          return (
            <div className="line-clamp-3 text-muted-foreground"></div>
          )
        }
      },
    }, 
    {
      accessorKey: "updatedAt",   
      header: "Updated",
      cell: ({ row }) => {
        const updatedAt: any = row.getValue("updatedAt")
        const formattedDate = updatedAt ? formatDateTime(updatedAt, 'ddd, MMM D, YYYY h:mm A (ZZ)') : ''
        const humanizedDate: string =  updatedAt ? humanizeDate(updatedAt) : ''
        if (updatedAt) {
          return (
            <div className="line-clamp-3 text-muted-foreground" title={formattedDate}>{humanizedDate}</div>
          )
        } else {
          return (
            <div className="line-clamp-3 text-muted-foreground"></div>
          )
        }
      },
    },           
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        const slugValue = row.getValue("slug")
        const statusValue = row.getValue("status")
        const isPublished: boolean = statusValue && statusValue === 'PUBLISHED' ? true : false 
        const editLink: string  = subRef && hasContentType && slugValue ? `/publish/${subRef}/${contentType}/edit/${slugValue}` : ''
        const editLinkText: string | undefined = contentTypePage ? 'Edit Page' : contentTypeBlog ? 'Edit Blog' : undefined
        const viewLink: string  = subRef && hasContentType && slugValue ? `/p/${subRef}/${contentType}/${slugValue}` : ''
        const viewLinkText: string | undefined = isPublished && contentTypePage ? 'View Page' : isPublished && contentTypeBlog ? 'View Blog' : undefined   
        const hasEditAccess: boolean = (editLink && editLinkText) ? true : false      
        const hasViewAccess: boolean = (viewLink && viewLinkText) ? true : false      
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              {hasEditAccess ? (
                <DropdownMenuItem><Link className='text-xs flex flex-row' href={editLink}><Icons.edit className=" text-xs pr-1 text-slate-700" aria-hidden="true" />{editLinkText}</Link></DropdownMenuItem>
              ) : (<></>)}
              {hasViewAccess ? (
                <DropdownMenuItem><Link className='text-xs flex flex-row' href={viewLink}><Icons.edit className=" text-xs pr-1 text-slate-700" aria-hidden="true" />{viewLinkText}</Link></DropdownMenuItem>
              ) : (<></>)}              
            </DropdownMenuContent>
          </DropdownMenu>
        )
      },
    },
  ]

  return cols 
}

interface SiteContentListProps {
    publisherContentData: any,
    contentDataType: string | undefined | null, 
    subsiteRef: string | undefined | null, 
}

export function SiteContentList({ publisherContentData: contentData, contentDataType, subsiteRef }: SiteContentListProps) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const data: any = contentData
  console.log('contentData: ', contentData?.length)

  const contentType: string = contentDataType ? contentDataType : 'pages'
  const columns: ColumnDef<any>[] = CreateColumns(contentType, subsiteRef)

  const table = useReactTable<any>({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        {/* Filter Input Field */}
        <Input
          placeholder="Filter Results (by Title)"
          value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("title")?.setFilterValue(event.target.value)
          }
          className="mx-1 max-w-sm"
        />
        {/* Columns Visible Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {/* Table */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Paging Controls */}
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) 
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
