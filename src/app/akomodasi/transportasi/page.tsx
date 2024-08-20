"use client";
// import { Span } from "next/dist/trace";
import akomodasi from "@/data/akomodasi.json";
import { IconBrandApple, IconBrandGooglePlay } from "@tabler/icons-react";

function Page() {
  const transportasi = akomodasi.transportasi.filter(
    (t) => t.jenis == "online"
  );
  const rental = akomodasi.transportasi.filter((t) => t.jenis == "rental");
  const travel = akomodasi.transportasi.filter((t) => t.jenis == "travel");
  const pic = akomodasi.pic;

  return (
    <div>
      <div>
        <h1 className="md:text-2xl font-bold">Transportasi Online</h1>
        <hr />
        <p className="my-4">
          Kami merekomendasikan Anda untuk menggunakan aplikasi berikut:
        </p>

        <div className="p-4 w-full flex justify-center	items-center">
          <div className="p-4 w-3/4 flex flex-col md:flex-row justify-center items-center">
            {transportasi.map((t, i) => (
              <div className="rounded-lg bg-white h-fit shadow-lg m-4" key={i}>
                <img
                  src={t.link_foto}
                  alt={t.nama}
                  className="w-full object-cover rounded-t-lg"
                />
                <div className="p-4 space-y-2 md:space-y-6">
                  <h2 className="md:text-xl font-medium text-center">
                    {t.nama}
                  </h2>
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
        </div>
      </div>

      <div className="my-4">
        <h1 className="md:text-2xl font-bold">Jasa Rental Mobil & Bus</h1>
        <hr />
        <table className="w-full text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-4">
          <thead className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th>Perusahaan Rental</th>
              <th>Alamat</th>
              <th>Kontak</th>
            </tr>
          </thead>

          {rental.map((p, i) => (
            <tr key={i}>
              <td className="font-bold pr-2">{p.nama}</td>
              <td className="py-4">{p.alamat}</td>
              <td>
                <ul>
                  <li>{p.telepon1}</li>
                  <li>{p.telepon2}</li>
                </ul>
              </td>
            </tr>
          ))}
        </table>
      </div>

      <div className="my-4">
        <h1 className="md:text-2xl font-bold">Jasa Travel & Bus Antar Kota</h1>
        <hr />
        <table className="w-full text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-4">
          <thead className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th>Perusahaan Travel</th>
              <th>Alamat</th>
              <th>Kontak</th>
            </tr>
          </thead>

          {travel.map((p, i) => (
            <tr key={i}>
              <td className="font-bold pr-2">{p.nama}</td>
              <td className="py-4">{p.alamat}</td>
              <td>
                <ul>
                  <li>{p.telepon1}</li>
                  <li>{p.telepon2}</li>
                </ul>
              </td>
            </tr>
          ))}
        </table>
      </div>

      {/* <h1 className="md:text-2xl font-bold mt-4">PIC Penjemputan di Bandara</h1>
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
      </Carousel> */}
    </div>
  );
}

export default Page;
