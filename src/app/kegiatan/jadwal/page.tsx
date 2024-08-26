"use client";
import { useState } from "react";
import { Stepper, Button, Group } from "@mantine/core";
import Image from "next/image";
import {
  IconCalendarEvent,
  IconClock,
  IconMapPinFilled,
  IconUser,
} from "@tabler/icons-react";
import Link from "next/link";
import { formatDate } from "@/lib/utils";

const PEMDA = [
  {
    provinsi: "aceh",
    src: "/assets/logo aceh.png",
    alt: "provinsi aceh",
  },
  {
    provinsi: "bangka belitung",
    src: "/assets/logo babel.png",
    alt: "provinsi babel",
  },
  {
    provinsi: "bengkulu",
    src: "/assets/logo bengkulu.png",
    alt: "provinsi bengkulu",
  },
  {
    provinsi: "jambi",
    src: "/assets/logo jambi.png",
    alt: "provinsi jambi",
  },
  {
    provinsi: "kepri",
    src: "/assets/logo kepri.png",
    alt: "provinsi kepri",
  },
  {
    provinsi: "lampung",
    src: "/assets/logo lampung.png",
    alt: "provinsi lampung",
  },
  {
    provinsi: "riau",
    src: "/assets/logo riau.png",
    alt: "provinsi riau",
  },
  {
    provinsi: "sumbar",
    src: "/assets/logo sumbar.png",
    alt: "provinsi sumbar",
  },
  {
    provinsi: "sumsel",
    src: "/assets/logo sumsel.png",
    alt: "provinsi sumsel",
  },
  {
    provinsi: "sumut",
    src: "/assets/logo sumut.png",
    alt: "provinsi sumut",
  },
];

const KEGIATAN = [
  {
    label: "Hari ke-1",
    keterangan: (
      <div className="space-y-1 md:space-y-2">
        <h2 className="text-sm md:text-lg">Peserta :</h2>
        <h3 className="text-base md:text-lg text-center font-medium">
          Kepala dan Rombongan
        </h3>
        {/* Diskominfo, BPS, BI, DJPb, dan Peserta HLM dari BPS RI */}
        <ul className="flex flex-col lg:flex-none grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 xl:gap-4 w-full">
          <li className="bg-white duration-200 ease-in-out rounded-xl w-full h-24 p-4 border text-center self-center backdrop-blur-sm m-auto text-center items-center flex justify-center">
            <Image
              src={"/assets/logo jambi.png"}
              height={50}
              width={50}
              alt="logo bappeda jambi"
              className="self-center"
            ></Image>
          </li>
          {/* <li className="bg-white duration-200 ease-in-out rounded-xl w-full h-24 p-4 border text-center self-center backdrop-blur-sm m-auto text-center items-center flex justify-center">
            <div className="flex space-x-2 items-center">
              <Image
                src={"/assets/logo jambi.png"}
                height={50}
                width={50}
                alt="logo jambi"
                className="self-center"
              ></Image>
              <h2 className="font-medium text-xs md:text-sm">
                BAPPEDA Provinsi Jambi
              </h2>
            </div>
          </li> */}
          <li className="bg-white duration-200 ease-in-out rounded-xl w-full h-24 p-4 border text-center self-center backdrop-blur-sm m-auto text-center items-center flex justify-center">
            <Image
              src={"/assets/bi.png"}
              height={50}
              width={50}
              alt="logo bi"
              className="self-center rounded-full"
            ></Image>
          </li>
          <li className="bg-white duration-200 ease-in-out rounded-xl w-full h-24 p-4 border text-center self-center backdrop-blur-sm m-auto text-center items-center flex justify-center">
            <Image
              src={"/assets/bps.png"}
              height={50}
              width={50}
              alt="logo bps"
              className="self-center"
            ></Image>
          </li>
          <li className="bg-white duration-200 ease-in-out rounded-xl w-full h-24 p-4 border text-center self-center backdrop-blur-sm m-auto text-center items-center flex justify-center">
            <Image
              src={"/assets/diskominfo.png"}
              height={50}
              width={50}
              alt="logo diskominfo"
              className="self-center"
            ></Image>
          </li>

          <li className="col-span-2 md:col-span-1 bg-white duration-200 ease-in-out rounded-xl w-full h-24 p-4 border text-center self-center backdrop-blur-sm m-auto text-center items-center flex justify-center">
            <Image
              src={"/assets/kemenkeu.png"}
              height={50}
              width={50}
              alt="logo kemenkeu"
              className="self-center"
            ></Image>
          </li>
          <li className="col-span-2 md:col-span-3 lg:col-span-5 bg-white duration-200 ease-in-out rounded-xl w-full border p-4 text-center self-center backdrop-blur-sm grid grid-cols-5 lg:grid-cols-10 gap-4">
            {PEMDA.filter((p) => p.provinsi !== "jambi").map((p) => (
              <div className="flex items-center m-auto" key={p.provinsi}>
                <Image
                  src={p.src}
                  height={36}
                  width={36}
                  alt={p.alt}
                  className="self-center"
                ></Image>
              </div>
            ))}
          </li>
        </ul>
      </div>
    ),
    tanggal: "8/26/2024",
    rincian_kegiatan: [
      {
        jadwal: "08.00 - 16.00 WIB",
        judul: "Kedatangan Peserta",
        uraian: (
          <p>Peserta Inti dan Pendamping, Peserta Tambahan, dan Narasumber</p>
        ),
        lokasi: [
          {
            nama: "Bandara Sultan Thaha Syaifuddin",
            gmaps:
              "https://www.google.com/maps/place/Sultan+Thaha+Airport/@-1.6325978,103.6406519,17z/data=!3m1!4b1!4m6!3m5!1s0x2e2585fad6e79e9b:0xf039d8194a03080!8m2!3d-1.6325978!4d103.6432268!16s%2Fm%2F02pk5mf?entry=ttu",
          },
          {
            nama: "BW Luxury Hotel",
            gmaps:
              "https://www.google.com/maps/place/BW+Luxury+Jambi/@-1.619318,103.6272072,17z/data=!3m1!4b1!4m9!3m8!1s0x2e2589ddd9aaf037:0x2d53969da3e156f1!5m2!4m1!1i2!8m2!3d-1.619318!4d103.6297821!16s%2Fg%2F11gv02gq2x?entry=ttu",
          },
        ],
      },
      {
        jadwal: "17.00 - 18.00 WIB",
        judul: "High Level Meeting (HLM)",
        uraian: (
          <p>
            Makan Malam Peserta Inti (Kepala Bappeda, Kadiskominfo, Kepala BPS,
            Kepala BI, Kakanwil DJPb )
          </p>
        ),
        lokasi: [
          {
            nama: "BW Luxury Hotel",
            gmaps:
              "https://www.google.com/maps/place/BW+Luxury+Jambi/@-1.619318,103.6272072,17z/data=!3m1!4b1!4m9!3m8!1s0x2e2589ddd9aaf037:0x2d53969da3e156f1!5m2!4m1!1i2!8m2!3d-1.619318!4d103.6297821!16s%2Fg%2F11gv02gq2x?entry=ttu",
          },
        ],
      },
      {
        jadwal: "18.00 – 19.30 WIB",
        judul: "ISHOMA",
        uraian: (
          <ul className="space-y-2">
            <li>Sholat</li>
            <li>Makan Malam Bersama Peserta HLM</li>
          </ul>
        ),
        lokasi: [
          {
            nama: "BW Luxury Hotel",
            gmaps:
              "https://www.google.com/maps/place/BW+Luxury+Jambi/@-1.619318,103.6272072,17z/data=!3m1!4b1!4m9!3m8!1s0x2e2589ddd9aaf037:0x2d53969da3e156f1!5m2!4m1!1i2!8m2!3d-1.619318!4d103.6297821!16s%2Fg%2F11gv02gq2x?entry=ttu",
          },
        ],
      },
      {
        jadwal: "19.00 – 21.00 WIB",
        judul: "Lanjutan High Level Meeting (HLM)",
        uraian: (
          <ol className="space-y-2">
            <li>
              1. Evaluasi dan Tindak Lanjut Pelaksanaan Hasil Kesepakatan Konreg
              PDRB-ISE se-Sumatera Tahun 2023 di Provinsi Kepulauan Bangka
              Belitung
            </li>
            <li>
              2. Penentuan Penyelenggaraan Konreg PDRB-ISE se-Sumatera Tahun
              2025 dan 2026
            </li>
          </ol>
        ),
        lokasi: [
          {
            nama: "BW Luxury Hotel",
            gmaps:
              "https://www.google.com/maps/place/BW+Luxury+Jambi/@-1.619318,103.6272072,17z/data=!3m1!4b1!4m9!3m8!1s0x2e2589ddd9aaf037:0x2d53969da3e156f1!5m2!4m1!1i2!8m2!3d-1.619318!4d103.6297821!16s%2Fg%2F11gv02gq2x?entry=ttu",
          },
        ],
      },
    ],
  },
  {
    label: "Hari ke-2",
    keterangan: (
      <div className="space-y-4">
        <h1 className="text-center text-lg font-medium">Opening Speech</h1>
        <div className="grid grid-cols-2 gap-2">
          {/* <div className="flex flex-col space-y-2 justify-center text-center self-start">
            <img
              src="/assets/kepala_bappeda.png"
              alt="kepala bappeda jambi"
              className="h-16 md:h-24 aspect-square rounded-full border object-cover items-center self-center bg-gray-500"
            />
            <h1 className="text-xs md:text-sm font-medium">Agus Sunaryo</h1>
            <h2 className="text-xs text-gray-600">
              Kepala Bappeda Prov. Jambi
            </h2>
          </div> */}
          <Link href="https://ppid.bps.go.id/app/konten/0000/Profil-BPS.html">
            <div className="flex flex-col space-y-2 text-center">
              <img
                src="/assets/kepala_bps_ri.png"
                alt="kepala BPS RI"
                className="h-16 md:h-24 aspect-square rounded-full border object-cover items-center self-center bg-gray-500"
              />

              <h1 className="text-xs md:text-sm font-medium">
                Amalia Adininggar Widyasanti S.T., M.Si., M.Eng., Ph.D.
              </h1>

              <h2 className="text-xs text-gray-600">PLT Kepala BPS RI</h2>
            </div>
          </Link>
          {/* <Link href="https://ppid.bps.go.id/app/konten/0000/Profil-BPS.html">
            <div className="flex flex-col space-y-2 text-center">
              <img
                src="/assets/deputi_neraca_bps_ri.png"
                alt="deputi neraca BPS RI"
                className="h-16 md:h-24 aspect-square rounded-full border object-cover items-center self-center bg-gray-500"
              />
              <h1 className="text-xs md:text-sm font-medium">
                Moh. Edy Mahmud, S.Si., M.P
              </h1>
              <h2 className="text-xs text-gray-600">
                Deputi Neraca dan Analisis BPS RI
              </h2>
            </div>
          </Link> */}
          <Link href="https://id.wikipedia.org/wiki/Al_Haris">
            <div className="flex flex-col space-y-2 justify-center text-center self-start">
              <img
                src="/assets/gubernur_jambi.png"
                alt="gubernur jambi"
                className="h-16 md:h-24 aspect-square rounded-full border object-cover items-center self-center bg-gray-500"
              />
              <h1 className="text-xs md:text-sm font-medium">
                Dr. H. Al Haris, S.Sos., M.H.
              </h1>
              <h2 className="text-xs text-gray-600">Gubernur Jambi</h2>
            </div>
          </Link>
        </div>
      </div>
    ),
    rincian_kegiatan: [
      {
        jadwal: "07.30 - 08.30 WIB",
        judul: "Registrasi Peserta",
        uraian: (
          <ol className="space-y-1 ml-4">
            <li>1. Pembukaan Acara</li>
            <li>2. Persembahan Tari Selamat Datang</li>
            <li>3. Lagu Kebangsaan Indonesia Raya</li>
            <li>4. Pembacaan Doa</li>
            <li>5. Laporan Ketua Penyelenggara</li>
            <li>6. Opening Speech</li>
            <li>
              7. Sambutan sekaligus Membuka Acara Konreg PDRB-ISE se-Sumatera
              Tahun 2024
            </li>
            <li>
              8. Launching Website Konreg PDRB-ISE sebagai Tanda Konreg PDRB-ISE
              se-Sumatera Tahun 2024 dimulai
            </li>
            <li>9. Foto Bersama</li>
            <li>10. Penutupan oleh MC</li>
          </ol>
        ),
        lokasi: [
          {
            nama: "Taman Raja Ballroom, BW Luxury Hotel",
            gmaps:
              "https://www.google.com/maps/place/BW+Luxury+Jambi/@-1.619318,103.6272072,17z/data=!3m1!4b1!4m9!3m8!1s0x2e2589ddd9aaf037:0x2d53969da3e156f1!5m2!4m1!1i2!8m2!3d-1.619318!4d103.6297821!16s%2Fg%2F11gv02gq2x?entry=ttu",
          },
        ],
      },
      {
        jadwal: "09.15 - 09.30 WIB",
        judul: "Coffee Break",
        uraian: <p></p>,
        lokasi: [
          {
            nama: "Taman Raja Ballroom, BW Luxury Hotel",
            gmaps:
              "https://www.google.com/maps/place/BW+Luxury+Jambi/@-1.619318,103.6272072,17z/data=!3m1!4b1!4m9!3m8!1s0x2e2589ddd9aaf037:0x2d53969da3e156f1!5m2!4m1!1i2!8m2!3d-1.619318!4d103.6297821!16s%2Fg%2F11gv02gq2x?entry=ttu",
          },
        ],
      },
      {
        jadwal: "09.30 – 11.15 WIB",
        judul: "Paparan Narasumber",
        uraian: (
          <div className="space-y-6">
            <h2 className="font-medium text-center md:text-lg">
              Keynote Speech
            </h2>
            <Link href="https://ppid.bps.go.id/app/konten/0000/Profil-BPS.html">
              <div className="flex flex-col space-y-1 text-center items-start self-center text-center">
                <img
                  src="/assets/deputi_neraca_bps_ri.png"
                  alt="deputi neraca BPS RI"
                  className="h-16 md:h-24 aspect-square rounded-full border object-cover items-center self-center bg-gray-500"
                />
                <h1 className="text-xs md:text-sm font-medium self-center">
                  Moh. Edy Mahmud, S.Si., M.P
                </h1>
                <h2 className="text-xs text-gray-600 self-center">
                  Deputi Neraca dan Analisis Statistik BPS-RI
                </h2>
              </div>
            </Link>

            <h2 className="font-medium text-center w-full md:text-lg">
              Diskusi Panel
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-2">
              <Link href="https://id.wikipedia.org/wiki/Elviana">
                <div className="flex flex-col space-y-1 text-center items-start w-fit self-start">
                  <img
                    src="/assets/presentasi_1.png"
                    alt="presentasi 1"
                    className="h-16 md:h-24 aspect-square rounded-full border object-cover items-center self-center bg-gray-500"
                  />
                  <h1 className="text-xs md:text-sm font-medium self-center">
                    Dra. Hj. Elviana, M.Si.
                  </h1>
                  <h2 className="text-xs text-gray-600 self-center">
                    Ketua Komite IV DPD-RI
                  </h2>
                  <h2 className="text-xs text-gray-600 self-center font-medium">
                    Presentasi 1
                  </h2>
                </div>
              </Link>
              <Link href="https://ppid.bps.go.id/app/konten/0000/Profil-BPS.html">
                <div className="flex flex-col space-y-1 text-center items-start w-fit self-start">
                  <img
                    src="/assets/presentasi_2.png"
                    alt="presentasi 2"
                    className="h-16 md:h-24 aspect-square rounded-full border object-cover items-center self-center bg-gray-500"
                  />
                  <h1 className="text-xs md:text-sm font-medium self-center">
                    Pipit Helly Sorayan, SE., ME.
                  </h1>
                  <h2 className="text-xs text-gray-600 self-center">
                    Direktur Neraca Pengeluaran BPS RI
                  </h2>
                  <h2 className="text-xs text-gray-600 self-center font-medium">
                    Presentasi 2
                  </h2>
                </div>
              </Link>
              <Link href="https://www.bappenas.go.id/">
                <div className="flex flex-col space-y-1 text-center items-start w-fit self-start">
                  <IconUser className="h-16 md:h-24 w-16 md:w-24 rounded-full bg-gray-400 text-white text-center self-center"></IconUser>
                  <h1 className="text-xs md:text-sm font-medium self-center">
                    Dra. Ratna Sri Mawarti Mustikaningsih, MA.
                  </h1>
                  <h2 className="text-xs text-gray-600 self-center">
                    Kementrian PPN/Bappenas
                  </h2>
                  <h2 className="text-xs text-gray-600 self-center font-medium">
                    Presentasi 3
                  </h2>
                </div>
              </Link>
              <Link href="#">
                <div className="flex flex-col space-y-1 text-center items-start w-fit self-start">
                  <img
                    src="/assets/Foto P'Iman (3).JPG"
                    alt="presentasi 4"
                    className="h-16 md:h-24 aspect-square rounded-full border object-cover items-center self-center bg-gray-500"
                  />
                  <h1 className="text-xs md:text-sm font-medium self-center">
                    Iman Gunadi, S.Si., M.Sc., PhD
                  </h1>

                  <h2 className="text-xs text-gray-600 self-center">
                    Advisor, Kantor Perwakilan Bank Indonesia Provinsi Sumatra
                    Utara
                  </h2>
                  <h2 className="text-xs text-gray-600 self-center font-medium">
                    Presentasi 4
                  </h2>
                </div>
              </Link>
              <Link href="https://djpb.kemenkeu.go.id/portal/id/profil/profil-organisasi/profil-pejabat.html">
                <div className="flex flex-col space-y-1 text-center items-start w-fit self-start">
                  <img
                    src="/assets/presentasi_5.png"
                    alt="presentasi 5"
                    className="h-16 md:h-24 aspect-square rounded-full border object-cover items-center self-center bg-gray-500"
                  />
                  <h1 className="text-xs md:text-sm font-medium self-center">
                    Taukhid, S.E., M.Sc.I.B., M.B.A
                  </h1>

                  <h2 className="text-xs text-gray-600 self-center">
                    Tenaga Pengkaji Bidang Perbendaharaan Direktorat Jenderal
                    Perbendaharaan
                  </h2>
                  <h2 className="text-xs text-gray-600 self-center font-medium">
                    Presentasi 5
                  </h2>
                </div>
              </Link>
            </div>
            <h2 className="font-medium text-center md:text-lg">
              {" "}
              Tanya Jawab dan Diskusi
            </h2>
          </div>
        ),
        lokasi: [
          {
            nama: "Taman Raja Ballroom, BW Luxury Hotel",
            gmaps:
              "https://www.google.com/maps/place/BW+Luxury+Jambi/@-1.619318,103.6272072,17z/data=!3m1!4b1!4m9!3m8!1s0x2e2589ddd9aaf037:0x2d53969da3e156f1!5m2!4m1!1i2!8m2!3d-1.619318!4d103.6297821!16s%2Fg%2F11gv02gq2x?entry=ttu",
          },
        ],
      },
      {
        jadwal: "11.15 - 11.45 WIB",
        judul: "Paparan Hasil dan Penandatanganan Kesepakatan",
        uraian: (
          <div>
            <p>Paparan Hasil Kesepakatan</p>
            <p>
              Penandatanganan Kesepakatan Konreg PDRB-ISE se-Sumatera Tahun 2024
            </p>
          </div>
        ),
        lokasi: [
          {
            nama: "Taman Raja Ballroom, BW Luxury Hotel",
            gmaps:
              "https://www.google.com/maps/place/BW+Luxury+Jambi/@-1.619318,103.6272072,17z/data=!3m1!4b1!4m9!3m8!1s0x2e2589ddd9aaf037:0x2d53969da3e156f1!5m2!4m1!1i2!8m2!3d-1.619318!4d103.6297821!16s%2Fg%2F11gv02gq2x?entry=ttu",
          },
        ],
      },
      {
        jadwal: "11.45 - 12.30 WIB",
        judul: "Acara Penutupan",
        uraian: (
          <ul className="space-y-2">
            <li>1. Pidato Penutupan</li>
            <li>
              2. Penyerahan Souvenir kepada Peserta Inti (Bappeda, BPS, BI.
              Diskominfo, DJPb)
            </li>
            <li>3. Foto Bersama</li>
          </ul>
        ),
        lokasi: [
          {
            nama: "Taman Raja Ballroom, BW Luxury Hotel",
            gmaps:
              "https://www.google.com/maps/place/BW+Luxury+Jambi/@-1.619318,103.6272072,17z/data=!3m1!4b1!4m9!3m8!1s0x2e2589ddd9aaf037:0x2d53969da3e156f1!5m2!4m1!1i2!8m2!3d-1.619318!4d103.6297821!16s%2Fg%2F11gv02gq2x?entry=ttu",
          },
        ],
      },
      {
        jadwal: "12.30 – 13.30 WIB",
        judul: "ISHOMA",
        // uraian: (
        //   <ul className="space-y-2">
        //     <li>Sholat</li>
        //     <li>Makan Malam Bersama Peserta HLM</li>
        //   </ul>
        // ),
        lokasi: [
          {
            nama: "BW Luxury Hotel",
            gmaps:
              "https://www.google.com/maps/place/BW+Luxury+Jambi/@-1.619318,103.6272072,17z/data=!3m1!4b1!4m9!3m8!1s0x2e2589ddd9aaf037:0x2d53969da3e156f1!5m2!4m1!1i2!8m2!3d-1.619318!4d103.6297821!16s%2Fg%2F11gv02gq2x?entry=ttu",
          },
        ],
      },
      {
        jadwal: "13.30 – 17.00 WIB",
        judul: "City Tour",
        uraian: <p>Rute dari Hotel BW Luxury Jambi menuju Candi Muaro Jambi</p>,
        lokasi: [
          {
            nama: "Candi Muaro Jambi",
            gmaps:
              "https://www.google.com/maps/place/Muaro+Jambi+Temple+Complex/@-1.6009188,103.5784017,13z/data=!4m6!3m5!1s0x2e25f3532e01e437:0x9251412ef519ac6f!8m2!3d-1.4779213!4d103.6670838!16s%2Fm%2F03h3n81?entry=ttu",
          },
        ],
      },
    ],
    tanggal: "8/27/2024",
  },
  {
    label: "Hari ke-3",
    keterangan: <h2></h2>,
    tanggal: "8/28/2024",
    rincian_kegiatan: [
      {
        jadwal: "-",
        judul: "Check Out Peserta",
        uraian: (
          <p>Check Out dan Kepulangan Peserta Menuju Provinsi Masing-masing</p>
        ),
        lokasi: [
          {
            nama: "BW Luxury Hotel",
            gmaps:
              "https://www.google.com/maps/place/BW+Luxury+Jambi/@-1.619318,103.6272072,17z/data=!3m1!4b1!4m9!3m8!1s0x2e2589ddd9aaf037:0x2d53969da3e156f1!5m2!4m1!1i2!8m2!3d-1.619318!4d103.6297821!16s%2Fg%2F11gv02gq2x?entry=ttu",
          },
          {
            nama: "Bandara Sultan Thaha Syaifuddin",
            gmaps:
              "https://www.google.com/maps/place/Sultan+Thaha+Airport/@-1.6325978,103.6406519,17z/data=!3m1!4b1!4m6!3m5!1s0x2e2585fad6e79e9b:0xf039d8194a03080!8m2!3d-1.6325978!4d103.6432268!16s%2Fm%2F02pk5mf?entry=ttu",
          },
        ],
      },
    ],
  },
];

function Page() {
  const [active, setActive] = useState(1);
  const [activeDescription, setActiveDescription] = useState(1);
  const [highestStepVisited, setHighestStepVisited] = useState(active);

  const handleStepChange = (nextStep: number) => {
    const isOutOfBounds = nextStep > KEGIATAN.length || nextStep < 0;

    if (isOutOfBounds) {
      return;
    }

    setActive(nextStep);
    setActiveDescription(nextStep);
    setHighestStepVisited((hSC) => Math.max(hSC, nextStep));
  };

  // Allow the user to freely go back and forth between visited steps.
  const shouldAllowSelectStep = (step: number) =>
    highestStepVisited >= step && active !== step;

  return (
    <div className="w-full space-y-4 md:space-x-4 md:space-y-0 md:flex justify-between p-4 flex-col lg:flex-row">
      {/* <div className="md:basis-1/3 flex flex-col justify-start items-end h-96 lg:h-full overflow-y-scroll">
        <Stepper
          active={active}
          onStepClick={setActive}
          orientation="vertical"
          allowNextStepsSelect={false}
          size="lg"
        >
          {KEGIATAN.map((k, i) => (
            <Stepper.Step
              key={i}
              label={
                activeDescription - 1 == i ? (
                  <h1
                    className="text-xs md:text-sm underline hover:cursor-pointer text-sky-600"
                    onClick={() => setActiveDescription(i + 1)}
                  >
                    {k.label}
                  </h1>
                ) : (
                  <h1
                    className="text-xs md:text-sm hover:underline hover:cursor-pointer"
                    onClick={() => setActiveDescription(i + 1)}
                  >
                    {k.label}
                  </h1>
                )
              }
              allowStepSelect={false}
              // onClick={() => setActiveDescription(i + 1)}
              icon={
                // <div className="h-36 w-36">
                activeDescription - 1 == i ? (
                  <h4 className="text-xs space-y-1 text-sky-600 text-center">
                    {formatDate(k.jadwal)}
                  </h4>
                ) : (
                  <h4 className="text-xs space-y-1 text-center">
                    {formatDate(k.jadwal)}
                  </h4>
                )

                // </div>
              }
              description={
                <div
                  className="space-y-2 w-full"
                  onClick={() => setActiveDescription(i + 1)}
                >
                  <div className="flex space-x-2 items-center text-xs md:text-sm">
                    <IconMapPinFilled size={24} />
                    <h3>{k.lokasi}</h3>
                  </div>
                </div>
              }
            ></Stepper.Step>
          ))}

          <Stepper.Completed>
            <div className="p-2 rounded-lg bg-green-50 text-green-500 mr-2 text-xs flex items-center space-x-2">
              <IconCheck size={24} />
              <span className="ml-2">
                {" "}
                Seluruh kegiatan telah selesai dilaksanakan
              </span>
            </div>
          </Stepper.Completed>
        </Stepper>
      </div> */}
      {/* <div className="">Belum ada jadwal</div> */}
      {/* <div className="space-y-2 md:basis-2/3">
        <div className="flex items-center space-x-2">
          <Button
            variant="default"
            onClick={() => handleStepChange(active - 1)}
            disabled={active <= 1}
          >
            Kembali
          </Button>
          <Button
            variant="light"
            className="text-sky-800 bg-sky-100"
            onClick={() => handleStepChange(active + 1)}
            disabled={active >= KEGIATAN.length}
          >
            Selanjutnya
          </Button>
        </div>
        <div className="md:basis-1/2 bg-gray-100 rounded-lg p-4 h-96 text-xs md:text-base">
          <div>
            {KEGIATAN[activeDescription - 1].rincian_kegiatan
              ? KEGIATAN[activeDescription - 1].rincian_kegiatan
              : "tidak ada kegiatan"}
          </div>
        </div>
      </div> */}
      <div className="space-y-6">
        <div className="bg-white p-4 rounded-lg border space-y-4">
          <h2 className="font-medium text-gray-600 md:text-xl md:text-base">
            Denah Tempat Duduk
          </h2>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 ">
            <Image
              src="/assets/tempat-duduk.png"
              alt="alokasi tempat duduk"
              height={200}
              width={550}
              className="aspect-auto"
            />
            <ul className="flex flex-col space-y-2 h-64 md:h-96 overflow-scroll md:w-96 text-xs">
              <li>Meja 1 : Provinsi Aceh</li>
              <li>Meja 2 : Provinsi Sumatera Utara</li>
              <li>Meja 3 : Provinsi Sumatera Barat</li>
              <li>Meja 4 : VIP (3 Direktur dan Narasumber lain)</li>
              <li>
                Meja 5 : VIP (Bapak Gubernur, Ibu Kepala BPS RI, Ibu Elviana,
                Bapak Deputi dan Kepala Bappeda Prov Jambi)
              </li>
              <li>Meja 6 : Provinsi Riau</li>
              <li>Meja 7 : Provinsi Sumatera Selatan</li>
              <li>Meja 8 : Provinsi Lampung</li>
              <li>Meja 11 : Provinsi Kepulauan Riau</li>
              <li>Meja 12 : Provinsi Jambi</li>
              <li>Meja 13 : Provinsi Bangka Belitung</li>
              <li>Meja 14 : Provinsi Bengkulu</li>
              <li>Meja 9,10,15,16 : tamu lain/panitia</li>
              <li>Peserta lain di kursi theater</li>
            </ul>
          </div>
        </div>

        {KEGIATAN.map((k, i) => (
          <div
            className="space-y-4 border rounded-lg p-4 md:p-8 w-full bg-white"
            key={i}
          >
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center text-xs md:text-sm px-4 py-1 bg-teal-600 rounded-lg text-white w-full md:w-fit font-medium justify-center">
                <IconCalendarEvent className=" mr-2" />
                {formatDate(k.tanggal)}
              </div>
              <h1 className="text-lg md:text-2xl font-medium">{k.label}</h1>
              <div className="text-sm">{k.keterangan}</div>
              <h2 className="md:text-xl font-medium text-gray-800 text-center w-full">
                Jadwal
              </h2>
              <hr />
              <div className="space-y-2 text-sm">
                {k.rincian_kegiatan.map((r, j) => (
                  <div key={j} className="space-y-2 py-2 md:py-4">
                    <div className="flex flex-col md:flex-row items-start space-y-2 md:space-y-0 md:space-x-4">
                      <div className="flex space-x-4 items-center justify-start h-full bg-emerald-500 px-4 py-1 text-white w-full md:w-fit rounded-lg font-medium justify-center">
                        <IconClock className="mr-2 md:mr-4" />
                        {r.jadwal}
                      </div>
                      <div className="w-full md:w-2/3 space-y-2 md:space-y-3 p-2 md:p-0">
                        <h2 className="text-lg md:text-xl font-medium text-gray-800">
                          {r.judul}
                        </h2>
                        <div className="text-sm">{r.uraian}</div>
                        <ul className="space-y-2 text-xs">
                          {r.lokasi.map((l, m) => (
                            <li key={m}>
                              <Link
                                className="flex items-center cursor-pointer hover:underline"
                                href={l.gmaps}
                              >
                                <IconMapPinFilled
                                  className="text-red-600 mr-2"
                                  size={20}
                                />
                                {l.nama}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <hr />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
