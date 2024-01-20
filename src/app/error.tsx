"use client"; // Error components must be Client Components

import { useEffect } from "react";
import Image from "next/image";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="h-fit w-full text-center flex flex-col m-auto justify-center space-y-16 p-12">
      <h2 className="text-xl font-bold text-red-600 text-gray-600">
        Oops! Terjadi Error. maaf yah :(
      </h2>
      <Image
        src={"/assets/500.png"}
        alt="error illustration"
        width={300}
        height={300}
        className="self-center opacity-60"
      />
      <button
        className="text-lg text-cyan-800 hover:underline"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        coba lagi
      </button>
    </div>
  );
}
