"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import FoodCardDetailsModal from "./FoodCardDetailsModal";

const FoodCard = ({ item }) => {

  const [isModal, setModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div
      className="shadow-md cursor-pointer"
      onClick={() => {
        setSelectedItem(item);
        setModal(true);
      }}
    >
      <div className="flex justify-between border-[1px] border-cyan-500/50 rounded p-3">
        <div className="flex flex-col justify-center">
          <div className="text-2xl font-bold">{item?.title}</div>
          <div className="text-base font-medium">TK {item?.price}</div>
          <div>{item?.description}</div>
        </div>
        <div className="relative flex items-center justify-center">
          <Image
            className="rounded-md"
            width={200}
            height={200}
            src={item?.image}
            alt=""
          />

          <div className="absolute p-1 bg-white rounded-full cursor-pointer right-1 bottom-3">
            <FaPlus className="text-black" />
          </div>
        </div>
      </div>
      <FoodCardDetailsModal selectedItem={selectedItem} isModal={isModal} setModal={setModal} />
    </div>
  );
};

export default FoodCard;
