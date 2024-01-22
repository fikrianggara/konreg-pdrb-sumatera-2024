"use client";

import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Map3D } from "@/components/map";

const DATA = [1, 2, 3, 4, 5, 6];

const STATISTIK = [
  {
    nama: "ACEH",
    image_src: "/assets/ACEH.jpg",
    image_alt: "aceh",
    sumber_data: "mwehehe",
  },
  {
    nama: "BANGKA BELITUNG",
    image_src: "/assets/BANGKA BELITUNG.jpg",
    image_alt: "bangka belitung",
    sumber_data: "mwehehe",
  },
  {
    nama: "BENGKULU",
    image_src: "/assets/BENGKULU.jpg",
    image_alt: "BENGKULU",
    sumber_data: "KEPRI",
  },
  {
    nama: "JAMBI",
    image_src: "/assets/JAMBI.jpg",
    image_alt: "JAMBI",
    sumber_data: "mwehehe",
  },
  {
    nama: "KEPULAUAN RIAU",
    image_src: "/assets/KEPRI.jpg",
    image_alt: "KEPRI",
    sumber_data: "mwehehe",
  },
  {
    nama: "LAMPUNG",
    image_src: "/assets/ACEH.jpg",
    image_alt: "aceh",
    sumber_data: "mwehehe",
  },
  {
    nama: "ACEH",
    image_src: "/assets/ACEH.jpg",
    image_alt: "aceh",
    sumber_data: "mwehehe",
  },
  {
    nama: "ACEH",
    image_src: "/assets/ACEH.jpg",
    image_alt: "aceh",
    sumber_data: "mwehehe",
  },
  {
    nama: "ACEH",
    image_src: "/assets/ACEH.jpg",
    image_alt: "aceh",
    sumber_data: "mwehehe",
  },
  {
    nama: "ACEH",
    image_src: "/assets/ACEH.jpg",
    image_alt: "aceh",
    sumber_data: "mwehehe",
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
export default function Home() {
  const autoplay = useRef(Autoplay({ delay: 3000 }));

  return (
    <div className="w-full bg-dotted">
      {/* hero section */}
      <div className="flex flex-col lg:flex-row w-screen justify-between relative lg:h-[500px]">
        <div className="lg:z-20 lg:absolute basis-1/2 bg-white/60 backdrop-blur-sm space-y-2 mt-4 border-r-1 border-white shadow-r-lg lg:mt-0 lg:space-y-4 p-4 sm:p-0 sm:px-24 lg:px-36 flex flex-col justify-center h-[500px] items-center lg:items-start">
          <h3 className="text-lg lg:text-2xl text-emerald-800 font-light">
            Selamat datang di Pusat Informasi
          </h3>
          <h1 className="text-2xl lg:text-4xl text-emerald-800 font-bold">
            Konsultasi Regional PDRB
          </h1>
          <h2 className="text-lg text-amber-500 lg:text-2xl">
            Wilayah Sumatera
          </h2>
          <div className="mt-8 space-y-4 flex flex-col items-center lg:items-start">
            <Link
              href="#konten"
              className="px-4 py-2 text-white font-light flex justify-between bg-emerald-800 rounded-full w-fit space-x-4 mt-8"
            >
              <span> lebih pahami konsultasi regional</span>
              {<IconArrowNarrowRight />}
            </Link>
            <div className="px-4 py-2 text-white font-light flex justify-between bg-emerald-800 rounded-full w-fit space-x-4">
              <span>Bergabung</span>
              <Image
                src="/assets/whatsapp-logo.png"
                width={24}
                height={24}
                alt="logo whatsapp"
              />
            </div>
          </div>
        </div>
        <div className="basis-1/2 w-full lg:basis-1 lg:absolute">
          <Map3D />
        </div>

        {/* <div className="basis-1/2 h-fit py-8">
          <Carousel
            withIndicators
            plugins={[autoplay.current]}
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={autoplay.current.reset}
            orientation="vertical"
            height={400}
            className="bg-gray-50 lg:pl-4"
            withControls={false}
          >
            {DATA.map((i) => (
              <Carousel.Slide
                key={i}
                className="h-fit w-full p-4 lg:p-0 flex flex-col lg:flex-row"
              >
                <div className="bg-[url('/assets/ACEH.jpg')] h-[300px] lg:h-[400px] bg-cover bg-center rounded-t-[20px] lg:rounded-l-[40px] lg:rounded-r-none w-full h-full">
                  <div className="w-full h-[300px] lg:h-[400px] backdrop-blur-[2px] rounded-t-[20px] lg:rounded-l-[40px] lg:rounded-r-none flex flex-col items-center justify-end">
                    <div className="px-4 pr-8 lg:px-16 py-2 text-left bg-white rounded-t-[20px] w-fit lg:shadow-xl shadow-gray text-center">
                      <h2 className="lg:text-xl font-bold text-emerald-800">
                        PROVINSI ACEH
                      </h2>
                      <p className="opacity-50 italic text-amber-600">
                        sumber : twitter eheeh
                      </p>
                    </div>
                  </div>
                </div>
                <ul className="w-full lg:w-56 flex lg:flex-col lg:space-y-4 justify-between bg-white shadow-y-xl rounded-b-[20px] border border-t-0 lg:rounded-none p-8 border-b-none">
                  <li className="flex items-center justify-center h-full w-fit">
                    Statistik 1
                  </li>
                  <li className="flex items-center justify-center h-full w-fit">
                    Statistik 2
                  </li>
                  <li className="flex items-center justify-center h-full w-fit">
                    Statistik 3
                  </li>
                </ul>
              </Carousel.Slide>
            ))}
          </Carousel>
        </div> */}
      </div>
      {/* hero section end */}

      {/* main content */}
      <div
        id="konten"
        className="w-screen p-4 sm:px-24 lg:px-36 xl:px-48 space-y-8 text-gray-500 mt-12"
      >
        <h2 className="text-lg text-center lg:text-start lg:text-2xl font-bold text-emerald-800">
          Konsultasi Regional PDRB Wilayah Sumatera
        </h2>
        <div className="grid grid-rows-2 grid-cols-2 lg:grid-rows-1 lg:grid-cols-3 gap-4 lg:gap-8">
          <div className="lg:h-96 bg-white rounded-xl p-4 lg:p-8 space-y-6 flex flex-col items-center shadow-lg bg-white">
            <h3 className="text-lg lg:text-2xl font-bold text-emerald-800">
              Kegiatan
            </h3>
            <p className="text-sm lg:text-base text-center line-clamp-4 xl:line-clamp-none">
              Informasi jadwal dan lokasi kegiatan serta materi dan notula
              Konsultasi Regional PDRB Wilayah Sumatera Tahun 2024..
            </p>
            <Link
              href={"kegiatan/lokasi"}
              className="px-4 py-1 lg:py-2  text-white bg-emerald-800 rounded-full mt-6 xl:w-56 text-center text-sm lg:text-lg "
            >
              Selengkapnya
            </Link>
          </div>
          <div className="lg:h-96 bg-white rounded-xl p-4 lg:p-8 space-y-6 flex flex-col items-center shadow-lg">
            <h3 className="text-lg lg:text-2xl font-bold text-amber-500">
              Galeri
            </h3>
            <p className="text-sm lg:text-base text-center line-clamp-4 xl:line-clamp-none">
              Kumpulan dokumentasi selama kegiatan Konsultasi Regional PDRB
              Wilayah Sumatera Tahun 2024 berlangsung..
            </p>
            <Link
              href={"galeri"}
              className="px-4 py-1 lg:py-2  text-white bg-amber-500 rounded-full mt-6 xl:w-56 text-center text-sm lg:text-lg"
            >
              Selengkapnya
            </Link>
          </div>
          <div className="col-span-2 lg:col-span-1 lg:h-96 bg-white rounded-xl p-4 lg:p-8 space-y-6 flex flex-col items-center shadow-lg ">
            <h3 className="text-lg lg:text-2xl font-bold text-cyan-800">
              Data dan Infografis
            </h3>
            <p className="text-sm lg:text-base text-center line-clamp-4 xl:line-clamp-none">
              Data dan Infografis terkait subjek-subjek yang berkaitan dengan
              Konsultasi Regional PDRB Wilayah Sumatera Tahun 2024.
            </p>
            <Link
              href={"data-infografis/data"}
              className="px-4 py-1 lg:py-2  text-white bg-cyan-800 rounded-full mt-6 xl:w-56 text-center text-sm lg:text-lg"
            >
              Selengkapnya
            </Link>
          </div>
        </div>
      </div>
      {/* main content end */}
      {/* collaborator start */}
      <div className="w-sreen bg-cyan-800 flex flex-col lg:flex-row justify-between pt-8 lg:pt-0 lg:px-36 xl:px-48 lg:h-fit shadow-xl mt-12 bg-mesh">
        <div className="lg:basis-1/2 ">
          <div
            x-data="{}"
            x-init="$nextTick(() => {
            let ul = $refs.collaborators;
            ul.insertAdjacentHTML('afterend', ul.outerHTML);
            ul.nextSibling.setAttribute('aria-hidden', 'true');
        })"
            className="h-full lg:h-96 w-full flex inline-flex flex-nowrap lg:inline-grid lg:grid-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_256px,_black_calc(100%-100px),transparent_100%)"
          >
            <ul
              x-ref="collaborators"
              className="flex items-center lg:justify-center lg:grid lg:grid-cols-2 gap-4 [&_img]:max-h-none lg:[&_img]:max-h-none animate-infinite-scroll-x lg:animate-infinite-scroll-y mx-4 lg:mt-4 m-auto"
            >
              <li>
                <div className="xl:ml-4 bg-white/60 border border-white backgrdrop-blur-sm hover:bg-white duration-200 ease-in-out rounded-xl shadow-lg w-64 lg:w-full h-24 shadow-xl p-4 text-center self-center">
                  fdsaf
                </div>
              </li>
              <li>
                <div className="xl:ml-4 bg-white/60 border border-white backgrdrop-blur-sm hover:bg-white duration-200 ease-in-out rounded-xl shadow-lg w-64 lg:w-full h-24 shadow-xl p-4 text-center self-center">
                  fdsaf
                </div>
              </li>
              <li>
                <div className="bg-white/60 border border-white backgrdrop-blur-sm hover:bg-white duration-200 ease-in-out rounded-xl shadow-lg w-64 lg:w-full h-24 shadow-xl p-4 text-center self-center">
                  fdsaf
                </div>
              </li>
              <li>
                <div className="bg-white/60 border border-white backgrdrop-blur-sm hover:bg-white duration-200 ease-in-out rounded-xl shadow-lg w-64 lg:w-full h-24 shadow-xl p-4 text-center self-center">
                  fdsaf
                </div>
              </li>
              <li>
                <div className="xl:ml-4 bg-white/60 border border-white backgrdrop-blur-sm hover:bg-white duration-200 ease-in-out rounded-xl shadow-lg w-64 lg:w-full h-24 shadow-xl p-4 text-center self-center">
                  fdsaf
                </div>
              </li>
              <li>
                <div className="xl:ml-4 bg-white/60 border border-white backgrdrop-blur-sm hover:bg-white duration-200 ease-in-out rounded-xl shadow-lg w-64 lg:w-full h-24 shadow-xl p-4 text-center self-center">
                  fdsaf
                </div>
              </li>
              <li>
                <div className="bg-white/60 border border-white backgrdrop-blur-sm hover:bg-white duration-200 ease-in-out rounded-xl shadow-lg w-64 lg:w-full h-24 shadow-xl p-4 text-center self-center">
                  fdsaf
                </div>
              </li>
              <li>
                <div className="bg-white/60 border border-white backgrdrop-blur-sm hover:bg-white duration-200 ease-in-out rounded-xl shadow-lg w-64 lg:w-full h-24 shadow-xl p-4 text-center self-center">
                  fdsaf
                </div>
              </li>
            </ul>
            <ul
              x-ref="collaborators"
              className="flex items-center lg:justify-center lg:grid lg:grid-cols-2 gap-4 [&_img]:max-h-none lg:[&_img]:max-h-none animate-infinite-scroll-x lg:animate-infinite-scroll-y mx-4 lg:mt-4 m-auto"
              aria-hidden="true"
            >
              <li>
                <div className="xl:ml-4 bg-white/60 border border-white backgrdrop-blur-sm hover:bg-white duration-200 ease-in-out rounded-xl shadow-lg w-64 lg:w-full h-24 shadow-xl p-4 text-center self-center">
                  fdsaf
                </div>
              </li>
              <li>
                <div className="xl:ml-4 bg-white/60 border border-white backgrdrop-blur-sm hover:bg-white duration-200 ease-in-out rounded-xl shadow-lg w-64 lg:w-full h-24 shadow-xl p-4 text-center self-center">
                  fdsaf
                </div>
              </li>
              <li>
                <div className="bg-white/60 border border-white backgrdrop-blur-sm hover:bg-white duration-200 ease-in-out rounded-xl shadow-lg w-64 lg:w-full h-24 shadow-xl p-4 text-center self-center">
                  fdsaf
                </div>
              </li>
              <li>
                <div className="bg-white/60 border border-white backgrdrop-blur-sm hover:bg-white duration-200 ease-in-out rounded-xl shadow-lg w-64 lg:w-full h-24 shadow-xl p-4 text-center self-center">
                  fdsaf
                </div>
              </li>
              <li>
                <div className="xl:ml-4 bg-white/60 border border-white backgrdrop-blur-sm hover:bg-white duration-200 ease-in-out rounded-xl shadow-lg w-64 lg:w-full h-24 shadow-xl p-4 text-center self-center">
                  fdsaf
                </div>
              </li>
              <li>
                <div className="xl:ml-4 bg-white/60 border border-white backgrdrop-blur-sm hover:bg-white duration-200 ease-in-out rounded-xl shadow-lg w-64 lg:w-full h-24 shadow-xl p-4 text-center self-center">
                  fdsaf
                </div>
              </li>
              <li>
                <div className="bg-white/60 border border-white backgrdrop-blur-sm hover:bg-white duration-200 ease-in-out rounded-xl shadow-lg w-64 lg:w-full h-24 shadow-xl p-4 text-center self-center">
                  fdsaf
                </div>
              </li>
              <li>
                <div className="bg-white/60 border border-white backgrdrop-blur-sm hover:bg-white duration-200 ease-in-out rounded-xl shadow-lg w-64 lg:w-full h-24 shadow-xl p-4 text-center self-center">
                  fdsaf
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className=" basis-1/2 text-white p-12 space-y-8 text-center lg:text-end flex flex-col m-auto">
          <h2 className="text-lg lg:text-3xl font-bold">
            Instansi yang Terlibat
          </h2>
          <p className="text-sm lg:text-lg text-center lg:text-start">
            Konsultasi Regional Produk Domestik Bruto (PDRB) Wilayah Sumatera
            merupakan forum diskusi dan tukar pikiran mengenai pelbagai masalah
            yang terkait dengan pembangunan ekonomi antarwilayah untuk
            memperoleh kesepakatan bersama dalam penentuan indikator pembangunan
          </p>
        </div>
      </div>

      {/* collaborator end */}

      {/* instansi collaboration start */}
      <div className="w-screen p-4 sm:px-24 lg:px-36 xl:px-48 space-y-8 text-gray-500 pt-12">
        <h2 className="text-lg text-center lg:text-start lg:text-2xl font-bold text-emerald-800">
          Kolaborasi
        </h2>
        <p className="text-sm lg:text-lg text-center lg:text-start">
          Konsultasi regional ini merupakan salah satu bentuk kolaborasi dan
          sinergi Badan Pusat Statistik (BPS), Badan Perencanaan Pembangunan,
          Riset dan Inovasi Daerah (Bapperida), Dinas Komunikasi dan Informatika
          (Diskominfo), Bank Indonesia (BI), serta Kantor Wilayah Direktorat
          Jendral Perbendaharaan (DJPb)
        </p>
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
          <li className="bg-white hover:shadow-lg duration-200 ease-in-out rounded-xl w-full h-24 p-4 border text-center self-center backdrop-blur-sm m-auto text-center items-center flex">
            <Image
              src={"/assets/logo bps.png"}
              height={200}
              width={200}
              alt="logo bps"
              className="self-center"
            ></Image>
          </li>
          <li className="bg-white hover:shadow-lg duration-200 ease-in-out rounded-xl w-full h-24 p-4 border text-center self-center backdrop-blur-sm m-auto text-center items-center flex">
            <Image
              src={"/assets/logo bi.png"}
              height={200}
              width={200}
              alt="logo bi"
              className="self-center"
            ></Image>
          </li>
          <li className="bg-white hover:shadow-lg duration-200 ease-in-out rounded-xl w-full h-24 p-4 border text-center self-center backdrop-blur-sm m-auto text-center items-center flex">
            <Image
              src={"/assets/logo kominfo.png"}
              height={200}
              width={200}
              alt="logo kominfo"
              className="self-center"
            ></Image>
          </li>
          <li className="bg-white hover:shadow-lg duration-200 ease-in-out rounded-xl w-full h-24 p-4 border text-center self-center backdrop-blur-sm m-auto text-center items-center flex">
            <Image
              src={"/assets/logo djpb.png"}
              height={200}
              width={200}
              alt="logo djpb"
              className="self-center"
            ></Image>
          </li>
          <li className="col-span-2 lg:col-span-4 bg-white hover:shadow-lg duration-200 ease-in-out rounded-xl w-full border p-4 text-center self-center backdrop-blur-sm grid grid-cols-5 lg:grid-cols-10 gap-4">
            {PEMDA.map((p) => (
              <Image
                key={p.provinsi}
                src={p.src}
                height={36}
                width={36}
                alt={p.alt}
                className="self-center"
              ></Image>
            ))}
          </li>
        </ul>
      </div>
      {/* instansi collaboration end */}
    </div>
  );
}
