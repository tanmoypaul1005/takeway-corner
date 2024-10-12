import { iClock, iDelivery } from '@util/imageImports';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ShopCard = () => {
  return (
    <Link href={"/restaurant/1"}>
    <div className="relative overflow-hidden bg-white rounded-lg shadow-md">
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
        <div className='flex items-center gap-x-1'>
        <Image width={18} height={18} src={iClock} alt=""/>
        <div className="text-sm font-normal text-gray-600 md:text-base">20-30 min</div>
        </div>
        <div className='flex items-center gap-x-1'>
            <Image width={18} height={18} src={iDelivery} alt=""/>
            <div className="text-base font-bold text-[#e21b70] md:text-base">Free</div>
        </div>

      </div>

      <div className='absolute top-3 left-2 px-2 py-1 bg-[#e21b70] text-[12px] leading-5 font-semibold rounded-md'>
        Gift : Free Delivery
      </div>

      <div className='absolute top-12 left-2 px-2 py-1 bg-[#e21b70] text-[12px] leading-5 font-semibold rounded-md'>
        20% off
      </div>
    </div>
    </Link>
  );
};

export default ShopCard;