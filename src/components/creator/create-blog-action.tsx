"use client"

import * as React from "react"
import { Button } from "../ui/button"
import { catchError } from "@/lib/errors"

export function CreateBlogAction() {
    const [isPending, startTransition] = React.useTransition()
    const handleSubmit = () => {
        startTransition(() => {
          try {
            window.location.href = "/admin/blog/new"
          } catch (err) {
            catchError(err)
          }
        })
    };
    return (
        <>
            <Button className="py-4" onClick={handleSubmit}>Create New Blog</Button>
        </>
    );
}
