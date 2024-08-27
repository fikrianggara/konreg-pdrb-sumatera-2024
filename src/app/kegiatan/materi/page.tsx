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
    label: "High Level Meeting",
    title: "High Level Meeting",
    url: "/assets/materi/hlm.pdf",
  },
  {
    id: 2,
    label: "Keynote Speech",
    title: "Keynote Speech",
    url: "/assets/materi/keynote-speech.pdf",
  },
  {
    id: 3,
    label: "Presentasi 1",
    title: "Diskusi Panel - Presentasi 1",
    url: "/assets/materi/presentasi-1.pdf",
  },
  {
    id: 3,
    label: "Presentasi 2",
    title: "Diskusi Panel - Presentasi 2",
    url: "/assets/materi/presentasi-2.pdf",
  },
  {
    id: 5,
    label: "Presentasi 3",
    title: "Diskusi Panel - Presentasi 3",
    url: "/assets/materi/presentasi-3.pdf",
  },
];
export default function Page() {
  const [selectedMateri, setSelectedMateri] = useState("Keynote Speech");
  const [fileUrl, setFileUrl] = useState("/assets/materi/keynote-speech.pdf");
  const [title, setTitle] = useState("Keynote Speech");

  const items = MATERIS.map((item) => (
    <option value={item.label} key={item.id}>
      {item.label}
    </option>
  ));
  return MATERIS.length > 0 ? (
    <div className="w-full flex flex-col lg:flex-row space-y-4 md:space-y-0 md:space-x-4 relative h-[500px]">
      <div className="text-xs md:text-lg flex flex-col space-y-4 md:spcae-y-0 md:flex-row md:space-x-2 overflow-x-scroll items-start">
        <div className="flex flex-row md:flex-col space-x-2 md:space-x-0 md:space-y-2 items-center">
          <select
            name="materi"
            id="materi"
            className="p-2 px-4 rounded-lg w-fit h-fit border text-sm"
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
            className="bg-cyan-800 px-4 text-sm py-2 rounded-lg text-white w-full text-center"
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
