"use client";

import React from "react";
import { MantineProvider } from "@mantine/core";

const providers = ({ children }: { children: React.ReactNode }) => {
  return <MantineProvider>{children}</MantineProvider>;
};

export default providers;
