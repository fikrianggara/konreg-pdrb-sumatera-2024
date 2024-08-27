import Link from "next/link";
import React from "react";

const datas: any[] = [
  {
    id: 1,
    title: "Penjemputan",
    url: "https://license365bps-my.sharepoint.com/:f:/g/personal/aguswid_license365bps_onmicrosoft_com/EkekX6Zf8C1MmwT79b4R-EMBPKI2bXzHFq267wm3EYBv2Q?e=blMrlX",
    thumbnail: "",
  },
  {
    id: 2,
    title: "High Level Meeting",
    url: "https://license365bps-my.sharepoint.com/:f:/g/personal/aguswid_license365bps_onmicrosoft_com/EvboMmh0lNZHlhv3EEvBIjYBSemXUjSav9NcNbWqBdLxnA?e=BgUbhr",
    thumbnail: "",
  },
  {
    id: 3,
    title: "Acara Pleno",
    url: "https://license365bps-my.sharepoint.com/:f:/g/personal/aguswid_license365bps_onmicrosoft_com/EnxQMAaV60JNj6vC54qOksUBu1sj6dCmmkEZCdmDXewfmA?e=KCjQVF",
    thumbnail: "",
  },
  {
    id: 4,
    title: "City Tour",
    url: "https://home.s.id/#",
    thumbnail: "",
  },
];
const page = () => {
  return (
    <div className="h-full flex flex-col m-auto items-center text-center justify-center space-y-6 mt-8 md:mt-12">
      <h1 className="text-xl md:text-4xl text-cyan-800 text-center font-medium">
        Galeri
      </h1>
      {datas.length > 0 ? (
        <div className="grid grid-cols-1 gap-2 md:grid-cols-4 md:gap-4 w-11/12 md:w-10/12 lg:w-8/12 self-center">
          {datas.map((d, i) => (
            <Link
              href={d.url}
              key={i}
              className="p-4 h-24 w-full lg:h-64 md:aspect-square bg-cyan-50 flex items-center justify-center rounded-lg border rounded-lg md:rounded-xl transition-all duration-300 bg-gradient-to-tl from-indigo-600 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-size-200 bg-pos-0 hover:bg-pos-100 shadow shadow-xl bg-sky-800"
            >
              <h2 className="md:text-xl text-white font-medium">{d.title}</h2>
            </Link>
          ))}
        </div>
      ) : (
        <div className="h-full flex m-auto justify-center">
          <h1 className="text-xl text-gray-400 self-center">
            belum ada dokumentasi{" "}
          </h1>
        </div>
      )}
    </div>
  );
};

export default page;
