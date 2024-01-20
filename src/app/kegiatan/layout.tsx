"use client";
import Breadcrumb from "@/components/breadcrumb";
// import { Metadata } from "next";
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

// export const metadata: Metadata = {
//   title: "Informasi",
// };

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
    <div className="p-4 lg:px-36 py-8 space-y-4 lg:space-y-6">
      <Breadcrumb />
      <div>
        <h1 className="font-bold text-xl lg:text-3xl text-emerald-800">
          Informasi{" "}
        </h1>
        <p className="font-medium text-sm lg:text-base text-gray-500 py-4">
          Informasi terkait penyelenggaraan Konreg PDRB regional sumatera 2024
        </p>
      </div>
      <Tabs
        defaultValue={active}
        color="teal"
        onChange={(value) => router.push(`/kegiatan/${value}`)}
      >
        <Tabs.List>
          {INFORMASI.map((i) => (
            // <Link href={"/kegiatan/" + i.name} key={i.name}>
            <Tabs.Tab key={i.name} value={i.name}>
              {i.name}
            </Tabs.Tab>
            // </Link>
          ))}
        </Tabs.List>
      </Tabs>
      {children}
    </div>
  );
}
