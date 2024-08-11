import React from "react";
import Breadcrumb from "@/components/breadcrumb";
import Link from "next/link";

const page = () => {
  return (
    <div className="p-4 lg:px-24 xl:px-36 py-8 space-y-4 lg:space-y-6 bg-dotted">
      <Breadcrumb />
      <div className="space-y-2">
        <h1 className="font-bold text-xl lg:text-3xl text-sky-800">
          <Link href="/kontak">Tentang</Link>
        </h1>
        <p className=" text-xs md:text-sm lg:text-base">
          Sekilas tentang Konreg PDRB Regional Sumatera 2024
        </p>
      </div>
    </div>
  );
};

export default page;
