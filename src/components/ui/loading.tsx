import { IconPhoto } from "@tabler/icons-react";
import React from "react";

export const LoadingImage = () => {
  return (
    <div className="bg-gray-300 h-48 animate-pulse flex items-center justify-center rounded-lg w-2/3">
      <IconPhoto
        size={60}
        className="text-white text-center self-center"
      ></IconPhoto>
    </div>
  );
};
