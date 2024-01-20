"use client";
import React from "react";

type Props = {};

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useState } from "react";
import Link from "next/link";
import { Data, columns } from "./columns";
import { DataTable } from "./data-table";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import Papa from "papaparse";
import categories from "./categories";

const FormSchema = z.object({
  indikator: z.string({
    required_error: "Please select an indikator to display.",
  }),
});

export default function ShowData({}: Props) {
  const [category, setCategory] = useState<string | undefined>("");
  const [indicators, setIndicators] = useState<
    | {
        name?: string;
        tag?: string;
      }[]
    | undefined
  >([]);
  const [data, setData] = useState<any>([]);
  const [title, setTitle] = useState<string | undefined>("");

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  return (
    <>
      <div className="grid grid-cols-12 gap-1 container mx-auto p-8">
        <div className="col-span-9 grow">
          <h1 className="font-bold text-3xl	text-emerald-700">
            Data Indikator Antarwilayah
          </h1>
          <p className="font-medium text-gray-400 py-4">
            pilih indikator data yang ingin ditampilkan:
          </p>
          <Form {...form}>
            <form className="w-2/3 space-y-6">
              <FormField
                name="indikator"
                render={({ field }) => (
                  <>
                    <FormItem className="mb-2">
                      <FormLabel>Kategori Data</FormLabel>
                      <Select
                        onValueChange={(field) => {
                          if (category != field) {
                            setTitle("");
                          }
                          setCategory(field);
                          setIndicators(
                            categories.find((ctr) => ctr.key === field)
                              ?.indicators
                          );
                        }}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="===== Pilih Kategori =====" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem
                              key={category.key as string}
                              value={category.key as string}
                            >
                              {category.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormItem>
                    {category != "" ? (
                      <FormItem className="mt-2">
                        <FormLabel>Indikator</FormLabel>
                        <Select
                          onValueChange={(field) => {
                            const file = "/data/" + field + ".csv";
                            fetch(file)
                              .then((response) => response.text())
                              .then((responseText) => {
                                // -- parse csv
                                const data = Papa.parse(responseText, {
                                  header: true,
                                });
                                if (data.errors.length > 0) {
                                  // throw new Error("data tidak ditemukan");
                                  console.log(data.errors);
                                }
                                setTitle(
                                  indicators?.find((ind) => ind.tag === field)
                                    ?.name
                                );
                                setData(data.data);
                              })
                              .catch((e) => {
                                setData([]);
                              });
                          }}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="===== Pilih Indikator =====" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {indicators?.map((indicator) => (
                              <SelectItem
                                key={indicator.tag as string}
                                value={indicator.tag as string}
                              >
                                {indicator.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormItem>
                    ) : null}
                  </>
                )}
              />
            </form>
          </Form>
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
        <h2 className="font-bold text-cyan-700">{title}</h2>
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
}
