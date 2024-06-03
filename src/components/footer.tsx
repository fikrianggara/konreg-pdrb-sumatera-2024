import React from "react";
import { IconCircleLetterC } from "@tabler/icons-react";

const PROVINSI = [
  "Prov. Aceh",
  "Prov. Sumatera Utara",
  "Prov. Sumatera Barat",
  "Prov. Riau",
  "Prov. Jambi",
  "Prov. Sumatera Selatan",
  "Prov. Bengkulu",
  "Prov. Lampung",
  "Prov. Bangka Belitung",
  "Prov. Kepulauan Riau",
];

const BPS = [
  "https://aceh.bps.go.id/",
  "https://sumut.bps.go.id/",
  "https://sumbar.bps.go.id/",
  "https://riau.bps.go.id/",
  "https://jambi.bps.go.id/",
  "https://sumsel.bps.go.id/",
  "https://bengkulu.bps.go.id/",
  "https://lampung.bps.go.id/",
  "https://babel.bps.go.id/",
  "https://kepri.bps.go.id/",
];

const COLLABORATORS = [
  {
    instansi: "BAPPEDA",
    instansiDaerah: PROVINSI,
  },
  {
    instansi: "BADAN PUSAT STATISTIK",
    instansiDaerah: PROVINSI,
  },
  // {
  //   instansi: "DISKOMINFO",
  //   instansiDaerah: PROVINSI,
  // },
  {
    instansi: "DIREKTORAT JENDRAL PERBENDAHARAAN",
    instansiDaerah: PROVINSI,
  },
  {
    instansi: "BANK INDONESIA",
    instansiDaerah: PROVINSI,
  },
];

const footer = () => {
  return (
    <footer className="w-full bg-emerald-800 text-white z-100">
      <ul className="grid grid-cols-2 xl:grid-cols-4 p-8 gap-4 text-sm lg:text-base">
        {COLLABORATORS.map((col) => (
          <li key={col.instansi} className="space-y-4">
            <h2 key={col.instansi} className="font-bold">
              {col.instansi}
            </h2>
            <ul key={col.instansi + "inda"} className="flex flex-col space-y-2">
              {col.instansiDaerah.map((inda, i) =>
                col.instansi === "BADAN PUSAT STATISTIK" ? (
                  <li key={inda} className="font-light hover:underline">
                    <a href={BPS[i]}>{inda}</a>
                  </li>
                ) : (
                  <li key={inda} className="font-light">
                    {inda}
                  </li>
                )
              )}
            </ul>
          </li>
        ))}
      </ul>
      <div className="bg-white p-8 text-gray-400 flex space-x-2 text-sm">
        {<IconCircleLetterC />}
        <div>
          <div>
            2024 Badan Pusat Statistik Provinsi Jambi. Semua hak dilindungi
          </div>
          <div>Dibangun oleh tim kangkoding bipies jumpbee</div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
