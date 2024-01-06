import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Link from "next/link";
import Image from "next/image";

type Props = {};

export function pages({}: Props) {
  return (
    <div className="grid grid-cols-12 gap-1 container mx-auto p-8">
      <div className="col-span-9 grow">
        <h1 className="font-bold text-4xl	text-emerald-700">Infografis</h1>
        <p className="font-medium text-gray-400 py-4">
          Bentuk visualisasi data statistik BPS yang disajikan dengan
          menggunakan ilustrasi, grafik, dan teks (klik gambar untuk
          memperjelas)
        </p>
        <h2 className="font-bold text-3xl	text-emerald-700 mb-4">Subjek</h2>
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-4 mr-2">
            <ul className="border-2 border-gray-300 border-solid rounded-2xl p-4">
              <Link
                href={"/data-infografis/pertumbuhan-ekonomi"}
                className="font-medium text-lg"
              >
                <li className="transition duration-300 p-3 hover:bg-emerald-700 hover:text-white rounded-2xl my-2">
                  Pertumbuhan Ekonomi
                </li>
              </Link>
              <Link
                href={"/data-infografis/kemiskinan"}
                className="font-medium text-lg"
              >
                <li className="transition duration-300 p-3 hover:bg-emerald-700 hover:text-white rounded-2xl my-2">
                  Kemiskinan
                </li>
              </Link>
              <Link
                href={"/data-infografis/ketenagakerjaan"}
                className="font-medium text-lg"
              >
                <li className="transition duration-300 p-3 hover:bg-emerald-700 hover:text-white rounded-2xl my-2">
                  Ketenagakerjaan
                </li>
              </Link>
              <Link
                href={"/data-infografis/ipm"}
                className="font-medium text-lg"
              >
                <li className="transition duration-300 p-3 hover:bg-emerald-700 hover:text-white rounded-2xl my-2 bg-emerald-700 text-white">
                  Indeks Pembangunan Manusia
                </li>
              </Link>
              <Link
                href={"/data-infografis/gini-ratio"}
                className="font-medium text-lg"
              >
                <li className="transition duration-300 p-3 hover:bg-emerald-700 hover:text-white rounded-2xl my-2">
                  Gini Ratio
                </li>
              </Link>
              <Link
                href={"/data-infografis/pdrb"}
                className="font-medium text-lg"
              >
                <li className="transition duration-300 p-3 hover:bg-emerald-700 hover:text-white rounded-2xl my-2">
                  PDRB Per Kapita
                </li>
              </Link>
            </ul>
          </div>
          <div className="col-span-8">
            <div className="border-2 border-solid ml-2 rounded-2xl px-6 py-4">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full max-w-sm"
              >
                <CarouselContent>
                  <CarouselItem
                    key={1}
                    className="md:basis-1/2 lg:basis-1/3 flex items-center justify-start flex-col"
                  >
                    <Image
                      src={"/assets/infografis/ipm/aceh.jpg"}
                      width={200}
                      height={300}
                      alt="IPM Aceh"
                    />
                    <p className="text-center">Provinsi Aceh</p>
                  </CarouselItem>
                  <CarouselItem
                    key={2}
                    className="md:basis-1/2 lg:basis-1/3 flex items-center justify-center flex-col"
                  >
                    <Image
                      src={"/assets/infografis/ipm/sumut.jpg"}
                      width={200}
                      height={300}
                      alt="IPM Sumut"
                    />
                    <p className="text-center">Provinsi Sumatera Utara</p>
                  </CarouselItem>
                  <CarouselItem
                    key={3}
                    className="md:basis-1/2 lg:basis-1/3 flex items-center justify-center flex-col"
                  >
                    <Image
                      src={"/assets/infografis/ipm/sumbar.png"}
                      width={200}
                      height={300}
                      alt="IPM Sumbar"
                    />
                    <p className="text-center">Provinsi Sumatera Barat</p>
                  </CarouselItem>
                  <CarouselItem
                    key={4}
                    className="md:basis-1/2 lg:basis-1/3 flex items-center justify-center flex-col"
                  >
                    <Image
                      src={"/assets/infografis/ipm/sumbar.png"}
                      width={200}
                      height={300}
                      alt="IPM Riau"
                    />
                    <p className="text-center">Provinsi Riau</p>
                  </CarouselItem>
                  <CarouselItem
                    key={5}
                    className="md:basis-1/2 lg:basis-1/3 flex items-center justify-center flex-col"
                  >
                    <Image
                      src={"/assets/infografis/ipm/jambi.png"}
                      width={200}
                      height={300}
                      alt="IPM Jambi"
                    />
                    <p className="text-center">Provinsi Jambi</p>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
            <div className="flex items-center justify-center mt-4">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>
                      2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">4</PaginationLink>
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-3 py-8 px-4 text-cyan-700">
        <h3 className="text-lg font-semibold">Informasi</h3>
        <hr className="border-3 border-cyan-700" />
        <Link href={"/data-infografis/"}>
          <h4 className="text-md my-2 hover:underline">Data</h4>
        </Link>
        <Link href={"/data-infografis/infografis"}>
          <h4 className="text-md my-2 underline">Infografis</h4>
        </Link>
      </div>
    </div>
  );
}

export default pages;
