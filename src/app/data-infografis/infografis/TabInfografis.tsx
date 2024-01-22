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
import { DataInfografisType } from "./dataInfografis";

type Props = {
  dataInfografis: DataInfografisType[];
  tag: string;
};

export function TabInfografis({ dataInfografis, tag }: Props) {
  return (
    <Tabs defaultValue={tag} className="w-full lg:hidden">
      <TabsList>
        {dataInfografis.map((data) => {
          return (
            <TabsTrigger key={data.tag} value={data.tag}>
              {data.title}
            </TabsTrigger>
          );
        })}
      </TabsList>
      {dataInfografis.map((data) => {
        return (
          <TabsContent
            key={data.tag}
            value={data.tag}
            className="flex items-center justify-center"
          >
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-3/4"
            >
              <CarouselContent>
                {data.image.map((item, i) => (
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
          </TabsContent>
        );
      })}
      <TabsContent value="ipm" className="flex items-center justify-center">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-3/4"
        >
          <CarouselContent>
            {dataInfografis[3].image.map((data, i) => (
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
    </Tabs>
  );
}

export default TabInfografis;
