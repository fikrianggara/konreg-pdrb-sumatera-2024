"use client";
// import { Span } from "next/dist/trace";
import akomodasi from "@/data/akomodasi.json";
import { useWindowSize } from "@/hooks/useWindowSize";
import {
  IconCalendar,
  IconClock,
  IconMapPin,
  IconRoad,
  IconTimeline,
} from "@tabler/icons-react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

function Page() {
  const [hotel, _] = useState(akomodasi.rumah_ibadah);
  const [selectedRumahIbadah, setSelectedRumahIbadah] = useState(
    akomodasi.rumah_ibadah[0]
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

  const handleHotelClick = (i: any) => {
    setSelectedRumahIbadah(akomodasi.rumah_ibadah[i]);
    router.push(pathname + "?" + createQueryString("id", i), { scroll: false });
  };

  useEffect(() => {
    if (searchParams.get("id") !== null) {
      const id = searchParams.get("id");
      if (akomodasi.rumah_ibadah[Number(id)]) {
        setSelectedRumahIbadah(akomodasi.rumah_ibadah[Number(id)]);
      } else {
        setSelectedRumahIbadah(akomodasi.rumah_ibadah[0]);
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
                    selectedRumahIbadah.id == h.id ? " opacity-90" : ""
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
          src={selectedRumahIbadah.link_foto}
          alt={selectedRumahIbadah.nama}
          className="h-48 md:h-64 w-full object-cover rounded-t-lg"
        />
        <div className="p-4 space-y-2 md:space-y-6">
          <h2 className="md:text-xl font-medium">{selectedRumahIbadah.nama}</h2>
          <ul className="w-full space-y-4 flex flex-wrap text-xs md:text-sm">
            <li className="space-y-2">
              <div className="flex items-center">
                <IconRoad />
                {selectedRumahIbadah.jarak} KM
              </div>
              <div className="flex items-center">
                <IconTimeline />
                {selectedRumahIbadah.waktu_tempuh}
              </div>
              <div className="flex items-center">
                <IconClock />
                {selectedRumahIbadah.jam_buka}
              </div>
              <div className="flex items-center">
                <IconCalendar />
                {selectedRumahIbadah.operasional}
              </div>
            </li>
            <a
              href={selectedRumahIbadah.maps}
              className="flex items-center cursor-pointer hover:opacity-75 shadow-lg py-1 bg-red-500 text-white rounded-full w-full text-center text-ellipsis justify-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconMapPin className="animate-bounce" />
              {selectedRumahIbadah.lokasi}
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Page;
