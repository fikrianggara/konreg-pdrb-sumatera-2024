"use client";
import Breadcrumb from "@/components/breadcrumb";
import { Tabs } from "@mantine/core";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const INFORMASI = [
  { name: "wisata", href: "/hiburan/wisata", label: "Wisata" },
  { name: "oleh-oleh", href: "/hiburan/oleh-oleh", label: "Oleh Oleh" },
  { name: "kuliner", href: "/hiburan/kuliner", label: "Kuliner" },
];

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const active = pathname.split("/").at(-1);
  useEffect(() => {}, [active]);
  return (
    <div className="p-4 lg:px-24 xl:px-36 py-8 space-y-4 lg:space-y-6 bg-dotted">
      <Breadcrumb />
      <div className="space-y-2 ">
        <h1 className="font-bold text-xl lg:text-3xl text-sky-800">
          <Link href="/hiburan">Hiburan</Link>
        </h1>
        <p className=" text-xs md:text-sm">
          Wisata, produk UMKM dan oleh-oleh khas Provinsi Jambi
        </p>
      </div>
      <Tabs
        // variant="pills"
        defaultValue={active}
        onChange={(value) => router.push(`/hiburan/${value}`)}
      >
        <Tabs.List>
          {INFORMASI.map((i) => (
            <Tabs.Tab
              key={i.name}
              value={i.name}
              className="text-xs md:text-sm"
            >
              {i.label}
            </Tabs.Tab>
          ))}
        </Tabs.List>
      </Tabs>
      {/* main content */}
      {children}
    </div>
  );
}
