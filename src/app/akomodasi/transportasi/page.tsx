"use client";
// import { Span } from "next/dist/trace";
import akomodasi from "@/data/akomodasi.json";
import {
  IconMapPin,
  IconPhoneFilled,
  IconRoad,
  IconStarFilled,
} from "@tabler/icons-react";

function Page() {
  const transportasi = akomodasi.transportasi;

  return (
    <div>
      <h1 className="md:text-2xl font-bold">
        Informasi Transportasi di Kota Jambi
      </h1>
      <hr />
      <p className="my-4">
        Kami merekomendasikan Anda untuk menggunakan aplikasi berikut:
      </p>
      <div className="p-4 w-full flex flex-col sm:flex-row justify-center	items-center">
        {transportasi.map((t, i) => (
          <div className="rounded-lg bg-white h-fit shadow-lg m-4" key={i}>
            <img
              src={t.link_foto}
              alt={t.nama}
              className="h-48 md:h-64 w-full object-cover rounded-t-lg"
            />
            <div className="p-4 space-y-2 md:space-y-6">
              <h2 className="md:text-xl font-medium text-center">{t.nama}</h2>
              <div className="text-xs md:text-sm">
                <p>{t.deskripsi}</p>
              </div>
              <ul className="w-full space-y-4 flex flex-wrap text-xs md:text-sm">
                <a
                  href={t.maps}
                  className="flex items-center cursor-pointer hover:opacity-75 shadow-lg py-1 bg-red-500 text-white rounded-full w-full text-center text-ellipsis justify-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconMapPin className="animate-bounce" />
                  {t.kab_kota}
                </a>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
