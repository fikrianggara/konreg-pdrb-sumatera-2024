"use client";
// import { Span } from "next/dist/trace";
import hiburan from "@/data/umkm.json";
import useWindowDimensions, { useWindowSize } from "@/hooks/useWindowSize";
import {
  IconMountain,
  IconShoppingBag,
  IconBuildingMonument,
  IconTag,
  IconMapPin,
} from "@tabler/icons-react";
import { useState } from "react";

function Page() {
  // Allow the user to freely go back and forth between visited steps.
  const [umkm, setUmkm] = useState(hiburan.umkm);
  const [filteredUmkm, setFilteredUmkm] = useState(umkm);
  const [selectedUmkm, setSelectedUmkm] = useState(umkm[0]);
  const { width } = useWindowSize();

  return (
    <div className="space-y-6 lg:space-y-8 p-4 flex flex-col m-auto justify-center">
      <div className="space-y-2 justify-center">
        {width && width < 800 ? (
          <img
            src="/assets/banner_oleh-oleh.png"
            alt="Wisata jambi"
            className={`rounded-lg lg:w-2/3`}
          />
        ) : (
          <img
            src="/assets/1x3_banner_oleh-oleh_nocheck.png"
            alt="Wisata jambi"
            className={`rounded-lg lg:w-2/3`}
          />
        )}
      </div>
      <div className="flex grid grid-rows-2 md:grid-cols-1 lg:grid-cols-2 gap-2 overflow-x-scroll md:w-2/3 ">
        {filteredUmkm.length < 1 ? (
          <div className="text-gray-400">tidak ada data</div>
        ) : (
          filteredUmkm.map((w, i) => {
            return (
              <div
                className="bg-white rounded-lg p-2 flex flex-col justify-between"
                key={w.id}
              >
                <div className="flex flex-col md:flex-row">
                  <img
                    src={w.link_foto}
                    alt={w.nama}
                    className="h-36 md:aspect-square md:w-36 object-cover rounded-lg"
                  />
                  <div className="p-2 space-y-4">
                    <h2 className="text-base font-medium"> {w.nama}</h2>
                    <p className="line-clamp-4 text-xs ">{w.deskripsi}</p>
                    <h3 className="flex items-start text-xs">
                      <IconTag size={24} />{" "}
                      <span className="ml-2"> {w.produk}</span>
                    </h3>
                  </div>
                </div>

                <div className="p-2 space-y-4">
                  <div className="md:space-x-4 space-y-2 md:space-y-0 flex flex-col md:flex-row justify-between items-center">
                    <a
                      href={w.maps}
                      className="flex items-center cursor-pointer hover:opacity-75 shadow-lg py-2 bg-red-500 text-white rounded-full w-full text-center text-ellipsis justify-center text-xs"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconMapPin className="" size={16} />
                      lokasi
                    </a>
                    <a
                      href={w.link_toko}
                      className="flex items-center cursor-pointer hover:opacity-75 shadow-lg py-2 bg-emerald-600 text-white rounded-full w-full text-center text-ellipsis justify-center text-xs"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconShoppingBag className="" size={16} />
                      Toko
                    </a>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
      {/* <div className="grid grid-cols-2 gap-2 lg:w-2/3">
        {olehOleh.map((o) => {
          return (
            <div className="h-full bg-gray-100 rounded-lg p-8" key={o.id}>
              {o.nama}
            </div>
          );
        })}
      </div> */}
    </div>
  );
}

export default Page;
