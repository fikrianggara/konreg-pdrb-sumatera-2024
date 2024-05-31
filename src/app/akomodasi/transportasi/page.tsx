"use client";
// import { Span } from "next/dist/trace";
import akomodasi from "@/data/akomodasi.json";
import {
  IconBrandApple,
  IconBrandGooglePlay,
  IconBrandWhatsapp,
  IconMapPin,
} from "@tabler/icons-react";
import { Carousel } from "@mantine/carousel";

function Page() {
  const transportasi = akomodasi.transportasi;
  const pic = akomodasi.pic;

  return (
    <div>
      <h1 className="md:text-2xl font-bold">
        Informasi Transportasi di Kota Jambi
      </h1>
      <hr />
      <p className="my-4">
        Kami merekomendasikan Anda untuk menggunakan aplikasi berikut:
      </p>
      <div className="p-4 w-full flex flex-col sm:flex-row justify-center	items-center">
        {transportasi.map((t, i) => (
          <div className="rounded-lg bg-white h-fit shadow-lg m-4" key={i}>
            <img
              src={t.link_foto}
              alt={t.nama}
              className="h-48 md:h-64 w-full object-cover rounded-t-lg"
            />
            <div className="p-4 space-y-2 md:space-y-6">
              <h2 className="md:text-xl font-medium text-center">{t.nama}</h2>
              <div className="text-xs md:text-sm">
                <p>{t.deskripsi}</p>
              </div>
              <ul className="w-full space-y-4 flex flex-wrap text-xs md:text-sm">
                <a
                  href={t.link_android}
                  className="flex items-center cursor-pointer hover:opacity-75 shadow-lg py-1 bg-green-500 text-white rounded-full w-full text-center text-ellipsis justify-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconBrandGooglePlay className="animate-bounce" />
                  Unduh
                </a>
                <a
                  href={t.link_apple}
                  className="flex items-center cursor-pointer hover:opacity-75 shadow-lg py-1 bg-gray-500 text-white rounded-full w-full text-center text-ellipsis justify-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconBrandApple className="animate-bounce" />
                  Unduh
                </a>
              </ul>
            </div>
          </div>
        ))}
      </div>
      <p>
        sebagai sarana transportasi di area Kota Jambi selama kegiatan
        berlangsung.
      </p>

      <h1 className="md:text-2xl font-bold mt-4">PIC Penjemputan di Bandara</h1>
      <hr />
      <Carousel withIndicators slideSize="33.333333%" slidesToScroll={3} loop>
        {pic.map((p, i) => (
          <Carousel.Slide key={i}>
            <div className="rounded-lg bg-white h-fit shadow-lg m-4">
              <img
                src={p.link_foto}
                alt={p.nama}
                className="h-48 md:h-64 w-full object-cover rounded-t-lg"
              />
              <div className="p-4 space-y-2 md:space-y-6">
                <h2 className="md:text-xl font-medium text-center">{p.nama}</h2>
                <div className="text-xs md:text-sm">
                  <p>{p.lo}</p>
                  <p>{p.tel}</p>
                </div>
                <ul className="w-full space-y-4 flex flex-wrap text-xs md:text-sm">
                  <a
                    href={"https://wa.me/" + p.tel}
                    className="flex items-center cursor-pointer hover:opacity-75 shadow-lg py-1 bg-green-500 text-white rounded-full w-full text-center text-ellipsis justify-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconBrandWhatsapp className="animate-bounce" />
                    Whatsapp
                  </a>
                </ul>
              </div>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
}

export default Page;
