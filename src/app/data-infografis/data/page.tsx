import React from "react";

import { Ipm, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Ipm[]> {
  // Fetch data from your API here.
  return [
    {
      wilayah: "Aceh",
      "2015": "69,45",
      "2016": "70,00",
      "2017": "70,60",
      "2018": "71,19",
      "2019": "71,90",
      "2020": "71,99",
      "2021": "72,18",
      "2022": "72,80",
      "2023": "74,70",
    },
    {
      wilayah: "Sumatera Utara",
      "2015": "69,51",
      "2016": "70,00",
      "2017": "70,57",
      "2018": "71,18",
      "2019": "71,74",
      "2020": "71,77",
      "2021": "72,00",
      "2022": "72,71",
      "2023": "73,37",
    },
    {
      wilayah: "Sumatera Barat",
      "2015": "69,98",
      "2016": "70,73",
      "2017": "71,24",
      "2018": "71,73",
      "2019": "72,39",
      "2020": "72,38",
      "2021": "72,65",
      "2022": "73,26",
      "2023": "73,75",
    },
    {
      wilayah: "Riau",
      "2015": "70,84",
      "2016": "71,20",
      "2017": "71,79",
      "2018": "72,44",
      "2019": "73,00",
      "2020": "72,71",
      "2021": "72,94",
      "2022": "73,52",
      "2023": "74,04",
    },
    {
      wilayah: "Jambi",
      "2015": "68,89",
      "2016": "69,62",
      "2017": "69,99",
      "2018": "70,65",
      "2019": "71,26",
      "2020": "71,29",
      "2021": "71,63",
      "2022": "72,14",
      "2023": "72,77",
    },
    {
      wilayah: "Sumatera Selatan",
      "2015": "67,46",
      "2016": "68,24",
      "2017": "68,86",
      "2018": "69,39",
      "2019": "70,02",
      "2020": "70,01",
      "2021": "70,24",
      "2022": "70,90",
      "2023": "71,62",
    },
    {
      wilayah: "Bengkulu",
      "2015": "68,59",
      "2016": "69,33",
      "2017": "69,95",
      "2018": "70,64",
      "2019": "71,21",
      "2020": "71,40",
      "2021": "71,64",
      "2022": "72,16",
      "2023": "72,78",
    },
    {
      wilayah: "Lampung",
      "2015": "66,95",
      "2016": "67,65",
      "2017": "68,25",
      "2018": "69,02",
      "2019": "69,57",
      "2020": "69,69",
      "2021": "69,90",
      "2022": "70,45",
      "2023": "71,15",
    },
    {
      wilayah: "Kep. Bangka Belitung",
      "2015": "69,05",
      "2016": "69,55",
      "2017": "69,99",
      "2018": "70,67",
      "2019": "71,30",
      "2020": "71,47",
      "2021": "71,69",
      "2022": "72,24",
      "2023": "72,85",
    },
    {
      wilayah: "Kep. Riau",
      "2015": "73,75",
      "2016": "73,99",
      "2017": "74,45",
      "2018": "74,84",
      "2019": "75,48",
      "2020": "75,59",
      "2021": "75,79",
      "2022": "76,46",
      "2023": "77,11",
    },
  ];
}

type Props = {};

import SelectForm from "./SelectForm";
import Link from "next/link";

export async function pages({}: Props) {
  const data = [
    {
      wilayah: "Aceh",
      "2015": "69,45",
      "2016": "70,00",
      "2017": "70,60",
      "2018": "71,19",
      "2019": "71,90",
      "2020": "71,99",
      "2021": "72,18",
      "2022": "72,80",
      "2023": "74,70",
    },
    {
      wilayah: "Sumatera Utara",
      "2015": "69,51",
      "2016": "70,00",
      "2017": "70,57",
      "2018": "71,18",
      "2019": "71,74",
      "2020": "71,77",
      "2021": "72,00",
      "2022": "72,71",
      "2023": "73,37",
    },
    {
      wilayah: "Sumatera Barat",
      "2015": "69,98",
      "2016": "70,73",
      "2017": "71,24",
      "2018": "71,73",
      "2019": "72,39",
      "2020": "72,38",
      "2021": "72,65",
      "2022": "73,26",
      "2023": "73,75",
    },
    {
      wilayah: "Riau",
      "2015": "70,84",
      "2016": "71,20",
      "2017": "71,79",
      "2018": "72,44",
      "2019": "73,00",
      "2020": "72,71",
      "2021": "72,94",
      "2022": "73,52",
      "2023": "74,04",
    },
    {
      wilayah: "Jambi",
      "2015": "68,89",
      "2016": "69,62",
      "2017": "69,99",
      "2018": "70,65",
      "2019": "71,26",
      "2020": "71,29",
      "2021": "71,63",
      "2022": "72,14",
      "2023": "72,77",
    },
    {
      wilayah: "Sumatera Selatan",
      "2015": "67,46",
      "2016": "68,24",
      "2017": "68,86",
      "2018": "69,39",
      "2019": "70,02",
      "2020": "70,01",
      "2021": "70,24",
      "2022": "70,90",
      "2023": "71,62",
    },
    {
      wilayah: "Bengkulu",
      "2015": "68,59",
      "2016": "69,33",
      "2017": "69,95",
      "2018": "70,64",
      "2019": "71,21",
      "2020": "71,40",
      "2021": "71,64",
      "2022": "72,16",
      "2023": "72,78",
    },
    {
      wilayah: "Lampung",
      "2015": "66,95",
      "2016": "67,65",
      "2017": "68,25",
      "2018": "69,02",
      "2019": "69,57",
      "2020": "69,69",
      "2021": "69,90",
      "2022": "70,45",
      "2023": "71,15",
    },
    {
      wilayah: "Kep. Bangka Belitung",
      "2015": "69,05",
      "2016": "69,55",
      "2017": "69,99",
      "2018": "70,67",
      "2019": "71,30",
      "2020": "71,47",
      "2021": "71,69",
      "2022": "72,24",
      "2023": "72,85",
    },
    {
      wilayah: "Kep. Riau",
      "2015": "73,75",
      "2016": "73,99",
      "2017": "74,45",
      "2018": "74,84",
      "2019": "75,48",
      "2020": "75,59",
      "2021": "75,79",
      "2022": "76,46",
      "2023": "77,11",
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-12 gap-1 container mx-auto p-8">
        <div className="col-span-9 grow">
          <h1 className="font-bold text-3xl	text-emerald-700">
            Data Indikator Antarwilayah
          </h1>
          <p className="font-medium text-gray-400 py-4">
            pilih indikator data yang ingin ditampilkan:
          </p>
          <SelectForm />
        </div>
        <div className="col-span-3 py-8 px-4 text-cyan-700">
          <h3 className="text-lg font-semibold">Informasi</h3>
          <hr className="border-3 border-cyan-700" />
          <Link href={"/data-infografis/data"}>
            <h4 className="text-md my-2 underline">Data</h4>
          </Link>
          <Link href={"/data-infografis/infografis/pertumbuhan-ekonomi"}>
            <h4 className="text-md my-2 hover:underline">Infografis</h4>
          </Link>
        </div>
      </div>
      <div className="container mx-auto p-8">
        <h2 className="font-bold text-cyan-700">Indeks Pembangunan Manusia</h2>
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}

export default pages;
