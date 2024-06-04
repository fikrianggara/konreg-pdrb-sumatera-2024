"use client";
// import { Span } from "next/dist/trace";
import akomodasi from "@/data/akomodasi.json";
import { useWindowSize } from "@/hooks/useWindowSize";
import {
  IconBuildingChurch,
  IconBuildingMonument,
  IconBuildingMosque,
  IconCalendarMonth,
  IconClock,
  IconMapPin,
  IconMountain,
  IconRoute,
  IconShoppingBag,
} from "@tabler/icons-react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

function Page() {
  const [rumah_ibadah, _] = useState(
    akomodasi.rumah_ibadah.sort(function (a, b) {
      if (a.jarak && b.jarak) return a.jarak - b.jarak;
      return 0;
    })
  );
  const [filteredRumahIbadah, setFilteredRumahIbadah] = useState(rumah_ibadah);
  const [selectedRumahIbadah, setSelectedRumahIbadah] = useState(
    akomodasi.rumah_ibadah[0]
  );
  const [isRevealDesc, setIsRevealDesc] = useState(false);
  const { width } = useWindowSize();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [selectedCategories, setSelectedCategories] = useState([
    ...new Set(akomodasi.rumah_ibadah.map((obj) => obj.jenis)),
  ]);
  const categories = [
    ...new Set(akomodasi.rumah_ibadah.map((obj) => obj.jenis)),
  ];
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const handleRumahIbadahClick = (i: any) => {
    setSelectedRumahIbadah(filteredRumahIbadah[i]);
    router.push(pathname + "?" + createQueryString("id", i), { scroll: false });
  };

  useEffect(() => {
    if (searchParams.get("id") !== null) {
      const id = searchParams.get("id");
      if (filteredRumahIbadah[Number(id)]) {
        setSelectedRumahIbadah(filteredRumahIbadah[Number(id)]);
      } else {
        setSelectedRumahIbadah(filteredRumahIbadah[0]);
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
        {/* <div className="space-y-2 justify-center w-full">
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
        </div> */}

        <div className="flex md:grid md:grid-cols-1 lg:grid-cols-2 gap-2 overflow-x-scroll w-full">
          {filteredRumahIbadah.length < 1 ? (
            <div className="text-gray-400">tidak ada data</div>
          ) : (
            filteredRumahIbadah.map((w, i) => {
              return (
                <div
                  className={
                    "flex-none duration-300 ease-in-out rounded-lg hover:cursor-pointer relative bg-black"
                  }
                  key={w.id}
                  onClick={(e) => handleRumahIbadahClick(i)}
                >
                  <img
                    src={w.link_foto}
                    alt={w.nama}
                    className={`h-36 md:h-36 w-64 md:w-full object-cover rounded-lg opacity-50 duration-300 hover:opacity-90 ease-in-out ${
                      selectedRumahIbadah.id == w.id ? " opacity-90" : ""
                    }
                  `}
                    width={200}
                  />
                  <div className="absolute z-10 bottom-4 left-4 text-white">
                    <h2 className=" font-medium flex items-center">
                      <span className="mr-2">{w.nama}</span>
                    </h2>
                    <h3 className="text-xs text-gray-200">
                      {w.jarak}KM dari pusat kota
                    </h3>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
      <div className="sticky top-24 lg:w-1/3 space-y-4 h-full">
        <h2 className="font-medium text-gray-600 text-xs md:text-base">
          Filter Kategori Rumah Ibadah
        </h2>
        <div className="grid grid-cols-2 gap-2 text-gray-400 ">
          {categories.map((c) => (
            <div
              key={c}
              className={`flex-none border px-2 md:px-4 py-1 md:py-2 rounded-full text-center items-center justify-center cursor-pointer flex text-xs md:text-sm ${
                selectedCategories.includes(c)
                  ? "border-sky-600 bg-sky-800 text-white"
                  : ""
              }`}
              onClick={() => {
                let tempSelectedCategories = selectedCategories;
                if (selectedCategories.includes(c)) {
                  tempSelectedCategories = selectedCategories.filter(
                    (sc) => sc !== c
                  );
                  setSelectedCategories(tempSelectedCategories);
                } else {
                  tempSelectedCategories = [
                    ...new Set([...selectedCategories, c]),
                  ];
                  setSelectedCategories(tempSelectedCategories);
                }
                setFilteredRumahIbadah(
                  rumah_ibadah.filter((w) =>
                    tempSelectedCategories.includes(w.jenis)
                  )
                );
              }}
            >
              <h3>{c}</h3>
            </div>
          ))}
        </div>
        <div className=" rounded-lg bg-white h-fit">
          <img
            src={selectedRumahIbadah.link_foto}
            alt={selectedRumahIbadah.nama}
            className="h-48 md:h-48 w-full object-cover rounded-t-lg"
          />
          <div className="p-4 space-y-2 md:space-y-6">
            <h2 className="md:text-xl font-medium flex items-center">
              <span className="mr-2">{selectedRumahIbadah.nama}</span>
            </h2>
            <ul className="w-full space-y-4 flex flex-wrap text-xs md:text-sm">
              <li className="space-y-2">
                <div className="flex items-center">
                  <IconCalendarMonth />
                  {selectedRumahIbadah.operasional}
                </div>
                <div className="flex items-center">
                  <IconClock />
                  {selectedRumahIbadah.jam_buka}
                </div>
                <div className="flex items-center">
                  <IconRoute />
                  {selectedRumahIbadah.jarak}KM (
                  {selectedRumahIbadah.waktu_tempuh}) dari pusat kota
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
    </div>
  );
}

export default Page;
