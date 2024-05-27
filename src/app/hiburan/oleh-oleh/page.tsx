"use client";
// import { Span } from "next/dist/trace";
import hiburan from "@/data/umkm.json";
import useWindowDimensions, { useWindowSize } from "@/hooks/useWindowSize";
import { useState } from "react";

function Page() {
  // Allow the user to freely go back and forth between visited steps.
  const [olehOleh, setOlehOleh] = useState(
    hiburan.filter((h) => h.jenis == "Rekomendasi Oleh-Oleh")
  );
  const { width } = useWindowSize();

  return (
    <div className="space-y-6 lg:space-y-8 p-4 flex flex-col m-auto justify-center">
      <div
        className="space-y-2 justify-center
    "
      >
        {/* <h1 className="text-xl lg:text-2xl text-emerald-800 font-medium">
        Kuliner Khas Jambi
      </h1> */}
        {width && width < 800 ? (
          <img
            src="/assets/banner_oleh-oleh.png"
            alt="Wisata jambi"
            className={`rounded-lg lg:w-2/3`}
          />
        ) : (
          <img
            src="/assets/1x3_banner_oleh-oleh_nocheck.png"
            alt="Wisata jambi"
            className={`rounded-lg lg:w-2/3`}
          />
        )}
        {/* <p className="text-gray-500 text-sm lg:text-lg text-start lg:w-2/3">
        Kuliner khas Jambi merupakan salah satu kekayaan kuliner Indonesia
        yang menawarkan cita rasa unik dan kaya rempah. Kuliner Jambi tidak
        hanya mengandalkan kekayaan bahan lokal, tetapi juga teknik memasak
        tradisional yang diwariskan turun-temurun.
      </p> */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:w-2/3">
        {olehOleh.map((o) => {
          return (
            <div className="h-full bg-gray-100 rounded-lg p-8" key={o.id}>
              {o.nama}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Page;
