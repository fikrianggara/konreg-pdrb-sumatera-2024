import React from "react";

const datas: string[] = [];
const page = () => {
  return (
    <div className="h-64 m-auto items-center text-center justify-center">
      {datas.length > 0 ? (
        datas.map((d, i) => <div key={i}>{d.toString()}</div>)
      ) : (
        <div className="h-full flex m-auto justify-center">
          <h1 className="text-xl text-gray-400 self-center">
            belum ada dokumentasi{" "}
          </h1>
        </div>
      )}
    </div>
  );
};

export default page;
