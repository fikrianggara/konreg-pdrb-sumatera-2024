"use client";
// import { Span } from "next/dist/trace";
import akomodasi from "@/data/akomodasi.json";
import { useWindowSize } from "@/hooks/useWindowSize";
import {
  IconCalendar,
  IconCashBanknote,
  IconClock,
  IconMapPin,
  IconRoad,
  IconStarFilled,
  IconTimeline,
} from "@tabler/icons-react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
// import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

function Page() {
  const [rumah_makan, _] = useState(akomodasi.rumah_makan);
  const [selecteRumahMakan, setSelecteRumahMakan] = useState(
    akomodasi.rumah_makan[0]
  );
  const { width } = useWindowSize();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const handleRumahMakanClick = (i: any) => {
    setSelecteRumahMakan(akomodasi.rumah_makan[i]);
    router.push(pathname + "?" + createQueryString("id", i), { scroll: false });
  };

  useEffect(() => {
    if (searchParams.get("id") !== null) {
      const id = searchParams.get("id");
      if (akomodasi.rumah_makan[Number(id)]) {
        setSelecteRumahMakan(akomodasi.rumah_makan[Number(id)]);
      } else {
        setSelecteRumahMakan(akomodasi.rumah_makan[0]);
        router.push(pathname + "?" + createQueryString("id", "0"), {
          scroll: false,
        });
      }
    } else {
      router.push(pathname + "?" + createQueryString("id", "0"), {
        scroll: false,
      });
    }
  }, []);

  return (
    <div className=" p-4 w-full space-y-4 md:space-y-0 flex flex-col md:space-x-6 md:flex-row relative">
      <div className="lg:w-2/3 space-y-6 lg:space-y-8">
        <div className="space-y-2 justify-center w-full">
          {width && width < 800 ? (
            <img
              src="/assets/banner_wisata.png"
              alt="Wisata jambi"
              className={`rounded-lg`}
            />
          ) : (
            <img
              src="/assets/1x3_banner_wisata_nocheck.png"
              alt="Wisata jambi"
              className={`rounded-lg`}
            />
          )}
        </div>

        <div className="flex md:grid md:grid-cols-1 lg:grid-cols-2 gap-2 overflow-x-scroll w-full">
          {rumah_makan.map((h, i) => {
            return (
              <div
                className={
                  "flex-none duration-300 ease-in-out rounded-lg hover:cursor-pointer relative bg-black"
                }
                key={h.id}
                onClick={(e) => handleRumahMakanClick(i)}
              >
                <img
                  src={h.link_foto}
                  alt={h.nama}
                  className={`h-36 md:h-36 w-64 md:w-full object-cover rounded-lg opacity-50 duration-300 hover:opacity-90 ease-in-out ${
                    selecteRumahMakan.id == h.id ? " opacity-90" : ""
                  }
                  `}
                  width={200}
                />
                <p className="absolute z-10 bottom-4 left-4 text-white font-medium">
                  {h.nama}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className=" rounded-lg bg-white lg:w-1/3 h-fit sticky top-24">
        <img
          src={selecteRumahMakan.link_foto}
          alt={selecteRumahMakan.nama}
          className="h-48 md:h-64 w-full object-cover rounded-t-lg"
        />
        <div className="p-4 space-y-2 md:space-y-6">
          <h2 className="md:text-xl font-medium">{selecteRumahMakan.nama}</h2>
          <div className="text-xs md:text-sm">
            <p>{selecteRumahMakan.deskripsi}</p>
          </div>
          <ul className="w-full space-y-4 flex flex-wrap text-xs md:text-sm">
            <li className="space-y-2">
              <div className="flex items-center">
                <IconStarFilled />
                {selecteRumahMakan.rating_google}
              </div>
              <div className="flex items-center">
                <IconRoad />
                {selecteRumahMakan.jarak} KM
              </div>
              <div className="flex items-center">
                <IconCashBanknote />
                {selecteRumahMakan.harga}
              </div>
              <div className="flex items-center">
                <IconTimeline />
                {selecteRumahMakan.waktu_tempuh}
              </div>
              <div className="flex items-center">
                <IconClock />
                {selecteRumahMakan.jam_buka}
              </div>
              <div className="flex items-center">
                <IconCalendar />
                {selecteRumahMakan.operasional}
              </div>
            </li>
            <a
              href={selecteRumahMakan.maps}
              className="flex items-center cursor-pointer hover:opacity-75 shadow-lg py-1 bg-red-500 text-white rounded-full w-full text-center text-ellipsis justify-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconMapPin className="animate-bounce" />
              Lokasi
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Page;
