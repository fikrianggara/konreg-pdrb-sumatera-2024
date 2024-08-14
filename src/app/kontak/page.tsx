import React from "react";

import Link from "next/link";
import Breadcrumb from "@/components/breadcrumb";

const PENJEMPUTAN = [
  { prov: "Prov. Aceh", pic: "PIC Aceh", hp: "08" },
  { prov: "Prov. Sumatera Utara", pic: "", hp: "08" },
  { prov: "Prov. Sumatera Barat", pic: "", hp: "08" },
  { prov: "Prov. Riau", pic: "", hp: "08" },
  { prov: "Prov. Jambi", pic: "", hp: "08" },
  { prov: "Prov. Sumatera Selatan", pic: "", hp: "08" },
  { prov: "Prov. Bengkulu", pic: "", hp: "08" },
  { prov: "Prov. Lampung", pic: "", hp: "08" },
  { prov: "Prov. Bangka Belitung", pic: "", hp: "08" },
  { prov: "Prov. Kepulauan Riau", pic: "", hp: "08" },
];
const PIC = [
  { instansi: "BPS Provinsi Jambi", pic: "Agus Widodo", hp: "087777777" },
  { instansi: "Instansi 2", pic: "", hp: "08" },
  { instansi: "Instansi 3", pic: "", hp: "08" },
];

const page = () => {
  return (
    <div className="p-4 lg:px-24 xl:px-36 py-8 space-y-4 lg:space-y-6 bg-dotted">
      <Breadcrumb />
      <div className="space-y-2">
        <h1 className="font-bold text-xl lg:text-3xl text-sky-800">
          <Link href="/kontak">Kontak</Link>
        </h1>
        <p className=" text-xs md:text-sm lg:text-base">
          Berikut kontak yang dapat dihubungi selama kegiatan Konreg PDRB
          Regional Sumatera 2024
        </p>
      </div>
      <div className="space-y-2">
        <h2 className="font-bold text-lg lg:text-2xl text-sky-800">
          PIC Kegiatan
        </h2>
        <hr />
        <table className="w-full text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th>Instansi</th>
              <th>Nama PIC</th>
              <th>Nomor HP</th>
            </tr>
          </thead>
          {PIC.map((p, i) => (
            <tr key={i}>
              <td>{p.instansi}</td>
              <td>{p.pic}</td>
              <td>{p.hp}</td>
            </tr>
          ))}
        </table>
      </div>
      <div className="space-y-2">
        <h2 className="font-bold text-lg lg:text-2xl text-sky-800">
          PIC Penjemputan
        </h2>
        <hr />
        <table className="w-full text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th>LO Provinsi</th>
              <th>Nama PIC</th>
              <th>Nomor HP</th>
            </tr>
          </thead>
          {PENJEMPUTAN.map((p, i) => (
            <tr key={i}>
              <td>{p.prov}</td>
              <td>{p.pic}</td>
              <td>{p.hp}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default page;
