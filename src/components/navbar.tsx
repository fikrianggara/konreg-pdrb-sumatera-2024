"use client";

import React from "react";
import Image from "next/image";
import { IconChevronDown, IconChevronRight } from "@tabler/icons-react";
import { Dropdown } from "@/components/dropdown";
import Link from "next/link";

type NAVBAR_ITEM_TYPE = {
  name: string;
  child?: NAVBAR_ITEM_TYPE[];
  url?: string;
};

const NAVBAR_ITEMS: NAVBAR_ITEM_TYPE[] = [
  {
    name: "Kegiatan",
    child: [
      { name: "Lokasi", url: "/kegiatan/lokasi" },
      { name: "Jadwal", url: "/kegiatan/jadwal" },
      { name: "Materi", url: "/kegiatan/materi" },
      { name: "Notula", url: "/kegiatan/notula" },
    ],
    url: "kegiatan",
  },
  {
    name: "Data dan Inforgrafis",
    url: "/data-infografis/data",
  },
  {
    name: "Galeri",
    url: "/galeri",
  },
  {
    name: "Kontak",
    url: "/kontak",
  },
  {
    name: "Tentang",
    url: "/tentang",
  },
];

function navbar() {
  return (
    <div className="bg-white p-8 py-4 shadow-md flex justify-between items-center">
      <Link href="/" className="flex items-center space-x-2 basis-1/3">
        <Image src="/assets/logo.png" width={56} height={56} alt="logo" />
        <div>
          <h1 className="text-emerald-800 text-2xl font-bold">
            Konsultasi Regional PDRB
          </h1>
          <h2 className="text-amber-500 font-base">Wilayah Sumatera</h2>
        </div>
      </Link>
      <ul className="flex text-lg basis-2/3 justify-evenly">
        {/* <NavigationMenuDemo /> */}

        {NAVBAR_ITEMS.map((item: NAVBAR_ITEM_TYPE) => {
          if (item.child) {
            return (
              <Dropdown
                key={item.name}
                trigger={
                  <li
                    key={item.name}
                    className="font-normal text-emerald-800 font-light hover:cursor-pointer hover:underline underline-offset-4 decoration-amber-500 flex space-x-4 items-center"
                  >
                    {item.name}
                    {item.child && <IconChevronDown size={16} />}
                  </li>
                }
              >
                <ul key={item.name}>
                  {item.child.map((i: NAVBAR_ITEM_TYPE) => {
                    return (
                      <Link
                        key={i.name}
                        className="font-normal p-2 rounded-lg hover:bg-amber-50 text-gray-400 hover:text-emerald-800 duration-300 ease-in-out font-light hover:cursor-pointer flex space-x-4 items-center justify-between"
                        href={i.url ? i.url : "/"}
                      >
                        {i.name}
                        <IconChevronRight size={16} />
                      </Link>
                    );
                  })}
                </ul>
              </Dropdown>
            );
          } else {
            return (
              <Link
                key={item.name}
                className="font-normal text-emerald-800 font-light hover:cursor-pointer hover:underline underline-offset-4 decoration-amber-500 flex space-x-4 items-center"
                href={item.url ? item.url : "/"}
              >
                {item.name}
              </Link>
            );
          }
        })}
      </ul>
    </div>
  );
}

export default navbar;
