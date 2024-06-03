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

const BAPPEDA = [
  "https://bappeda.acehprov.go.id/",
  "/",
  "https://bappeda.sumbarprov.go.id/",
  "https://bappedalitbang.riau.go.id/",
  "https://bappeda.jambiprov.go.id/",
  "http://bappeda.sumselprov.go.id/",
  "https://bappeda.bengkuluprov.go.id/",
  "https://bappeda.lampungprov.go.id/",
  "https://bappeda.babelprov.go.id/",
  "/",
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

const DISKOMINFO = [
  "https://diskominfo.acehprov.go.id/",
  "https://diskominfo.sumutprov.go.id/",
  "https://diskominfo.sumbarprov.go.id/",
  "https://diskominfo.riau.go.id/",
  "https://diskominfo.jambiprov.go.id/",
  "https://diskominfo.sumselprov.go.id/",
  "https://diskominfo.bengkuluprov.go.id/",
  "https://diskominfo.lampungprov.go.id/",
  "https://diskominfo.babelprov.go.id/",
  "https://diskominfo.kepriprov.go.id/",
];

const DJPB = [
  "https://djpb.kemenkeu.go.id/kanwil/aceh/id/",
  "https://djpb.kemenkeu.go.id/kanwil/sumut/id/",
  "https://djpb.kemenkeu.go.id/kanwil/sumbar/id/",
  "https://djpb.kemenkeu.go.id/kanwil/riau/id/",
  "https://djpb.kemenkeu.go.id/kanwil/jambi/id/",
  "https://djpb.kemenkeu.go.id/kanwil/sumsel/id/",
  "https://djpb.kemenkeu.go.id/kanwil/bengkulu/id/",
  "https://djpb.kemenkeu.go.id/kanwil/lampung/id/",
  "https://djpb.kemenkeu.go.id/kanwil/babel/id/",
  "https://djpb.kemenkeu.go.id/kanwil/kepri/id/",
];

const BI = [
  "https://www.bi.go.id/",
  "https://www.bi.go.id/",
  "https://www.bi.go.id/",
  "https://www.bi.go.id/",
  "https://www.bi.go.id/",
  "https://www.bi.go.id/",
  "https://www.bi.go.id/",
  "https://www.bi.go.id/",
  "https://www.bi.go.id/",
  "https://www.bi.go.id/",
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
      <ul className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-8 gap-4 text-xs lg:text-base">
        {COLLABORATORS.map((col) => (
          <div className="flex m-auto">
            <li key={col.instansi} className="space-y-4">
              <h2 key={col.instansi} className="font-bold">
                {col.instansi}
              </h2>
              <ul
                key={col.instansi + "inda"}
                className="flex flex-col space-y-2"
              >
                {col.instansiDaerah.map((inda, i) => {
                  switch (col.instansi) {
                    case "BAPPEDA":
                      return (
                        <li key={inda} className="font-light hover:underline">
                          <a href={BAPPEDA[i]}>{inda}</a>
                        </li>
                      );
                      break;
                    case "BADAN PUSAT STATISTIK":
                      return (
                        <li key={inda} className="font-light hover:underline">
                          <a href={BPS[i]}>{inda}</a>
                        </li>
                      );
                      break;
                    case "DISKOMINFO":
                      return (
                        <li key={inda} className="font-light hover:underline">
                          <a href={DISKOMINFO[i]}>{inda}</a>
                        </li>
                      );
                      break;
                    case "DIREKTORAT JENDRAL PERBENDAHARAAN":
                      return (
                        <li key={inda} className="font-light hover:underline">
                          <a href={DJPB[i]}>{inda}</a>
                        </li>
                      );
                      break;
                    case "BANK INDONESIA":
                      return (
                        <li key={inda} className="font-light hover:underline">
                          <a href={BI[i]}>{inda}</a>
                        </li>
                      );
                      break;
                  }
                })}
              </ul>
            </li>
          </div>
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
