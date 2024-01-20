import { LoadingOverlay } from "@mantine/core";
import React from "react";

export default function loading() {
  return (
    <div className="h-96 w-full">
      <LoadingOverlay
        visible={true}
        zIndex={1000}
        overlayProps={{ radius: "sm", blur: 2 }}
        loaderProps={{ color: "teal", type: "bars" }}
      />
    </div>
  );
}
