"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useMemo } from "react";

function generateBreadCrumb(pathArray: string[]) {
  let result = [];
  let tempRes = {
    path: "",
    pathName: "",
  };
  for (let i = 0; i < pathArray.length; i++) {
    let path = tempRes.path + "/" + pathArray[i];
    const pathName = pathArray[i];
    tempRes = {
      path,
      pathName,
    };
    result.push(tempRes);
  }
  result = [{ path: "/", pathName: "Home" }, ...result];

  return result;
}

const Breadcrumb = () => {
  const pathname = usePathname();
  console.log(pathname);
  const pathWithoutQueryParam = pathname.split("?")[0];
  const pathArray = pathWithoutQueryParam
    .split("/")
    .filter((path) => path !== "");
  const breadCrumbData = useMemo(
    () => generateBreadCrumb(pathArray),
    [pathArray]
  );

  return (
    <ul className="flex text-xs md:text-sm space-x-1 md:space-x-2 overflow-x-scroll truncate">
      {breadCrumbData.map((crumb, idx) => {
        return (
          <li key={crumb.pathName}>
            {idx !== breadCrumbData.length - 1 ? (
              <div className="space-x-1  md:space-x-2">
                <Link
                  href={crumb.path}
                  className="hover:font-medium hover:underline hover text-emerald-700 hover:text-emerald-800"
                >
                  {crumb.pathName}
                </Link>
                <span className="text-gray-400">/</span>
              </div>
            ) : (
              <div className="font-bold text-emerald-800">{crumb.pathName}</div>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Breadcrumb;
