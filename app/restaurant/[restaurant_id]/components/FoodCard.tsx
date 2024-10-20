import Image from 'next/image'
import React from 'react'
import { FaPlus } from "react-icons/fa6";

const FoodCard = ({item}) => {
    return (
        <div className="flex justify-between border-[1px] rounded  p-3">
        <div className="flex flex-col justify-center">
          <div className="text-xl font-bold">{item?.title}</div>
          <div className="text-base font-medium">TK {item?.price}</div>
          <div>
              {item?.description}
          </div>
        </div>
        <div className='relative flex items-center justify-center'>
          <Image
            className="rounded-md"
            width={200}
            height={200}
            src={item?.image}
            alt=""
          />

          <div className='absolute p-1 bg-white rounded-full cursor-pointer right-1 bottom-3'>
          <FaPlus className='text-black' />
          </div>
        </div>
      </div>
    )
}

export default FoodCard