import React from "react";

type Props = {};
import Link from "next/link";
import SelectForm from "./SelectForm";

export async function pages({}: Props) {
  return (
    <div>
      <SelectForm />
    </div>
  );
}

export default pages;
