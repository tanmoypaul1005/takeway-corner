import Image from 'next/image';
import React from 'react';

const FoodCard = () => {
  return (
    <div className="overflow-hidden bg-white rounded-lg shadow-md">
      <div className="relative h-48">
        <Image
          alt="Food Image"
          src="https://imrs.foodibd.com/api/v1/image-resize?imageUrl=https%3A%2F%2Fs3.ap-southeast-1.amazonaws.com%2Fcdn.foodibd.com%2Frestaurant-service%2FCover-3454-20240812103400312.jpg&width=400"
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <div className="p-4">
        <div className="text-lg font-semibold text-gray-800 md:text-xl">BFC- Jashim Uddin</div>
        <div className="text-sm font-normal text-gray-600 md:text-base">BFC- Jashim Uddin</div>
        <div className="text-sm font-normal text-gray-600 md:text-base">20-30 min</div>
      </div>
    </div>
  );
};

export default FoodCard;