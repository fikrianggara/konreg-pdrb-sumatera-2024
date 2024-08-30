"use client";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import Link from "next/link";

const PDFViewer = dynamic(() => import("@/components/pdfViewer"), {
  ssr: false,
});
const MATERIS: any[] = [
  {
    id: 1,
    label: "Notula",
    title: "Notula",
    url: "/assets/notula/notula.pdf",
  },
];
export default function Page() {
  const [selectedMateri, setSelectedMateri] = useState("Notula");
  const [fileUrl, setFileUrl] = useState("/assets/notula/notula.pdf");
  const [title, setTitle] = useState("Notula");

  const items = MATERIS.map((item) => (
    <option value={item.label} key={item.id}>
      {item.label}
    </option>
  ));
  return MATERIS.length > 0 ? (
    <div className="w-full flex flex-col lg:flex-row space-y-4 md:space-y-0 md:space-x-4 relative">
      <div className="text-xs md:text-lg flex flex-col space-y-4 md:spcae-y-0 md:flex-row md:space-x-2 overflow-x-scroll items-start">
        <div className="flex flex-row md:flex-col space-x-2 md:space-x-0 md:space-y-2 items-center">
          <select
            name="materi"
            id="materi"
            className="w-full p-1 md:p-2 px-4 rounded-lg w-fit h-fit border text-xs md:text-sm"
            value={selectedMateri}
            onChange={(e) => {
              setSelectedMateri(e.target.value);
              setFileUrl(
                MATERIS.filter((m) => m.label === e.target.value)[0].url
              );
              setTitle(
                MATERIS.filter((m) => m.label === e.target.value)[0].title
              );
            }}
          >
            {items}
          </select>
          <Link
            href={fileUrl}
            className="w-64 bg-cyan-800 p-1 px-4 text-xs md:text-sm md:py-2 rounded-lg text-white text-center"
          >
            Download file
          </Link>
        </div>
      </div>
      <div className="bg-gray-200 h-fit rounded-lg">
        <PDFViewer fileUrl={fileUrl} title={title} />
      </div>
    </div>
  ) : (
    <div>belum ada materi</div>
  );
}
