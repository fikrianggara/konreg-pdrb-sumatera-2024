import Link from "next/link";
import React from "react";

const datas: any[] = [
  {
    id: 1,
    title: "Penjemputan",
    url: "https://license365bps-my.sharepoint.com/:f:/g/personal/aguswid_license365bps_onmicrosoft_com/EkekX6Zf8C1MmwT79b4R-EMBPKI2bXzHFq267wm3EYBv2Q?e=blMrlX",
    thumbnail: "/assets/penjemputan.png",
  },
  {
    id: 2,
    title: "High Level Meeting",
    url: "https://license365bps-my.sharepoint.com/:f:/g/personal/aguswid_license365bps_onmicrosoft_com/EvboMmh0lNZHlhv3EEvBIjYBSemXUjSav9NcNbWqBdLxnA?e=BgUbhr",
    thumbnail: "/assets/hlm-2.png",
  },
  {
    id: 3,
    title: "Acara Pleno",
    url: "https://license365bps-my.sharepoint.com/:f:/g/personal/aguswid_license365bps_onmicrosoft_com/EnxQMAaV60JNj6vC54qOksUBu1sj6dCmmkEZCdmDXewfmA?e=KCjQVF",
    thumbnail: "/assets/foto-bersama.JPG",
  },
  {
    id: 4,
    title: "City Tour",
    url: "https://home.s.id/#",
    thumbnail:
      "https://indonesiaimpressiontour.com/wp-content/uploads/2022/11/IMG_20191101_004648.webp",
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
              className={
                "flex-none duration-300 ease-in-out rounded-lg hover:cursor-pointer relative bg-black"
              }
              key={i}
              href={d.url}
            >
              <img
                src={d.thumbnail}
                alt={d.title}
                className={`h-64 w-full object-cover aspect-square rounded-lg opacity-50 duration-300 hover:opacity-90 ease-in-out 
                            `}
                width={200}
              />
              <div className="absolute z-10 bottom-4 left-4 text-white">
                <h2 className=" font-medium flex items-center">
                  <span className="mr-2">{d.title}</span>
                </h2>
              </div>
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
