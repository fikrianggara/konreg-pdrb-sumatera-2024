import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import Link from "next/link";
import Image from "next/image";
import TabInfografis from "../TabInfografis";
import { dataInfografis } from "../dataInfografis";

export default function Page({ params }: { params: { tag: string } }) {
  const data = dataInfografis.filter((obj) => obj.tag == params.tag);
  if (data != false) {
    return (
      <div className="grid grid-cols-12 gap-1 container mx-auto p-8">
        <div className="col-span-12 md:col-span-9 grow">
          <h1 className="font-bold text-3xl	text-emerald-700">Infografis</h1>
          <p className="font-medium text-gray-400 py-4">
            Bentuk visualisasi data statistik BPS yang disajikan dengan
            menggunakan ilustrasi, grafik, dan teks (klik gambar untuk
            memperjelas)
          </p>
          <h2 className="font-bold text-2xl	text-emerald-700 mb-4">Subjek</h2>
          <TabInfografis dataInfografis={dataInfografis} tag={params.tag} />
          <div className="grid grid-cols-12 gap-1">
            <div className="col-span-4 mr-2 hidden md:block">
              <ul className="border-2 border-gray-300 border-solid rounded-2xl p-4">
                {dataInfografis.map((item) => {
                  return (
                    <Link
                      key={item.tag}
                      href={"/data-infografis/infografis/" + item.tag}
                      className="font-medium text-md"
                    >
                      <li
                        className={
                          item.tag == params.tag
                            ? "transition duration-300 p-3 hover:bg-emerald-700 hover:text-white rounded-2xl my-2 bg-emerald-700 text-white"
                            : "transition duration-300 p-3 hover:bg-emerald-700 hover:text-white rounded-2xl my-2"
                        }
                      >
                        {item.title}
                      </li>
                    </Link>
                  );
                })}
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
                    {data[0].image.map((item, i) => (
                      <CarouselItem
                        key={i}
                        className="md:basis-1/2 lg:basis-1/3 flex items-center justify-start flex-col"
                      >
                        <Dialog>
                          <DialogTrigger asChild>
                            <Image
                              src={item.url}
                              width={200}
                              height={300}
                              alt={item.alt}
                              className="transition duration-300 ease-in-out hover:scale-110 cursor-pointer"
                            />
                          </DialogTrigger>
                          <DialogContent className="flex items-center justify-center">
                            <Image
                              src={item.url}
                              width={0}
                              height={0}
                              sizes="100vw"
                              alt={item.alt}
                              className="w-2/3"
                            />
                          </DialogContent>
                        </Dialog>
                        <p className="text-center">{item.prov}</p>
                      </CarouselItem>
                    ))}
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
          <Link href={"/data-infografis/infografis/"}>
            <h4 className="text-md my-2 hover:underline">Data</h4>
          </Link>
          <Link href={"/data-infografis/infografis/infografis"}>
            <h4 className="text-md my-2 underline">Infografis</h4>
          </Link>
        </div>
      </div>
    );
  } else {
    return <>Gak ada coy</>;
  }
}
