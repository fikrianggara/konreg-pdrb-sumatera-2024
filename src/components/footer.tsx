import React from "react";
import { IconCircleLetterC } from "@tabler/icons-react";

const PROVINSI = [
  "Prov. Aceh",
  "Prov. Sumatera Utara",
  "Prov. Sumatera Barat",
  "Prov. Riau",
  "Prov. Kepulauan Riau",
  "Prov. Jambi",
  "Prov. Sumatera Selatan",
  "Prov. Bangka Belitung",
  "prov. Lampung",
];

const COLLABORATORS = [
  {
    instansi: "BAPPERIDA",
    instansiDaerah: PROVINSI,
  },
  {
    instansi: "BADAN PUSAT STATISTIK",
    instansiDaerah: PROVINSI,
  },
  {
    instansi: "DISKOMINFO",
    instansiDaerah: PROVINSI,
  },
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
      <ul className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 p-8 gap-4 text-sm lg:text-base">
        {COLLABORATORS.map((col) => (
          <li key={col.instansi} className="space-y-4">
            <h2 key={col.instansi} className="font-bold">
              {col.instansi}
            </h2>
            <ul key={col.instansi + "inda"} className="flex flex-col space-y-2">
              {col.instansiDaerah.map((inda) => (
                <li key={inda} className="font-light">
                  {inda}
                </li>
              ))}
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
