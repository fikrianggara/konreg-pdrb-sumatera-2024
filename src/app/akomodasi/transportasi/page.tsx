"use client";
// import { Span } from "next/dist/trace";
import akomodasi from "@/data/akomodasi.json";
import { useWindowSize } from "@/hooks/useWindowSize";
import {
  IconCalendarMonth,
  IconClock,
  IconMapPin,
  IconMoneybag,
  IconPhone,
  IconPhoneFilled,
  IconRoad,
  IconRoute,
  IconStarFilled,
} from "@tabler/icons-react";
import Link from "next/link";
import {
  useParams,
  usePathname,
  useSearchParams,
  useRouter,
} from "next/navigation";
// import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

function Page() {
  const [hotel, _] = useState(akomodasi.transportasi);
  const [selectedHotel, setSelectedHotel] = useState(akomodasi.transportasi[0]);
  const [isRevealDesc, setIsRevealDesc] = useState(false);
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

  const handleHotelClick = (i: any) => {
    setSelectedHotel(akomodasi.transportasi[i]);
    router.push(pathname + "?" + createQueryString("id", i), { scroll: false });
  };

  useEffect(() => {
    if (searchParams.get("id") !== null) {
      const id = searchParams.get("id");
      if (akomodasi.transportasi[Number(id)]) {
        setSelectedHotel(akomodasi.transportasi[Number(id)]);
      } else {
        setSelectedHotel(akomodasi.transportasi[0]);
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
          {hotel.map((h, i) => {
            return (
              <div
                className={
                  "flex-none duration-300 ease-in-out rounded-lg hover:cursor-pointer relative bg-black"
                }
                key={h.id}
                onClick={(e) => handleHotelClick(i)}
              >
                <img
                  src={h.link_foto}
                  alt={h.nama}
                  className={`h-36 md:h-36 w-64 md:w-full object-cover rounded-lg opacity-50 duration-300 hover:opacity-90 ease-in-out ${
                    selectedHotel.id == h.id ? " opacity-90" : ""
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
          src={selectedHotel.link_foto}
          alt={selectedHotel.nama}
          className="h-48 md:h-64 w-full object-cover rounded-t-lg"
        />
        <div className="p-4 space-y-2 md:space-y-6">
          <h2 className="md:text-xl font-medium">{selectedHotel.nama}</h2>
          {!isRevealDesc ? (
            <div className="text-xs md:text-sm">
              <p className=" line-clamp-4">{selectedHotel.deskripsi}</p>
              <div
                onClick={() => setIsRevealDesc(true)}
                className=" underline text-cyan-500 cursor-pointer"
              >
                selengkapnya
              </div>
            </div>
          ) : (
            <div className="text-xs md:text-sm">
              <p>{selectedHotel.deskripsi}</p>

              <div
                onClick={() => setIsRevealDesc(false)}
                className=" underline text-cyan-500 cursor-pointer"
              >
                sembunyikan
              </div>
            </div>
          )}
          <ul className="w-full space-y-4 flex flex-wrap text-xs md:text-sm">
            <li className="space-y-2">
              <div className="flex items-center">
                <IconStarFilled />
                {selectedHotel.rate}
              </div>
              <div className="flex items-center">
                <IconRoad />
                {selectedHotel.jarak} KM
              </div>
              <div className="flex items-center">
                <IconPhoneFilled />
                {selectedHotel.telepon}
              </div>
            </li>
            <a
              href={selectedHotel.maps}
              className="flex items-center cursor-pointer hover:opacity-75 shadow-lg py-1 bg-red-500 text-white rounded-full w-full text-center text-ellipsis justify-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconMapPin className="animate-bounce" />
              {selectedHotel.kab_kota}
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Page;
