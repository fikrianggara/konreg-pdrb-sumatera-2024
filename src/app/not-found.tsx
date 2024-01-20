import Link from "next/link";
import Image from "next/image";
export default function NotFound() {
  return (
    <div className="h-fit w-full text-center flex flex-col m-auto justify-center space-y-16 p-12">
      <h2 className="text-3xl font-bold text-gray-600">
        Laman Tidak Ditemukan
      </h2>
      <Image
        src={"/assets/404.png"}
        alt="error illustration"
        width={300}
        height={300}
        className="self-center opacity-60"
      />
      <Link className="text-lg text-cyan-800 hover:underline" href="/">
        Kembali Ke Beranda
      </Link>
    </div>
  );
}
