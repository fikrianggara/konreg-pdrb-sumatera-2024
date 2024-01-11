"use client";

import * as React from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Dropdown(props: {
  trigger: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger key={props.trigger} asChild>
        {props.trigger}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {props.children}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
