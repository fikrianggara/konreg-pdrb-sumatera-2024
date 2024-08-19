import React from "react";
import { IconCircleLetterC } from "@tabler/icons-react";
import Image from "next/image";

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
    instansi: "BPS",
    instansiDaerah: PROVINSI,
  },
  {
    instansi: "BAPPEDA",
    instansiDaerah: PROVINSI,
  },

  {
    instansi: "BI",
    instansiDaerah: PROVINSI,
  },
  {
    instansi: "DISKOMINFO",
    instansiDaerah: PROVINSI,
  },
  {
    instansi: "DJPb",
    instansiDaerah: PROVINSI,
  },
];
const PEMDA = [
  {
    provinsi: "aceh",
    src: "/assets/logo aceh.png",
    alt: "provinsi aceh",
  },
  {
    provinsi: "bangka belitung",
    src: "/assets/logo babel.png",
    alt: "provinsi babel",
  },
  {
    provinsi: "bengkulu",
    src: "/assets/logo bengkulu.png",
    alt: "provinsi bengkulu",
  },
  {
    provinsi: "jambi",
    src: "/assets/logo jambi.png",
    alt: "provinsi jambi",
  },
  {
    provinsi: "kepri",
    src: "/assets/logo kepri.png",
    alt: "provinsi kepri",
  },
  {
    provinsi: "lampung",
    src: "/assets/logo lampung.png",
    alt: "provinsi lampung",
  },
  {
    provinsi: "riau",
    src: "/assets/logo riau.png",
    alt: "provinsi riau",
  },
  {
    provinsi: "sumbar",
    src: "/assets/logo sumbar.png",
    alt: "provinsi sumbar",
  },
  {
    provinsi: "sumsel",
    src: "/assets/logo sumsel.png",
    alt: "provinsi sumsel",
  },
  {
    provinsi: "sumut",
    src: "/assets/logo sumut.png",
    alt: "provinsi sumut",
  },
];
const footer = () => {
  return (
    <footer className="w-full bg-sky-800 text-white z-100 divide-gray-400 divide-dotted mt-4 md:mt-8">
      <div className="space-y-6 py-8">
        <div
          className="flex items-center space-x-4 md:space-x-6 lg:space-x-12 m-auto w-full justify-center px-8
      "
        >
          <Image
            src={"/assets/logo jambi.png"}
            height={60}
            width={60}
            alt="logo jambi"
            className="self-center"
          ></Image>

          <Image
            src={"/assets/bi.jpg"}
            height={60}
            width={60}
            alt="logo bi"
            className="self-center rounded-full"
          ></Image>
          <Image
            src={"/assets/bps.png"}
            height={60}
            width={60}
            alt="logo bps"
            className="self-center"
          ></Image>
          <Image
            src={"/assets/kemenkeu.png"}
            height={60}
            width={60}
            alt="logo kemenkeu"
            className="self-center"
          ></Image>
        </div>
        <ul className="flex flex-col lg:flex-none lg:grid lg:grid-cols-4 gap-2 lg:gap-8 px-8 ">
          <li className="col-span-2 lg:col-span-4  duration-200 ease-in-out rounded-xl w-full p-4 text-center self-center backdrop-blur-sm grid grid-cols-5 lg:grid-cols-10 gap-4">
            {PEMDA.map((p) => (
              <div className="flex items-center m-auto" key={p.provinsi}>
                <Image
                  src={p.src}
                  height={50}
                  width={50}
                  alt={p.alt}
                  className="self-center"
                ></Image>
              </div>
            ))}
          </li>
        </ul>
      </div>

      <hr className="dotted" />
      <ul className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 p-8 gap-4 text-xs lg:text-base">
        {COLLABORATORS.map((col) => (
          <div className="flex m-auto" key={col.instansi}>
            <li className="space-y-4">
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
                    case "BPS":
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
                    case "DJPb":
                      return (
                        <li key={inda} className="font-light hover:underline">
                          <a href={DJPB[i]}>{inda}</a>
                        </li>
                      );
                      break;
                    case "BI":
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
