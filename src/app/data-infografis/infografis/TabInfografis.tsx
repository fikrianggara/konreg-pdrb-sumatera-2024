import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Image from "next/image";

export function TabInfografis() {
  return (
    <Tabs defaultValue="ipm" className="w-full lg:hidden">
      <TabsList>
        <TabsTrigger value="pertumbuhan-ekonomi">
          Pertumbuhan Ekonomi
        </TabsTrigger>
        <TabsTrigger value="kemiskinan">Kemiskinan</TabsTrigger>
        <TabsTrigger value="ketenagakerjaan">Ketenagakerjaan</TabsTrigger>
        <TabsTrigger value="ipm">Indeks Pembangunan Manusia</TabsTrigger>
        <TabsTrigger value="gini-ratio">Gini Ratio</TabsTrigger>
        <TabsTrigger value="pdrb">PDRB Per Kapita</TabsTrigger>
      </TabsList>
      <TabsContent value="pertumbuhan-ekonomi">1</TabsContent>
      <TabsContent value="kemiskinan">2</TabsContent>
      <TabsContent value="ketenagakerjaan">3</TabsContent>
      <TabsContent value="ipm">
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
              className="md:basis-1/2 flex items-center justify-start flex-col"
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
              className="md:basis-1/2 flex items-center justify-start flex-col"
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
              className="md:basis-1/2 flex items-center justify-start flex-col"
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
              className="md:basis-1/2 flex items-center justify-start flex-col"
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
              className="md:basis-1/2 flex items-center justify-start flex-col"
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
              className="md:basis-1/2 flex items-center justify-start flex-col"
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
              className="md:basis-1/2 flex items-center justify-start flex-col"
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
              className="md:basis-1/2 flex items-center justify-start flex-col"
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
              className="md:basis-1/2 flex items-center justify-start flex-col"
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
              className="md:basis-1/2 flex items-center justify-start flex-col"
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
      </TabsContent>
      <TabsContent value="gini-ratio">5</TabsContent>
      <TabsContent value="pdrb">6</TabsContent>
    </Tabs>
  );
}

export default TabInfografis;
