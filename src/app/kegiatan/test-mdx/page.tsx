"use client";

import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

import Test from "@/components/test.mdx";
import { useState, useEffect } from "react";

const components = { Test };

export default async function MDXRenderer() {
  const source = "Some **mdx** text, with a component <Test />";
  const [mdxSource, setMdxSource] = useState<any>();

  useEffect(() => {
    const fetchMdxSource = async () => {
      const tempMdxSource = await serialize(source);
      setMdxSource(tempMdxSource);
    };
    fetchMdxSource();
  }, []);
  return (
    <div className="wrapper">
      {mdxSource && <MDXRemote {...mdxSource} components={components} />}
    </div>
  );
}
