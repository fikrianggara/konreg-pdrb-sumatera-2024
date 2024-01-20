"use client";

import * as React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function AccordionDropdown(props: {
  trigger: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{props.trigger}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {props.children}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
