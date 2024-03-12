"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/animations/floating-navbar"
import { cn } from "@/lib/utils";

export function FloatingNavTemplate({ className, menuItems }: { className?: string, menuItems: any }) {
  const [active, setActive] = useState<string | null>(null);

  const group1 = menuItems[0]
  const group2 = menuItems[1]
  const group3 = menuItems[2]

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item={group1.title}>
          <div className="flex flex-col space-y-4 text-sm">
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item={group2.title}>
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item={group3.title}>
          <div className="flex flex-col space-y-4 text-sm">
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
