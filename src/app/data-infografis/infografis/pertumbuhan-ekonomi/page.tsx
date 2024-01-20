import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import TabInfografis from "../TabInfografis";
import Link from "next/link";
import Image from "next/image";

export default function pages() {
  return (
    <div className="grid grid-cols-12 gap-1 container mx-auto p-8">
      <div className="col-span-12 lg:col-span-9 grow">
        <h1 className="font-bold text-3xl	text-emerald-700">Infografis</h1>
        <p className="font-medium text-gray-400 py-4">
          Bentuk visualisasi data statistik BPS yang disajikan dengan
          menggunakan ilustrasi, grafik, dan teks (klik gambar untuk
          memperjelas)
        </p>
        <h2 className="font-bold text-2xl	text-emerald-700 mb-4">Subjek</h2>
        {/* <TabInfografis /> */}
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-4 mr-2 hidden lg:block">
            <ul className="border-2 border-gray-300 border-solid rounded-2xl p-4">
              <Link
                href={"/data-infografis/infografis/pertumbuhan-ekonomi"}
                className="font-medium text-md"
              >
                <li className="transition duration-300 p-3 hover:bg-emerald-700 hover:text-white rounded-2xl my-2 bg-emerald-700 text-white">
                  Pertumbuhan Ekonomi
                </li>
              </Link>
              <Link
                href={"/data-infografis/infografis/kemiskinan"}
                className="font-medium text-md"
              >
                <li className="transition duration-300 p-3 hover:bg-emerald-700 hover:text-white rounded-2xl my-2">
                  Kemiskinan
                </li>
              </Link>
              <Link
                href={"/data-infografis/infografis/ketenagakerjaan"}
                className="font-medium text-md"
              >
                <li className="transition duration-300 p-3 hover:bg-emerald-700 hover:text-white rounded-2xl my-2">
                  Ketenagakerjaan
                </li>
              </Link>
              <Link
                href={"/data-infografis/infografis/ipm"}
                className="font-medium text-md"
              >
                <li className="transition duration-300 p-3 hover:bg-emerald-700 hover:text-white rounded-2xl my-2">
                  Indeks Pembangunan Manusia
                </li>
              </Link>
              <Link
                href={"/data-infografis/infografis/gini-ratio"}
                className="font-medium text-md"
              >
                <li className="transition duration-300 p-3 hover:bg-emerald-700 hover:text-white rounded-2xl my-2">
                  Gini Ratio
                </li>
              </Link>
              <Link
                href={"/data-infografis/infografis/pdrb"}
                className="font-medium text-md"
              >
                <li className="transition duration-300 p-3 hover:bg-emerald-700 hover:text-white rounded-2xl my-2">
                  PDRB Per Kapita
                </li>
              </Link>
            </ul>
          </div>
          <div className="col-span-8 hidden lg:block">
            <div className="border-2 border-solid ml-2 rounded-2xl px-14 py-4 flex items-center justify-center">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent>
                  <CarouselItem
                    key={1}
                    className="md:basis-1/2 lg:basis-1/3 flex items-center justify-start flex-col"
                  >
                    <Dialog>
                      <DialogTrigger asChild>
                        <Image
                          src={"/assets/infografis/ipm/aceh.jpg"}
                          width={200}
                          height={300}
                          alt="IPM Aceh"
                          className="transition duration-300 ease-in-out hover:scale-110 cursor-pointer"
                        />
                      </DialogTrigger>
                      <DialogContent className="flex items-center justify-center">
                        <Image
                          src={"/assets/infografis/ipm/aceh.jpg"}
                          width={0}
                          height={0}
                          sizes="100vw"
                          alt="IPM Aceh"
                          className="w-2/3"
                        />
                      </DialogContent>
                    </Dialog>
                    <p className="text-center">Provinsi Aceh</p>
                  </CarouselItem>
                  <CarouselItem
                    key={2}
                    className="md:basis-1/2 lg:basis-1/3 flex items-center justify-start flex-col"
                  >
                    <Dialog>
                      <DialogTrigger asChild>
                        <Image
                          src={"/assets/infografis/ipm/sumut.jpg"}
                          width={200}
                          height={300}
                          alt="IPM Sumut"
                          className="transition duration-300 ease-in-out hover:scale-110 cursor-pointer"
                        />
                      </DialogTrigger>
                      <DialogContent className="flex items-center justify-center">
                        <Image
                          src={"/assets/infografis/ipm/sumut.jpg"}
                          width={0}
                          height={0}
                          sizes="100vw"
                          alt="IPM Sumut"
                          className="w-2/3"
                        />
                      </DialogContent>
                    </Dialog>
                    <p className="text-center">Provinsi Sumatera Utara</p>
                  </CarouselItem>
                  <CarouselItem
                    key={3}
                    className="md:basis-1/2 lg:basis-1/3 flex items-center justify-start flex-col"
                  >
                    <Dialog>
                      <DialogTrigger asChild>
                        <Image
                          src={"/assets/infografis/ipm/sumbar.png"}
                          width={200}
                          height={300}
                          alt="IPM Sumbar"
                          className="transition duration-300 ease-in-out hover:scale-110 cursor-pointer"
                        />
                      </DialogTrigger>
                      <DialogContent className="flex items-center justify-center">
                        <Image
                          src={"/assets/infografis/ipm/sumbar.png"}
                          width={0}
                          height={0}
                          sizes="100vw"
                          alt="IPM Sumbar"
                          className="w-2/3"
                        />
                      </DialogContent>
                    </Dialog>
                    <p className="text-center">Provinsi Sumatera Barat</p>
                  </CarouselItem>
                  <CarouselItem
                    key={4}
                    className="md:basis-1/2 lg:basis-1/3 flex items-center justify-start flex-col"
                  >
                    <Dialog>
                      <DialogTrigger asChild>
                        <Image
                          src={"/assets/infografis/ipm/riau.jpg"}
                          width={200}
                          height={300}
                          alt="IPM Riau"
                          className="transition duration-300 ease-in-out hover:scale-110 cursor-pointer"
                        />
                      </DialogTrigger>
                      <DialogContent className="flex items-center justify-center">
                        <Image
                          src={"/assets/infografis/ipm/riau.jpg"}
                          width={0}
                          height={0}
                          sizes="100vw"
                          alt="IPM Riau"
                          className="w-2/3"
                        />
                      </DialogContent>
                    </Dialog>
                    <p className="text-center">Provinsi Riau</p>
                  </CarouselItem>
                  <CarouselItem
                    key={5}
                    className="md:basis-1/2 lg:basis-1/3 flex items-center justify-start flex-col"
                  >
                    <Dialog>
                      <DialogTrigger asChild>
                        <Image
                          src={"/assets/infografis/ipm/jambi.jpg"}
                          width={200}
                          height={300}
                          alt="IPM Jambi"
                          className="transition duration-300 ease-in-out hover:scale-110 cursor-pointer"
                        />
                      </DialogTrigger>
                      <DialogContent className="flex items-center justify-center">
                        <Image
                          src={"/assets/infografis/ipm/jambi.jpg"}
                          width={0}
                          height={0}
                          sizes="100vw"
                          alt="IPM Jambi"
                          className="w-2/3"
                        />
                      </DialogContent>
                    </Dialog>
                    <p className="text-center">Provinsi Jambi</p>
                  </CarouselItem>
                  <CarouselItem
                    key={6}
                    className="md:basis-1/2 lg:basis-1/3 flex items-center justify-start flex-col"
                  >
                    <Dialog>
                      <DialogTrigger asChild>
                        <Image
                          src={"/assets/infografis/ipm/sumsel.jpg"}
                          width={200}
                          height={300}
                          alt="IPM Sumsel"
                          className="transition duration-300 ease-in-out hover:scale-110 cursor-pointer"
                        />
                      </DialogTrigger>
                      <DialogContent className="flex items-center justify-center">
                        <Image
                          src={"/assets/infografis/ipm/sumsel.jpg"}
                          width={0}
                          height={0}
                          sizes="100vw"
                          alt="IPM Sumsel"
                          className="w-2/3"
                        />
                      </DialogContent>
                    </Dialog>
                    <p className="text-center">Provinsi Sumatera Selatan</p>
                  </CarouselItem>
                  <CarouselItem
                    key={7}
                    className="md:basis-1/2 lg:basis-1/3 flex items-center justify-start flex-col"
                  >
                    <Dialog>
                      <DialogTrigger asChild>
                        <Image
                          src={"/assets/infografis/ipm/bengkulu.png"}
                          width={200}
                          height={300}
                          alt="IPM Bengkulu"
                          className="transition duration-300 ease-in-out hover:scale-110 cursor-pointer"
                        />
                      </DialogTrigger>
                      <DialogContent className="flex items-center justify-center">
                        <Image
                          src={"/assets/infografis/ipm/bengkulu.png"}
                          width={0}
                          height={0}
                          sizes="100vw"
                          alt="IPM Bengkulu"
                          className="w-2/3"
                        />
                      </DialogContent>
                    </Dialog>
                    <p className="text-center">Provinsi Bengkulu</p>
                  </CarouselItem>
                  <CarouselItem
                    key={8}
                    className="md:basis-1/2 lg:basis-1/3 flex items-center justify-start flex-col"
                  >
                    <Dialog>
                      <DialogTrigger asChild>
                        <Image
                          src={"/assets/infografis/ipm/lampung.jpg"}
                          width={200}
                          height={300}
                          alt="IPM Lampung"
                          className="transition duration-300 ease-in-out hover:scale-110 cursor-pointer"
                        />
                      </DialogTrigger>
                      <DialogContent className="flex items-center justify-center">
                        <Image
                          src={"/assets/infografis/ipm/lampung.jpg"}
                          width={0}
                          height={0}
                          sizes="100vw"
                          alt="IPM Lampung"
                          className="w-2/3"
                        />
                      </DialogContent>
                    </Dialog>
                    <p className="text-center">Provinsi Lampung</p>
                  </CarouselItem>
                  <CarouselItem
                    key={9}
                    className="md:basis-1/2 lg:basis-1/3 flex items-center justify-start flex-col"
                  >
                    <Dialog>
                      <DialogTrigger asChild>
                        <Image
                          src={"/assets/infografis/ipm/babel.jpg"}
                          width={200}
                          height={300}
                          alt="IPM Babel"
                          className="transition duration-300 ease-in-out hover:scale-110 cursor-pointer"
                        />
                      </DialogTrigger>
                      <DialogContent className="flex items-center justify-center">
                        <Image
                          src={"/assets/infografis/ipm/babel.jpg"}
                          width={0}
                          height={0}
                          sizes="100vw"
                          alt="IPM Babel"
                          className="w-2/3"
                        />
                      </DialogContent>
                    </Dialog>
                    <p className="text-center">Provinsi Bangka Belitung</p>
                  </CarouselItem>
                  <CarouselItem
                    key={10}
                    className="md:basis-1/2 lg:basis-1/3 flex items-center justify-start flex-col"
                  >
                    <Dialog>
                      <DialogTrigger asChild>
                        <Image
                          src={"/assets/infografis/ipm/kepri.png"}
                          width={200}
                          height={300}
                          alt="IPM Kepri"
                          className="transition duration-300 ease-in-out hover:scale-110 cursor-pointer"
                        />
                      </DialogTrigger>
                      <DialogContent className="flex items-center justify-center">
                        <Image
                          src={"/assets/infografis/ipm/kepri.png"}
                          width={0}
                          height={0}
                          sizes="100vw"
                          alt="IPM Kepri"
                          className="w-2/3"
                        />
                      </DialogContent>
                    </Dialog>
                    <p className="text-center">Provinsi Kepulauan Riau</p>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:col-span-3 py-8 px-4 text-cyan-700 lg:block">
        <h3 className="text-lg font-semibold">Informasi</h3>
        <hr className="border-3 border-cyan-700" />
        <Link href={"/data-infografis/data"}>
          <h4 className="text-md my-2 underline">Data</h4>
        </Link>
        <Link href={"/data-infografis/infografis/pertumbuhan-ekonomi"}>
          <h4 className="text-md my-2 hover:underline">Infografis</h4>
        </Link>
      </div>
    </div>
  );
}
