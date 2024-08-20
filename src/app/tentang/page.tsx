import React from "react";
import Breadcrumb from "@/components/breadcrumb";
import Link from "next/link";
import Image from "next/image";

const page = () => {
  return (
    <div className="p-4 lg:px-24 xl:px-36 py-8 space-y-4 lg:space-y-6 bg-dotted">
      <Breadcrumb />
      <div className="space-y-2">
        <h1 className="font-bold text-xl lg:text-3xl text-sky-800">
          <Link href="/kontak">Tentang</Link>
        </h1>
        <p className="lg:text-base">
          Sekilas tentang Konreg PDRB-ISE Se-Sumatera 2024
        </p>
        <Image src="/assets/KONREG.png" alt="logo" width={700} height={100} />
        <p className="indent-8 text-justify">
          Kegiatan Konreg PDRB-ISE Se-Sumatera atau Kegiatan Konsultasi Regional
          Produk Domestik Regional Bruto - Indikator Sosial Ekonomi Se-Sumatera
          merupakan kegiatan tahunan yang dilaksanakan dengan tujuan untuk
          menyamakan visi dan misi dalam rangka pengambilan kebijakan
          perencanaan pembangunan daerah di wilayah regional Sumatera
        </p>
        <p className="indent-8 text-justify">
          Provinsi Jambi menjadi tuan rumah dalam kegiatan Konreg PDRB-ISE
          Se-Sumatera Tahun 2024. Penyelenggaraan kegiatan Konreg PDRB-ISE
          Se-Sumatera Tahun 2024 dilaksanakan pada:
        </p>
        <table>
          <tr>
            <td>Hari/Tanggal</td>
            <td className="px-2">:</td>
            <td className="py-4">Senin s.d. Selasa, 26 - 27 Agustus 2024</td>
          </tr>
          <tr>
            <td>Tempat</td>
            <td className="px-2">:</td>
            <td className="py-4">
              <p>Hotel BW Luxury</p>
              <p>
                Jalan Soekarno-Hatta, Pasir Putih, Kecamatan Jambi Selatan, Kota
                Jambi
              </p>
            </td>
          </tr>
          <tr>
            <td>Peserta</td>
            <td className="px-2">:</td>
            <td className="py-4">
              Bappeda Provinsi se-Sumatera, Dinas Komunikasi dan Informatika
              se-Sumatera, Badan Pusat Statistik se-Sumatera, Kantor Perwakilan
              Bank Indonesia Provinsi se-Sumatera, dan Kantor Wilayah DJPb
              Provinsi se-Sumatera
            </td>
          </tr>
        </table>
        <p className="indent-8 text-justify">
          Adapun tema Konreg PDRB-ISE Se-Sumatera Tahun 2024 yaitu &quot;
          <span className="font-bold">
            Penguatan Transformasi Sosial Ekonomi Wilayah Sumatera Menuju
            Akselerasi Pertumbuhan Ekonomi yang Inklusif dan Berkelanjutan
          </span>
          &quot;
        </p>
      </div>
    </div>
  );
};

export default page;
