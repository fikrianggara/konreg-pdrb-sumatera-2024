import React from "react";
import Image from "next/image";
import { IconChevronDown } from "@tabler/icons-react";
type NAVBAR_ITEM = {
  name: string;
  child?: NAVBAR_ITEM[];
};

const NAVBAR_ITEMS: NAVBAR_ITEM[] = [
  {
    name: "Kegiatan",
    child: [
      { name: "Lokasi" },
      { name: "Jadwal" },
      { name: "Materi" },
      { name: "Notula" },
    ],
  },
  {
    name: "Data dan Inforgrafis",
  },
  {
    name: "Galeri",
  },
  {
    name: "Kontak",
  },
  {
    name: "Tentang",
  },
];

function navbar() {
  return (
    <div className="bg-white p-8 py-4 shadow-lg flex justify-between items-center">
      <div className="flex items-center space-x-2 basis-1/3">
        <Image src="/assets/logo.png" width={56} height={56} alt="logo" />
        <div>
          <h1 className="text-emerald-800 text-2xl font-bold">
            Konsultasi Regional PDRB
          </h1>
          <h2 className="text-amber-500 font-base">Wilayah Sumatera</h2>
        </div>
      </div>
      <ul className="flex text-lg basis-2/3 justify-evenly">
        {NAVBAR_ITEMS.map((item: NAVBAR_ITEM) => {
          return (
            <li className="text-emerald-800 font-light hover:cursor-pointer hover:underline underline-offset-4 decoration-amber-500 flex space-x-4 items-center">
              {item.name}
              {item.child && <IconChevronDown size={16} />}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default navbar;
