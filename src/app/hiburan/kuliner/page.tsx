"use client";
import Map from "@/components/map";
import hiburan from "@/data/umkm.json";
import { useState } from "react";
import Image from "next/image";

function Page() {
  const [kuliner, setKuliner] = useState(
    hiburan.filter((h) => h.jenis == "Kuliner")
  );
  return (
    <div className="space-y-6 lg:space-y-8 p-4 ">
      <div className="space-y-2">
        <h1 className="text-xl lg:text-2xl text-amber-500 font-medium">
          Kuliner Khas Jambi
        </h1>
        <p className="text-gray-500 text-sm lg:text-lg text-start text-pretty lg:w-2/3">
          Kuliner khas Jambi merupakan salah satu kekayaan kuliner Indonesia
          yang menawarkan cita rasa unik dan kaya rempah. Kuliner Jambi tidak
          hanya mengandalkan kekayaan bahan lokal, tetapi juga teknik memasak
          tradisional yang diwariskan turun-temurun.
        </p>
      </div>

      <div className="m-auto w-full ">
        {kuliner.map((w) => {
          return (
            <>
              <div
                className="h-full rounded-lg duration-300 ease-in-out space-y-4 md:space-y-0 md:flex items-start space-x-6 p-4 hover:text-gray-600"
                key={w.id}
              >
                <img
                  src={w.link_foto}
                  alt={w.nama}
                  className="rounded-lg aspect-auto h-fit w-full lg:w-64"
                ></img>
                <div className="text-sm md:text-base space-y-2">
                  <h2 className="font-medium text-gray-600 text-xl">
                    {w.nama}
                  </h2>
                  <p className="text-gray-400 text-pretty lg:w-2/3">
                    {" "}
                    {w.deskripsi}
                  </p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Page;
