"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   "pdfjs-dist/build/pdf.worker.min.mjs",
//   import.meta.url
// ).toString();
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const PdfViewer = ({ fileUrl, title }: { fileUrl: string; title: string }) => {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1); // start on first page
  const [loading, setLoading] = useState(true);
  const [pageWidth, setPageWidth] = useState(0);

  function onDocumentLoadSuccess({
    numPages: nextNumPages,
  }: {
    numPages: number;
  }) {
    setNumPages(nextNumPages);
  }

  function onPageLoadSuccess() {
    setPageWidth(window.innerWidth);
    setLoading(false);
  }

  //   const options = {
  //     cMapUrl: "cmaps/",
  //     cMapPacked: true,
  //     standardFontDataUrl: "standard_fonts/",
  //   };

  // Go to next page
  function goToNextPage() {
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
  }

  function goToPreviousPage() {
    setPageNumber((prevPageNumber) => prevPageNumber - 1);
  }

  return (
    <div className="h-fit w-full self-start">
      <Nav pageNumber={pageNumber} numPages={numPages} title={title} />
      <div hidden={loading} className="flex items-center h-full relative">
        <div
          className={`flex items-center justify-between w-full absolute z-10 px-2`}
        >
          <button
            onClick={goToPreviousPage}
            disabled={pageNumber <= 1}
            className="relative px-2 py-24 text-gray-400 text-white focus:z-20 "
          >
            <span className="sr-only">Previous</span>
            <IconArrowLeft
              className="h-10 w-10 rounded-full bg-gray-500"
              aria-hidden="true"
            />
          </button>
          <button
            onClick={goToNextPage}
            disabled={pageNumber >= numPages!}
            className="relative px-2 py-24 text-gray-400 text-white focus:z-20"
          >
            <span className="sr-only">Next</span>
            <IconArrowRight
              className="h-10 w-10 rounded-full bg-gray-500"
              aria-hidden="true"
            />
          </button>
        </div>

        <div className="h-full flex justify-center items-center m-auto">
          <Document
            file={fileUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            // options={options}
          >
            <Page
              className=""
              key={pageNumber}
              pageNumber={pageNumber}
              renderAnnotationLayer={false}
              renderTextLayer={false}
              onLoadSuccess={onPageLoadSuccess}
              onRenderError={() => setLoading(false)}
              width={Math.max(pageWidth * 0.5, pageWidth > 800 ? 350 : 320)}
            />
          </Document>
        </div>
      </div>
    </div>
  );
};

function Nav({
  pageNumber,
  numPages,
  title,
}: {
  pageNumber: number;
  numPages: number;
  title: string;
}) {
  return (
    <nav className="bg-cyan-800 rounded-t-lg">
      <div className="mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-12 md:h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center text-white">
              {title}
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 ">
            <div className="bg-gray-600 text-white rounded-md px-3 py-2 text-sm font-medium">
              <span>{pageNumber}</span>
              <span className="text-gray-400"> / {numPages}</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default PdfViewer;
