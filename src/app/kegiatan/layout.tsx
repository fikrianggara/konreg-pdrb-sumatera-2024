"use client";
import Breadcrumb from "@/components/breadcrumb";
// import { Metadata } from "next";
import { Tabs } from "@mantine/core";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  const active = pathname.split("/").at(-1);
  return (
    <div className="lg:px-36 py-8 space-y-6">
      <Breadcrumb />
      <div>
        <h1 className="font-bold text-3xl	text-emerald-800">Informasi </h1>
        <p className="font-medium text-gray-500 py-4">
          Informasi terkait penyelenggaraan Konreg PDRB regional sumatera 2024
        </p>
      </div>
      <Tabs defaultValue={active} color="teal">
        <Tabs.List>
          {INFORMASI.map((i) => (
            <Link href={"/kegiatan/" + i.name} key={i.name}>
              <Tabs.Tab value={i.name}>{i.name}</Tabs.Tab>
            </Link>
          ))}
        </Tabs.List>
      </Tabs>
      {children}
    </div>
  );
}
