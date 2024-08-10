"use client";

import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Map3D, RecenteringMap } from "@/components/map";
import { TabsDemo } from "@/components/tabs";
import { delay, motion } from "framer-motion";

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
const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};
export default function Home() {
  const autoplay = useRef(Autoplay({ delay: 3000 }));

  return (
    <div className="w-full bg-dotted">
      {/* hero section */}
      <div className="flex flex-col lg:flex-row w-screen justify-between relative h-screen">
        <div className="z-20 absolute w-full lg:basis-1/2 lg:w-fit bg-gradient-to-b lg:bg-gradient-to-r from-white to-transparent space-y-2 border-r-1 border-white shadow-r-lg backdrop-blur-xs lg:mt-0 lg:space-y-4 sm:p-0 sm:px-24 lg:px-36 xl:px-48 flex flex-col justify-center h-screen items-center lg:items-start">
          <motion.h3
            className="text-lg lg:text-2xl text-teal-800 font-light"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            Selamat datang di Pusat Informasi
          </motion.h3>
          <motion.h1
            className="text-2xl lg:text-4xl text-sky-800 font-bold"
            initial="hidden"
            animate="visible"
            variants={textVariants}

            // transition={{ delay: 1.5, duration: 1 }}
          >
            Konsultasi Regional PDRB-ISE
          </motion.h1>
          <motion.h2
            className="text-lg text-amber-500 lg:text-2xl"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            // transition={{ delay: 2.5, duration: 1 }}
          >
            Wilayah Sumatera 2024
          </motion.h2>
          <div className="mt-8 space-y-4 flex flex-col items-center lg:items-start">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, delay: 4.5, ease: "easeOut" }}
              // variants={{
              //   hidden: { opacity: 0, y: 50 },
              //   visible: {
              //     opacity: 1,
              //     y: 0,
              //   },
              // }}
            >
              <Link
                href="#konten"
                className="px-4 py-1 md:py-2 text-white font-light flex justify-between rounded-full w-fit space-x-4 mt-8 shadow-xl transition-all duration-300 bg-gradient-to-br from-indigo-600 from-10% via-sky-600 via-30% to-emerald-500 to-90% bg-size-200 bg-pos-0 hover:bg-pos-100"
              >
                <span>Informasi kegiatan</span>
                {<IconArrowNarrowRight />}
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, delay: 5, ease: "easeOut" }}
            >
              <div className="px-4 py-1 md:py-2 text-white font-light flex justify-between bg-indigo-500 rounded-full w-fit space-x-4 shadow-xl transition-all duration-300 bg-gradient-to-br from-indigo-600 from-10% via-sky-600 via-30% to-emerald-500 to-90% bg-size-200 bg-pos-0 hover:bg-pos-100">
                <span>Bergabung</span>
                <Image
                  src="/assets/whatsapp-logo.png"
                  width={24}
                  height={24}
                  alt="logo whatsapp"
                />
              </div>
            </motion.div>
          </div>
        </div>
        <div className="basis-1/2 w-full absolute">
          <Map3D />
        </div>
      </div>
      {/* hero section end */}
      {/* main content */}
      <div
        id="konten"
        className="flex flex-col flex-col-reverse lg:flex-row justify-between duration-300 ease-in-out bg-white"
      >
        <div className="w-full lg:w-1/2 flex-col justify-between">
          <div className="p-8 text-center md:text-start sm:px-24 lg:px-36 xl:px-48 lg:py-12 space-y-4 lg:space-y-8">
            <h3 className="text-lg lg:text-3xl font-bold text-cyan-700">
              KEGIATAN
            </h3>
            <div>
              <p className="text-base lg:text-xl text-gray-800 leading-6 lg:leading-8">
                Informasi jadwal dan lokasi kegiatan serta materi dan notula
                Konsultasi Regional PDRB Wilayah Sumatera Tahun 2024.
              </p>
            </div>
            <div className="w-full text-center items-center justify-center lg:items-start lg:justify-start flex">
              <Link
                href={"kegiatan/jadwal"}
                className="px-4 py-1 lg:py-2 flex justify-evenly items-center text-center text-white bg-sky-800 rounded-full mt-6 lg:w-56 text-center text-sm lg:text-lg transition-all duration-300 bg-gradient-to-tl from-indigo-500 via-indigo-400 to-sky-500 to-teal-500 bg-size-200 bg-pos-0 hover:bg-pos-100 shadow-lg shadow-cyan-300 hover:shadow-purple-500"
              >
                <span>Selengkapnya</span>

                <IconArrowNarrowRight size={24} className="text-white" />
              </Link>
            </div>
          </div>
        </div>
        <Link
          className="lg:w-1/2 relative bg-black m-4 lg:m-0 rounded-lg lg:rounded-none lg:rounded-br-[50px] lg:rounded-tl-[50px]"
          href="/kegiatan/lokasi"
        >
          <img
            src="/assets/konreg-2023.webp"
            alt="konreg 2023"
            className={`w-full h-56 lg:h-96 object-cover opatity-80  shadow-lg rounded-lg lg:rounded-none lg:rounded-br-[50px] lg:rounded-tl-[50px] opacity-80 hover:opacity-50 duration-300 ease-in-out`}
          />
          <div className="absolute z-10 inset-x-0 flex items-center justify-center bottom-4">
            <div className="rounded-full bg-white border border-white text-cyan-700 px-4 shadow-lg">
              <h2 className="font-medium text-xs lg:text-base">
                Konreg PDRB Sumatera 2023
              </h2>
            </div>
          </div>
        </Link>

        {/* <img
          src="https://bams.jambiprov.go.id/wp-content/uploads/2023/03/Sejarah-Jembatan-Gentala-Arasy.png"
          alt="Wisata jambi"
          className={`w-2/3 object-cover`}
        /> */}
      </div>
      <div className="flex flex-col lg:flex-row justify-between duration-300 ease-in-out bg-white">
        {/* <img
          
          alt="Hiburan"
          className={`lg:w-1/2 h-56 m-4 lg:m-0 lg:h-96 object-cover opatity-80 rounded-lg  shadow-xl lg:rounded-none lg:rounded-tr-[50px] lg:rounded-bl-[50px]`}
        /> */}
        <Link
          className="lg:w-1/2 relative bg-black m-4 lg:m-0 rounded-lg lg:rounded-none lg:rounded-tr-[50px] lg:rounded-bl-[50px]"
          href="/hiburan/wisata?id=13"
        >
          <img
            src="https://indonesiaimpressiontour.com/wp-content/uploads/2022/11/IMG_20191101_004648.webp"
            alt="hiburan"
            className={`w-full h-56 lg:h-96 object-cover opatity-80  shadow-lg rounded-lg lg:rounded-none lg:rounded-tr-[50px] lg:rounded-bl-[50px] opacity-80 hover:opacity-50 duration-300 ease-in-out`}
          />
          <div className="absolute z-10 inset-x-0 flex items-center justify-center bottom-4">
            <div className="rounded-full bg-white border border-white text-cyan-700 px-4 shadow-lg">
              <h2 className="font-medium text-xs lg:text-base">
                Wisata Candi Tinggi
              </h2>
            </div>
          </div>
        </Link>
        <div className="w-full lg:w-1/2 flex justify-between flex-row items-center">
          <div className="p-8 text-center md:text-end sm:px-24 lg:px-36 xl:px-48 lg:py-12 space-y-4 lg:space-y-8">
            <h3 className="text-lg lg:text-3xl font-bold text-amber-600">
              HIBURAN
            </h3>
            <div>
              <p className="text-base lg:text-xl  text-gray-800 leading-6 lg:leading-8">
                Wisata, produk UMKM, dan Kuliner khas Provinsi Jambi
              </p>
            </div>
            <div className="w-full text-center items-center justify-center lg:items-start lg:justify-end flex">
              <Link
                href={"hiburan/wisata"}
                className="px-4 py-1 lg:py-2 flex justify-evenly items-center text-center text-white bg-sky-800 rounded-full mt-6 xl:w-56 text-center text-sm lg:text-lg transition-all duration-300 bg-gradient-to-tl from-pink-500 via-red-500 to-yellow-400 bg-size-200 bg-pos-0 hover:bg-pos-100 shadow-lg shadow-amber-300 hover:shadow-pink-500"
              >
                <span>Selengkapnya</span>

                <IconArrowNarrowRight size={24} className="text-white" />
              </Link>
            </div>
          </div>
        </div>

        {/* <img
          src="https://bams.jambiprov.go.id/wp-content/uploads/2023/03/Sejarah-Jembatan-Gentala-Arasy.png"
          alt="Wisata jambi"
          className={`w-2/3 object-cover`}
        /> */}
      </div>
      <div className="flex flex-col flex-col-reverse lg:flex-row justify-between duration-300 ease-in-out bg-white">
        <div className="w-full lg:w-1/2 flex justify-between flex-row items-center">
          <div className="p-8 text-center md:text-start sm:px-24 lg:px-36 xl:px-48 lg:py-12 space-y-4 lg:space-y-8">
            <h3 className="text-lg lg:text-3xl font-bold text-pink-700">
              AKOMODASI
            </h3>

            <div>
              <p className="text-base lg:text-xl text-gray-800 leading-6 lg:leading-8">
                Informasi Hotel, Transportasi, Rumah Makan dan Ibadah
              </p>
            </div>
            <div className="w-full text-center items-center justify-center lg:items-start lg:justify-start flex">
              <Link
                href={"/akomodasi/hotel?id=2"}
                className="px-4 py-1 lg:py-2 flex justify-evenly items-center text-center text-white bg-sky-800 rounded-full mt-6 xl:w-56 text-center text-sm lg:text-lg transition-all duration-300 bg-gradient-to-tl from-purple-600  to-pink-600 to-90% bg-size-200 bg-pos-0 hover:bg-pos-100 shadow-lg shadow-pink-300 hover:shadow-purple-500"
              >
                <span>Selengkapnya</span>

                <IconArrowNarrowRight size={24} className="text-white" />
              </Link>
            </div>
          </div>
        </div>
        <Link
          className="lg:w-1/2 relative bg-black m-4 lg:m-0 rounded-lg  shadow-xl lg:rounded-none lg:rounded-tl-[50px] lg:rounded-br-[50px]"
          href="/akomodasi/hotel?id=2"
        >
          <img
            src="https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20011977-9a87f7e9441a004ac20d28f3a42f42ce.jpeg"
            alt="akomodasi"
            className={`w-full h-56 lg:h-96 object-cover opatity-80  rounded-lg  shadow-xl lg:rounded-none lg:rounded-tl-[50px] lg:rounded-br-[50px] opacity-80 hover:opacity-50 duration-300 ease-in-out`}
          />
          <div className="absolute z-10 inset-x-0 flex items-center justify-center bottom-4">
            <div className="rounded-full bg-white border border-white text-cyan-700 px-4 shadow-lg">
              <h2 className="font-medium text-xs lg:text-base">
                BW Luxury Hotel
              </h2>
            </div>
          </div>
        </Link>

        {/* <img
          src="https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10007179-1500x1000-FIT_AND_TRIM-13d69d49e336ae12cf01615191bf6fed.jpeg"
          alt="akomodasi"
          className={`lg:w-1/2 h-56 m-4 lg:m-0 lg:h-96 object-cover opatity-80 rounded-lg  shadow-xl lg:rounded-none lg:rounded-tl-[50px] lg:rounded-br-[50px]`}
        /> */}
        {/* <img
          src="https://bams.jambiprov.go.id/wp-content/uploads/2023/03/Sejarah-Jembatan-Gentala-Arasy.png"
          alt="Wisata jambi"
          className={`w-2/3 object-cover`}
        /> */}
      </div>
      <div className="flex flex-col lg:flex-row justify-between duration-300 ease-in-out bg-white">
        <Link
          className="lg:w-1/2 relative bg-black m-4 lg:m-0 rounded-lg  shadow-xl lg:rounded-none lg:rounded-tr-[50px] lg:rounded-bl-[50px]"
          href="/galeri"
        >
          <img
            src="/assets/dokumentasi.jpeg"
            alt="dokumentasi"
            className={`w-full h-56 lg:h-96 object-cover opatity-80  rounded-lg  shadow-xl lg:rounded-none lg:rounded-tr-[50px] lg:rounded-bl-[50px] opacity-80 hover:opacity-50 duration-300 ease-in-out`}
          />
          <div className="absolute z-10 inset-x-0 flex items-center justify-center bottom-4">
            <div className="rounded-full bg-white border border-white text-cyan-700 px-4 shadow-lg">
              <h2 className="font-medium text-xs lg:text-base">
                Dokumentasi konreg pdrb sumatera 2023
              </h2>
            </div>
          </div>
        </Link>

        {/* <img
          src="/assets/dokumentasi.jpeg"
          alt="Galeri"
          className={`lg:w-1/2 h-56 m-4 lg:m-0 lg:h-96 object-cover opatity-80 rounded-lg  shadow-xl lg:rounded-none lg:rounded-tr-[50px] lg:rounded-bl-[50px]`}
        /> */}
        <div className="w-full lg:w-1/2 flex justify-between flex-row items-center">
          <div className="p-8 text-center md:text-end sm:px-24 lg:px-36 xl:px-48 lg:py-12 space-y-4 lg:space-y-8">
            <h3 className="text-lg lg:text-3xl font-bold text-teal-600">
              GALERI
            </h3>
            <div>
              <p className="text-base lg:text-xl text-gray-800 leading-6 lg:leading-8">
                Kumpulan dokumentasi selama kegiatan Konsultasi Regional PDRB
                Wilayah Sumatera Tahun 2024 berlangsung.
              </p>
            </div>
            <div className="w-full text-center items-center justify-center lg:items-start lg:justify-end flex">
              <Link
                href={"galeri"}
                className="px-4 py-1 lg:py-2 flex justify-evenly items-center text-center text-white bg-sky-800 rounded-full mt-6 xl:w-56 text-center text-sm lg:text-lg transition-all duration-300 bg-gradient-to-tl from-indigo-600 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-size-200 bg-pos-0 hover:bg-pos-100 shadow-lg shadow-teal-300 hover:shadow-cyan-500"
              >
                <span>Selengkapnya</span>

                <IconArrowNarrowRight size={24} className="text-white" />
              </Link>
            </div>
          </div>
        </div>

        {/* <img
          src="https://bams.jambiprov.go.id/wp-content/uploads/2023/03/Sejarah-Jembatan-Gentala-Arasy.png"
          alt="Wisata jambi"
          className={`w-2/3 object-cover`}
        /> */}
      </div>
      {/* <div
        id="konten"
        className="w-screen p-4 sm:px-24 lg:px-36 xl:px-48 space-y-8 text-gray-500 mt-12"
      >
        <h2 className="text-lg text-center lg:text-start lg:text-2xl font-bold text-sky-800">
          Konsultasi Regional PDRB Wilayah Sumatera
        </h2>
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8"
          variants={{
            hidden: { opacity: 0, y: 50 },
            show: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 2.5,
                ease: "easeInOut",
                staggerChildren: 1,
              },
            },
          }}
          initial="hidden"
          whileInView="show"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1 },
            }}
            transition={{ delay: 0.5, duration: 1.5 }}
            className="lg:h-72 xl:h-full bg-white rounded-xl p-4 lg:p-8 space-y-6 flex flex-col justify-between items-center bg-white border border-white hover:border-teal-500 duration-300 ease-in-out"
          >
            <div className="space-y-2 lg:space-y-4">
              <h3 className="text-lg lg:text-2xl font-bold text-sky-800 text-center">
                Kegiatan
              </h3>
              <p className="text-xs md:text-sm lg:text-base text-center line-clamp-4 xl:line-clamp-none">
                Informasi jadwal dan lokasi kegiatan serta materi dan notula
                Konsultasi Regional PDRB Wilayah Sumatera Tahun 2024.
              </p>
            </div>

            <Link
              href={"kegiatan/lokasi"}
              className="px-4 py-1 lg:py-2  text-white bg-sky-800 rounded-full mt-6 xl:w-56 text-center text-sm lg:text-lg transition-all duration-300 bg-gradient-to-tl from-indigo-500 via-indigo-400 to-sky-500 to-teal-500 bg-size-200 bg-pos-0 hover:bg-pos-100"
            >
              Selengkapnya
            </Link>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1 },
            }}
            className="g:h-72 xl:h-full bg-white rounded-xl p-4 lg:p-8 space-y-6 flex flex-col justify-between items-center border border-white hover:border-amber-500 duration-300 ease-in-out"
          >
            <div className="space-y-2 lg:space-y-4">
              <h3 className="text-lg lg:text-2xl font-bold text-amber-500 text-center">
                Hiburan
              </h3>
              <p className="text-xs md:text-sm lg:text-base text-center line-clamp-4 xl:line-clamp-none">
                Wisata, produk UMKM, dan Kuliner khas Provinsi Jambi
              </p>
            </div>

            <Link
              href={"hiburan"}
              className="px-4 py-1 lg:py-2  text-white bg-amber-500 rounded-full mt-6 xl:w-56 text-center text-sm lg:text-lg transition-all duration-500 bg-gradient-to-tl from-pink-500 via-red-500 to-yellow-400 bg-size-200 bg-pos-0 hover:bg-pos-100"
            >
              Selengkapnya
            </Link>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1 },
            }}
            transition={{ delay: 1.5, duration: 1.5 }}
            className="g:h-72 xl:h-full bg-white rounded-xl p-4 lg:p-8 space-y-6 flex flex-col justify-between items-center border border-white hover:border-purple-700 duration-300 ease-in-out"
          >
            <div className="space-y-2 lg:space-y-4">
              <h3 className="text-lg lg:text-2xl font-bold text-purple-800 text-center">
                Akomodasi
              </h3>
              <p className="text-xs md:text-sm lg:text-base text-center line-clamp-4 xl:line-clamp-none">
                Informasi Hotel, Transportasi, Rumah Makan dan Ibadah
              </p>
            </div>

            <Link
              href={"akomodasi/hotel?id=0"}
              className="px-4 py-1 lg:py-2  text-white bg-cyan-800 rounded-full mt-6 xl:w-56 text-center text-sm lg:text-lg transition-all duration-300 bg-gradient-to-tl from-purple-600  to-pink-600 to-90% bg-size-200 bg-pos-0 hover:bg-pos-100"
            >
              Selengkapnya
            </Link>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1 },
            }}
            transition={{ delay: 2, duration: 1.5 }}
            className="lg:h-72 xl:h-full bg-white rounded-xl p-4 lg:p-8 space-y-6 flex flex-col justify-between items-center border border-white hover:border-cyan-700 duration-300 ease-in-out"
          >
            <div className="space-y-2 lg:space-y-4">
              <h3 className="text-lg lg:text-2xl font-bold text-emerald-800 text-center">
                Galeri
              </h3>
              <p className="text-xs md:text-sm lg:text-base text-center line-clamp-4 xl:line-clamp-none">
                Kumpulan dokumentasi selama kegiatan Konsultasi Regional PDRB
                Wilayah Sumatera Tahun 2024 berlangsung.
              </p>
            </div>

            <Link
              href={"galeri"}
              className="px-4 py-1 lg:py-2  text-white bg-cyan-800 rounded-full mt-6 xl:w-56 text-center text-sm lg:text-lg transition-all duration-300 bg-gradient-to-tl from-indigo-600 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-size-200 bg-pos-0 hover:bg-pos-100"
            >
              Selengkapnya
            </Link>
          </motion.div>
        </motion.div>
      </div> */}
      {/* main content end */}
      {/* collaborator start */}
      {/* <div className="w-sreen bg-cyan-800 flex flex-col lg:flex-row justify-between pt-8 lg:pt-0 lg:px-36 xl:px-48 lg:h-fit shadow-xl mt-12 bg-mesh">
        <div className="lg:basis-1/2 ">
          <div
            x-data="{}"
            x-init="$nextTick(() => {
            let ul = $refs.collaborators;
            ul.insertAdjacentHTML('afterend', ul.outerHTML);
            ul.nextSibling.setAttribute('aria-hidden', 'true');
        })"
            className="h-full lg:h-96 w-full flex inline-flex flex-nowrap lg:inline-grid lg:grid-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_256px,_black_calc(100%-50px),transparent_100%)"
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
      </div> */}

      {/* collaborator end */}

      {/* instansi collaboration start */}
      <div className="w-screen p-4 sm:px-24 lg:px-36 xl:px-48 space-y-8 text-gray-500 py-12">
        <h2 className="text-lg text-center lg:text-start lg:text-2xl font-bold text-sky-800">
          KOLABORASI
        </h2>
        {/* <p className="text-sm lg:text-lg text-center lg:text-start">
          Konsultasi Regional PDRB Wilayah Sumatera merupakan salah satu bentuk
          kolaborasi dan sinergi Badan Pusat Statistik (BPS), Badan Perencanaan
          Pembangunan Pembangunan Daerah (Bappeda), Dinas Komunikasi dan
          Informatika (Diskominfo), Bank Indonesia (BI), serta Kantor Wilayah
          Direktorat Jendral Perbendaharaan (DJPb).
        </p> */}
        <ul className="flex flex-col lg:flex-none lg:grid lg:grid-cols-3 gap-2 lg:gap-8 w-full">
          <li className="bg-white hover:shadow-lg duration-200 ease-in-out rounded-xl w-full h-24 p-4 border text-center self-center backdrop-blur-sm m-auto text-center items-center flex justify-center">
            <Image
              src={"/assets/logo bps.png"}
              height={200}
              width={200}
              alt="logo bps"
              className="self-center"
            ></Image>
          </li>
          <li className="bg-white hover:shadow-lg duration-200 ease-in-out rounded-xl w-full h-24 p-4 border text-center self-center backdrop-blur-sm m-auto text-center items-center flex justify-center">
            <Image
              src={"/assets/logo bi.png"}
              height={200}
              width={200}
              alt="logo bi"
              className="self-center"
            ></Image>
          </li>
          {/* <li className="bg-white hover:shadow-lg duration-200 ease-in-out rounded-xl w-full h-24 p-4 border text-center self-center backdrop-blur-sm m-auto text-center items-center flex">
            <Image
              src={"/assets/logo kominfo.png"}
              height={200}
              width={200}
              alt="logo kominfo"
              className="self-center"
            ></Image>
          </li> */}
          <li className="bg-white hover:shadow-lg duration-200 ease-in-out rounded-xl w-full h-24 p-4 border text-center self-center backdrop-blur-sm m-auto text-center items-center flex justify-center">
            <Image
              src={"/assets/logo djpb.png"}
              height={200}
              width={200}
              alt="logo djpb"
              className="self-center"
            ></Image>
          </li>
          <li className="col-span-2 lg:col-span-3 bg-white hover:shadow-lg duration-200 ease-in-out rounded-xl w-full border p-4 text-center self-center backdrop-blur-sm grid grid-cols-5 lg:grid-cols-10 gap-4">
            {PEMDA.map((p) => (
              <div className="flex items-center m-auto" key={p.provinsi}>
                <Image
                  src={p.src}
                  height={36}
                  width={36}
                  alt={p.alt}
                  className="self-center"
                ></Image>
              </div>
            ))}
          </li>
        </ul>
      </div>
      {/* instansi collaboration end */}
    </div>
  );
}
