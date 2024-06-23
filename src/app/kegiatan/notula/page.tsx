"use client";
import React, { useEffect, useState } from "react";

import { MDXRemote } from "next-mdx-remote/rsc";
import mdx from "@/components/test.mdx";

const ROOT_URL = "/notula";
const NOTULAS: any[] = [
  {
    id: 1,
    url: ROOT_URL + "/hari-1",
    title: "Hari ke-1",
  },
  {
    id: 2,
    url: ROOT_URL + "/hari-2",
    title: "Hari ke-2",
  },
  {
    id: 3,
    url: ROOT_URL + "/hari-3",
    title: "Hari ke-3",
  },
];

export default function Page() {
  // const [markdownSource, setMarkdownSource] = useState("");

  // return NOTULAS.length > 0 ? (
  //   <div>
  //     {NOTULAS.map((n) => (
  //       <div>{n.toString()}</div>
  //     ))}
  //   </div>
  // ) : (
  //   <div>belum ada notulensi</div>
  // );

  return (
    <div className="p-4 w-full flex">
      <div></div>
      <div>
        <MDXRemote
          source={`# Welcome to my MDX page!
        This is some **bold** and _italics_ text.
        This is a list in markdown:
        - Onef
        - Two
        - Three
        <img src="/assets/ACEH.jpg" className='h-48 md:h-96 safw-full rounded-lg'/>
        Checkout my React component:
        `}
        />
      </div>
    </div>
  );
}
