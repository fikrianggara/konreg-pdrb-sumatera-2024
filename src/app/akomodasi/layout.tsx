"use client";
import Breadcrumb from "@/components/breadcrumb";
import { Tabs } from "@mantine/core";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const INFORMASI = [
  { name: "Hotel", href: "/hotel" },
  { name: "Rumah Makan", href: "/rumah_makan" },
  { name: "Transportasi", href: "/transportasi" },
  { name: "Rumah Ibadah", href: "/rumah_ibadah" },
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
      <div className="space-y-2">
        <h1 className="font-bold text-xl lg:text-3xl text-sky-800">
          <Link href="/akomodasi">Akomodasi</Link>
        </h1>
        <p className=" text-xs md:text-sm lg:text-base">
          Nikmati fasilitas pendukung selama berpetualang di Provinsi Jambi
        </p>
      </div>
      <Tabs
        // variant="pills"
        defaultValue={active}
        onChange={(value) => router.push(`/akomodasi/${value}`)}
      >
        <Tabs.List>
          {INFORMASI.map((i) => (
            <Tabs.Tab
              key={i.href}
              value={i.href}
              className="text-xs md:text-sm"
            >
              {i.name}
            </Tabs.Tab>
          ))}
        </Tabs.List>
      </Tabs>
      {/* main content */}
      {children}
    </div>
  );
}
