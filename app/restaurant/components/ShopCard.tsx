import { iClock, iDelivery } from '@util/imageImports';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ShopCard = ({data}) => {
  console.log("data",data);
  return (
    <Link href={`/restaurant/${data?._id}`}>
    <div className="relative overflow-hidden bg-white rounded-lg shadow-md">
      <div className="relative h-48">
        <Image
          style={{
            maxHeight:"192px",
            minHeight:"192px"
          }}
          alt="Food Image"
          src={data?.banner}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <div className="p-4">
        <div className="text-sm font-semibold text-gray-800 md:text-base">{data?.title}</div>
        <div className='flex items-center gap-x-1'>
        <Image width={18} height={18} src={iClock} alt=""/>
        <div className="text-sm font-normal text-gray-600 md:text-base">{data?.delivery_time} min</div>
        </div>
        <div className='flex items-center gap-x-1'>
            <Image width={18} height={18} src={iDelivery} alt=""/>
            <div className="text-base font-bold text-[#e21b70] md:text-base">{data?.delivery_charge}</div>
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