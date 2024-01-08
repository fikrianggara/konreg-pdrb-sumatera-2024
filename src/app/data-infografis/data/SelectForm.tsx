"use client";
import React from "react";

type Props = {};

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FormSchema = z.object({
  indikator: z.string({
    required_error: "Please select an indikator to display.",
  }),
});

export function SelectForm({}: Props) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="indikator"
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="===== Pilih Indikator =====" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="pertumbuhan-ekonomi">
                    Pertumbuhan Ekonomi
                  </SelectItem>
                  <SelectItem value="kemiskinan">Kemiskinan</SelectItem>
                  <SelectItem value="ketenagakerjaan">
                    Ketenagakerjaan
                  </SelectItem>
                  <SelectItem value="ipm">
                    Indeks Pembangunan Manusia
                  </SelectItem>
                  <SelectItem value="gini-ratio">Gini Ratio</SelectItem>
                  <SelectItem value="pdrb">PDRB per Kapita</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

export default SelectForm;
