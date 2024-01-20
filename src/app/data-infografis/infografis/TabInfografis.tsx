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
import { DataInfografisType } from "./ipm/page";

type Props = {
  dataInfografis: DataInfografisType;
};

export function TabInfografis({ dataInfografis }: Props) {
  return (
    <Tabs defaultValue={dataInfografis.tag} className="w-full lg:hidden">
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
      <TabsContent value="ipm" className="flex items-center justify-center">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-3/4"
        >
          <CarouselContent>
            {dataInfografis.image.map((data, i) => (
              <CarouselItem
                key={i}
                className="md:basis-1/2 lg:basis-1/3 flex items-center justify-start flex-col"
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <Image
                      src={data.url}
                      width={200}
                      height={300}
                      alt={data.alt}
                      className="transition duration-300 ease-in-out hover:scale-110 cursor-pointer"
                    />
                  </DialogTrigger>
                  <DialogContent className="flex items-center justify-center">
                    <Image
                      src={data.url}
                      width={0}
                      height={0}
                      sizes="100vw"
                      alt={data.alt}
                      className="w-2/3"
                    />
                  </DialogContent>
                </Dialog>
                <p className="text-center">{data.prov}</p>
              </CarouselItem>
            ))}
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
