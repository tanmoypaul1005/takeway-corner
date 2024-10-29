"use client";
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa6";

const AddressList = () => {
  const [selectedId, setSelectedId] = useState(null);

  const item = [
    {
      _id: "1",
      name: "Nike Air Max Pro 8888 - Super Light",
      size: "42EU - 8.5US",
      price: "$138.99",
    },
    {
      _id: "2",
      name: "Nike Air Max Pro 8888 - Super Light",
      size: "42EU - 8.5US",
      price: "$138.99",
    },
    {
      _id: "3",
      name: "Nike Air Max Pro 8888 - Super Light",
      size: "42EU - 8.5US",
      price: "$138.99",
    },
  ];

  return (
    <div className="py-4 mt-8 space-y-3 ">
      {item?.map((item) => (
        <div
          onClick={() => setSelectedId(item._id)}
          key={item._id}
          className={`flex cursor-pointer flex-col w-full px-4 py-4 rounded-lg border-[3px] ${
            selectedId === item?._id ? "border-blue-800" : "border-gray-200"
          } `}
        >
          <div className="flex justify-between">
            <span className="font-semibold">{item.name}</span>
            {selectedId === item?._id && (
              <FaCheck className="w-5 h-5 text-blue-800" />
            )}
          </div>
          <span className="float-right text-gray-400">{item.size}</span>
          <p className="text-lg font-bold">{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default AddressList;
