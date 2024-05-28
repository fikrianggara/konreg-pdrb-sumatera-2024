import React from "react";

const datas: string[] = [];
const page = () => {
  return (
    <div className="h-64 m-auto items-center text-center justify-center">
      {datas.length > 0 ? (
        datas.map((d) => <div>{d.toString()}</div>)
      ) : (
        <div className="h-full flex m-auto justify-center">
          <h1 className="text-xl text-gray-400 self-center">
            Belum ada Dokumentasi
          </h1>
        </div>
      )}
    </div>
  );
};

export default page;
