"use client";

import React, { useEffect, useState } from "react";

function TableTolls() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/skill/tools");
      const json = await res.json();
      setPosts(json);
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="border-2 w-full  lg:w-9/12 h-[52vh] rounded-lg mb-2">
        <h1 className=" border-b-2 p-2 font-medium">Tools</h1>
        <div className="flex flex-col gap-2">
          {posts?.data.map((item, i) => (
            <div key={i} className="div px-2 py-2">
              <h6 className="font-medium w-full text-md mb-2 flex items-center">
                {item.attributes.title}{" "}
                <span className="ml-auto">{item.attributes.persentase}%</span>
              </h6>
              <div className="p-[4px] bg-[#0076b66c] rounded-lg relative">
                <div
                  className="p-[4px] bg-[#0076b6] absolute  left-0 top-0 rounded-lg "
                  style={{ width: `${item.attributes.persentase}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TableTolls;
