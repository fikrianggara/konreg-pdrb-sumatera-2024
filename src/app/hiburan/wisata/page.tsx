"use client";
// import { Span } from "next/dist/trace";
import hiburan from "@/data/umkm.json";
import { useState } from "react";

function Page() {
  // Allow the user to freely go back and forth between visited steps.
  const [wisata, setWisata] = useState(
    hiburan.filter((h) => h.jenis == "Daftar Wisata")
  );
  return (
    <div className="p-4 m-auto grid grid-cols-4 gap-2 w-full">
      {wisata.map((w) => {
        return (
          <div className="h-full bg-gray-100 rounded-lg p-8" key={w.id}>
            {w.nama}
          </div>
        );
      })}
    </div>
  );
}

export default Page;
