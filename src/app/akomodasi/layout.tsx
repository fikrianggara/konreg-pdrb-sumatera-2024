"use client";
import Breadcrumb from "@/components/breadcrumb";
import { Tabs } from "@mantine/core";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const INFORMASI = [
  { name: "Hotel", href: "/akomodasi/hotel" },
  { name: "Rumah Makan", href: "/akomodasi/rumah-makan" },
  { name: "Perbelanjaan", href: "/akomodasi/perbelanjaan" },
  { name: "Transportasi", href: "/akomodasi/transportasi" },
  { name: "Rumah Ibadah", href: "/akomodasi/rumah-ibadah" },
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
      <div className="space-y-4">
        <h1 className="font-bold text-xl lg:text-3xl text-emerald-800">
          <Link href="/akomodasi">Akomodasi</Link>
        </h1>
        <p className=" text-sm lg:text-base text-gray-500">
          Nikmati fasilitas pendukung selama berpetualang di Provinsi Jambi
        </p>
      </div>
      <Tabs
        color="teal"
        // variant="pills"
        defaultValue={active}
        onChange={(value) => router.push(`/hiburan/${value}`)}
      >
        <Tabs.List>
          {INFORMASI.map((i) => (
            <Tabs.Tab key={i.name} value={i.name}>
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
