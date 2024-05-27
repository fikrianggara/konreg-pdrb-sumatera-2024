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
    <div className="space-y-6 lg:space-y-8 p-4 flex flex-col m-auto justify-center">
      <div
        className="space-y-2 justify-center
      "
      >
        {/* <h1 className="text-xl lg:text-2xl text-emerald-800 font-medium">
          Kuliner Khas Jambi
        </h1> */}
        <img
          src="/assets/banner_kuliner.png"
          alt="kuliner jambi"
          className={`rounded-lg lg:w-2/3`}
        />
        {/* <p className="text-gray-500 text-sm lg:text-lg text-start lg:w-2/3">
          Kuliner khas Jambi merupakan salah satu kekayaan kuliner Indonesia
          yang menawarkan cita rasa unik dan kaya rempah. Kuliner Jambi tidak
          hanya mengandalkan kekayaan bahan lokal, tetapi juga teknik memasak
          tradisional yang diwariskan turun-temurun.
        </p> */}
      </div>

      <div className="lg:w-2/3 ">
        {kuliner.map((w) => {
          return (
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
                <h2 className="font-bold text-emerald-800 text-xl">{w.nama}</h2>
                <p className="text-gray-500 text-pretty lg:w-full ">
                  {" "}
                  {w.deskripsi}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Page;
