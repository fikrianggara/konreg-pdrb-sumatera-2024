"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { IconChevronDown, IconChevronRight } from "@tabler/icons-react";
import { AccordionDropdown } from "@/components/dropdown";
import Link from "next/link";
import { IconMenu2 } from "@tabler/icons-react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "./ui/separator";
import { useWindowSize } from "@/hooks/useWindowSize";

type NAVBAR_ITEM_TYPE = {
  name: string;
  child?: NAVBAR_ITEM_TYPE[];
  url?: string;
};

const NAVBAR_ITEMS: NAVBAR_ITEM_TYPE[] = [
  {
    name: "Kegiatan",
    child: [
      { name: "Lokasi", url: "/kegiatan/lokasi" },
      { name: "Jadwal", url: "/kegiatan/jadwal" },
      { name: "Materi", url: "/kegiatan/materi" },
      { name: "Notula", url: "/kegiatan/notula" },
    ],
    url: "/kegiatan",
  },
  {
    name: "Data dan Inforgrafis",
    child: [
      { name: "Data", url: "/data-infografis/data" },
      {
        name: "Infografis",
        url: "/data-infografis/infografis/pertumbuhan-ekonomi",
      },
    ],
    url: "/data-infografis/data",
  },
  {
    name: "Galeri",
    url: "/galeri",
  },
  {
    name: "Kontak",
    url: "/kontak",
  },
  {
    name: "Tentang",
    url: "/tentang",
  },
];

const MOBILE_TRESHOLD = 900;

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: 900,
    height: 500,
  });

  useEffect(() => {
    function handleResize() {
      if (typeof window != "undefined") {
        const { innerWidth: width, innerHeight: height } = window;
        setWindowDimensions({ width, height });
      } else {
        setWindowDimensions({ width: 900, height: 500 });
      }
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

export function SheetSide() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="p-2 rounded-lg border border-gray-300 hover:border-gray-400 duration-300 ease-in-out hover:cursor-pointer">
          <IconMenu2 className="text-gray-400 hover:text-600 duration-300 ease-in-out" />
        </div>
      </SheetTrigger>
      <SheetContent side="left">
        <div className="text-base mt-24">
          <Separator className="my-6" />
          <ul className="space-y-4">
            {NAVBAR_ITEMS.map((item: NAVBAR_ITEM_TYPE) => {
              if (item.child) {
                return (
                  <Accordion
                    key={item.name}
                    type="single"
                    collapsible
                    className="font-normal"
                  >
                    <AccordionItem key={item.name} value={item.name}>
                      <AccordionTrigger className="font-medium text-emerald-800 font-light hover:cursor-pointer hover:underline underline-offset-4 decoration-amber-500">
                        {" "}
                        {item.name}
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul key={item.name}>
                          {item.child.map((i: NAVBAR_ITEM_TYPE) => {
                            return (
                              <Link
                                key={i.name}
                                className="font-normal p-2 rounded-lg hover:bg-amber-50 text-gray-400 hover:text-emerald-800 duration-300 ease-in-out no-underline font-light hover:cursor-pointer flex space-x-4 items-center justify-between"
                                href={i.url ? i.url : "/"}
                              >
                                {i.name}
                                <IconChevronRight size={16} />
                              </Link>
                            );
                          })}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                );
              } else {
                return (
                  <Link
                    key={item.name}
                    className="font-normal text-emerald-800 font-light hover:cursor-pointer hover:underline underline-offset-4 decoration-amber-500 flex space-x-4 items-center"
                    href={item.url ? item.url : "/"}
                  >
                    {item.name}
                  </Link>
                );
              }
            })}
          </ul>
        </div>

        <SheetFooter></SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

function Navbar() {
  const { width } = useWindowSize();

  return (
    <>
      {!width ? (
        <></>
      ) : width < MOBILE_TRESHOLD ? (
        <div className="sticky top-0 bg-white p-4 md:p-8 py-4 shadow-md flex justify-between items-center z-10">
          <Link href="/" className="flex items-center space-x-2 ">
            <Image src="/assets/logo.png" width={56} height={56} alt="logo" />
            <div>
              <h1 className="text-emerald-800 text-lg font-bold">
                Konsultasi Regional PDRB
              </h1>
              <h2 className="text-amber-500 font-base text-sm">
                Wilayah Sumatera
              </h2>
            </div>
          </Link>
          <SheetSide />
        </div>
      ) : (
        <div className="sticky top-0 bg-white p-8 py-4 shadow-md flex justify-between items-center z-10">
          <Link href="/" className="flex items-center space-x-2 basis-1/3">
            <Image src="/assets/logo.png" width={56} height={56} alt="logo" />
            <div>
              <h1 className="text-emerald-800 lg:text-xl xl:text-2xl font-bold">
                Konsultasi Regional PDRB
              </h1>
              <h2 className="text-amber-500 text-regular lg:text-md font-base">
                Wilayah Sumatera
              </h2>
            </div>
          </Link>
          <ul className="flex text-lg basis-2/3 justify-evenly">
            {/* <NavigationMenuDemo /> */}

            {NAVBAR_ITEMS.map((item: NAVBAR_ITEM_TYPE) => {
              if (item.child) {
                return (
                  <AccordionDropdown
                    key={item.name}
                    trigger={
                      <li
                        key={item.name}
                        className="text-base lg:text-lg font-normal text-emerald-800 font-light hover:cursor-pointer hover:underline underline-offset-4 decoration-amber-500 flex space-x-4 items-center"
                      >
                        {item.name}
                        {item.child && <IconChevronDown size={16} />}
                      </li>
                    }
                  >
                    <ul key={item.name}>
                      {item.child.map((i: NAVBAR_ITEM_TYPE) => {
                        return (
                          <Link
                            key={i.name}
                            className="text-base lg:text-lg font-normal p-2 rounded-lg hover:bg-amber-50 text-gray-400 hover:text-emerald-800 duration-300 ease-in-out font-light hover:cursor-pointer flex space-x-4 items-center justify-between"
                            href={i.url ? i.url : "/"}
                          >
                            {i.name}
                            <IconChevronRight size={16} />
                          </Link>
                        );
                      })}
                    </ul>
                  </AccordionDropdown>
                );
              } else {
                return (
                  <Link
                    key={item.name}
                    className="text-base lg:text-lg font-normal text-emerald-800 font-light hover:cursor-pointer hover:underline underline-offset-4 decoration-amber-500 flex space-x-4 items-center"
                    href={item.url ? item.url : "/"}
                  >
                    {item.name}
                  </Link>
                );
              }
            })}
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
