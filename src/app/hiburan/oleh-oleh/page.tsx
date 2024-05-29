"use client";
// import { Span } from "next/dist/trace";
import hiburan from "@/data/umkm.json";
import useWindowDimensions, { useWindowSize } from "@/hooks/useWindowSize";
import { useState } from "react";

function Page() {
  // Allow the user to freely go back and forth between visited steps.
  const [olehOleh, setOlehOleh] = useState(hiburan.oleh_oleh);
  const { width } = useWindowSize();

  return (
    <div className="space-y-6 lg:space-y-8 p-4 flex flex-col m-auto justify-center">
      <div className="space-y-2 justify-center">
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
