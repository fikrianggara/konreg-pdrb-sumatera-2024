import React from "react";

const x = [1, 2, 3, 4, 5, 6, 7];
const page = () => {
  return (
    <div className="w-full">
      <ul className="">
        {x.map((i) => {
          return (
            <div className="">
              <div className="flex space-x-2 items-center">
                <div className="h-12 w-12 bg-amber-500 rounded-full text-center flex justify-center items-center">
                  {i}
                </div>
                {/* <div className="h-48 rounded bg-gray-400">fdsfads</div> */}
              </div>
              {i != x.length && <div className="h-12 border-l-4 ml-6"></div>}
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default page;
