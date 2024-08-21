import React from "react";

import Link from "next/link";
import Breadcrumb from "@/components/breadcrumb";

const PENJEMPUTAN = [
  {
    instansi: "Kepala BPS Provinsi",
    pic: [
      {
        prov: "Aceh",
        nama: "Muji Lestari, SE, MA",
        hp: "081317485886",
      },
      {
        prov: "Sumatera Utara",
        nama: "Kuswan Gunanto, S.ST, M.Ec.Dev",
        hp: "082177273000",
      },
      {
        prov: "Sumatera Barat",
        nama: "Ir. Edy Akson",
        hp: "082180413300",
      },
      {
        prov: "Riau",
        nama: "Refia Hendrita, SP, M.A.P",
        hp: "085357111900",
      },
      {
        prov: "Sumatera Selatan",
        nama: "Edy Subagiyo, SP, ME",
        hp: "08117439311",
      },
      {
        prov: "Bengkulu",
        nama: "Edy Subagiyo, SP, ME",
        hp: "08117439311",
      },
      { prov: "Lampung", nama: "Ir. Edy Akson", hp: "082180413300" },
      {
        prov: "Bangka Belitung",
        nama: "Muji Lestari, SE, MA",
        hp: "081317485886",
      },
      {
        prov: "Kepulauan Riau",
        nama: "Refia Hendrita, SP, M.A.P",
        hp: "085357111900",
      },
    ],
  },
  {
    instansi: "Kepala BAPPEDA",
    pic: [
      {
        prov: "Aceh",
        nama: "Dr. Fahmi Rasid, SE, MA.P",
        hp: "082377673980",
      },
      {
        prov: "Sumatera Utara",
        nama: "Hendra Atmaja, SE, MM",
        hp: "082374805988",
      },
      {
        prov: "Sumatera Barat",
        nama: "Nusa Suryadi, ST, M.Eng",
        hp: "085279421427",
      },
      {
        prov: "Riau",
        nama: "Mustafa Kamal, S.IP",
        hp: "081283446386",
      },
      {
        prov: "Sumatera Selatan",
        nama: "Febri Suherdiansyah, M.Kom",
        hp: "081366029995",
      },
      {
        prov: "Bengkulu",
        nama: "Yudha Rusmansyah, SE.Ak, MM",
        hp: "08117404599",
      },
      {
        prov: "Lampung",
        nama: "Ilham Putra Madani S.STP",
        hp: "082176656843",
      },
      {
        prov: "Bangka Belitung",
        nama: "Ade Irawansyah, MH",
        hp: "08117491986",
      },
      {
        prov: "Kepulauan Riau",
        nama: "Darmawansyah, SP, MM",
        hp: "08118131414",
      },
    ],
  },
];

const page = () => {
  return (
    <div className="p-4 lg:px-24 xl:px-36 py-8 space-y-4 lg:space-y-6 bg-dotted">
      <Breadcrumb />
      <div className="space-y-2">
        <h1 className="font-bold text-xl lg:text-3xl text-sky-800">
          <Link href="/kontak">Kontak</Link>
        </h1>
        <p className="text-xs md:text-sm lg:text-base">
          Berikut kontak yang dapat dihubungi selama kegiatan Konreg PDRB
          Regional Sumatera 2024
        </p>
      </div>

      {PENJEMPUTAN.map((p, i) => (
        <div className="space-y-2" key={i}>
          <h2 className="font-bold text-lg lg:text-2xl text-sky-800">
            PIC Penjemputan {p.instansi}
          </h2>
          <hr />
          <table className="w-full text-left rtl:text-right text-gray-500 dark:text-gray-400 text-xs md:text-sm lg:text-base">
            <thead className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th>Provinsi</th>
                <th className="p-2">Nama PIC</th>
                <th>Nomor HP</th>
              </tr>
            </thead>
            {p.pic.map((kontak, i) => (
              <tr key={i}>
                <td className="font-bold">{kontak.prov}</td>
                <td className="p-2">{kontak.nama}</td>
                <td>{kontak.hp}</td>
              </tr>
            ))}
          </table>
        </div>
      ))}
    </div>
  );
};

export default page;
