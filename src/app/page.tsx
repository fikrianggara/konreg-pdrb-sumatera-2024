import { IconArrowNarrowRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="w-full space-y-12">
      {/* hero section */}
      <div className="flex w-screen justify-between">
        <div className="basis-1/2 space-y-4 py-8 px-48 flex flex-col justify-center h-[500px]">
          <h3 className="text-2xl text-emerald-800 font-light">
            Selamat datang di Pusat Informasi
          </h3>
          <h1 className="text-4xl text-emerald-800 font-bold">
            Konsultasi Regional PDRB
          </h1>
          <h2 className="text-amber-500 text-2xl">Wilayah Sumatera</h2>
          <div className="px-4 py-2 text-white font-light flex justify-between bg-emerald-800 rounded-full w-fit space-x-4">
            <span> lebih pahami konsultasi regional</span>
            {<IconArrowNarrowRight />}
          </div>
          <div className="px-4 py-2 text-white font-light flex justify-between bg-emerald-800 rounded-full w-fit space-x-4">
            <span>Bergabung</span>
            <Image
              src="/assets/whatsapp-logo.png"
              width={24}
              height={24}
              alt="logo whatsapp"
            />
          </div>
        </div>
        <div className="basis-1/2 h-fit w-full py-8">
          <div className="bg-[url('/assets/ACEH.jpg')] h-[500px] bg-cover rounded-l-[40px] shadow-2xl">
            <div className="w-full h-full backdrop-blur-sm rounded-l-[40px]"></div>
          </div>
        </div>
      </div>
      {/* hero section end */}
      {/* main content */}
      <div className="w-screen px-48 space-y-8 text-gray-500">
        <h2 className="text-2xl font-bold text-emerald-800">
          Konsultasi Regional PDRB Wilayah Sumatera
        </h2>
        <div className="grid grid-cols-3 gap-8">
          <div className="h-96 bg-white rounded-xl border border-2 p-8 space-y-6 flex flex-col items-center">
            <h3 className="text-2xl font-bold text-emerald-800">Kegiatan</h3>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
              tempora modi! Repellendus impedit iste saepe totam nesciunt. Nam,
              quasi rerum odit perferendis quis id ipsum, maiores aspernatur
              magnam consequuntur sequi.
            </p>
            <Link
              href={"kegiatan/lokasi"}
              className="px-4 py-2 text-white bg-emerald-800 rounded-full mt-6 w-56 text-center"
            >
              Selengkapnya
            </Link>
          </div>
          <div className="h-96 bg-white rounded-xl border border-2 p-8 space-y-6 flex flex-col items-center">
            <h3 className="text-2xl font-bold text-amber-500">Galeri</h3>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
              tempora modi! Repellendus impedit iste saepe totam nesciunt. Nam,
              quasi rerum odit perferendis quis id ipsum, maiores aspernatur
              magnam consequuntur sequi.
            </p>
            <Link
              href={"galeri"}
              className="px-4 py-2 text-white bg-amber-500 rounded-full mt-6 w-56 text-center"
            >
              Selengkapnya
            </Link>
          </div>
          <div className="h-96 bg-white rounded-xl border border-2 p-8 space-y-6 flex flex-col items-center">
            <h3 className="text-2xl font-bold text-cyan-800">
              Data dan Infografis
            </h3>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
              tempora modi! Repellendus impedit iste saepe totam nesciunt. Nam,
              quasi rerum odit perferendis quis id ipsum, maiores aspernatur
              magnam consequuntur sequi.
            </p>
            <Link
              href={"data-infografis/data"}
              className="px-4 py-2 text-white bg-cyan-800 rounded-full mt-6 w-56 text-center"
            >
              Selengkapnya
            </Link>
          </div>
        </div>
      </div>
      {/* main content end */}
      <div className="w-sreen bg-cyan-800 flex justify-between">
        <div className="basis-1/2">
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg h-36">fdsaf</div>
            <div className="bg-white rounded-xl shadow-lg h-36">fdsafads</div>
          </div>
        </div>
        <div className=" basis-1/2 text-white p-48 space-y-8">
          <h2 className="text-3xl font-bold">Lorem ipsum dolor sit amet.</h2>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            nulla facere natus sed a doloremque debitis adipisci eius. Vero
            quia, unde sapiente debitis, dolorum nulla modi ipsam quas
            temporibus odit magnam! Mollitia repellat modi sint. Assumenda
            ratione sapiente harum ipsam?
          </p>
        </div>
      </div>
    </div>
  );
}
