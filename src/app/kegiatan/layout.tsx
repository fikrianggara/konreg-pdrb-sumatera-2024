"use client";
import Breadcrumb from "@/components/breadcrumb";
import { Tabs } from "@mantine/core";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const INFORMASI = [
  { name: "lokasi", href: "/kegiatan/lokasi" },
  { name: "jadwal", href: "/kegiatan/jadwal" },
  { name: "materi", href: "/kegiatan/materi" },
  { name: "notula", href: "/kegiatan/notula" },
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
    <div className="p-4 lg:px-36 py-8 space-y-4 lg:space-y-6 bg-dotted">
      <Breadcrumb />
      <div className="space-y-2">
        <h1 className="font-bold text-xl lg:text-3xl text-emerald-800">
          <Link href="/kegiatan/lokasi">Kegiatan</Link>
        </h1>
        <p className=" text-sm w-96 md:w-1/2">
          Informasi terkait penyelenggaraan Konreg PDRB Regional Sumatera 2024
        </p>
      </div>

      <Tabs
        color="teal"
        // variant="pills"
        defaultValue={active}
        onChange={(value) => router.push(`/kegiatan/${value}`)}
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
