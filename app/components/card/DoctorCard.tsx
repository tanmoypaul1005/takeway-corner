import Image from "next/image";
import Link from "next/link";
import React from "react";
import { iDummyDoctor } from "../../../util/imageImports";

export const DoctorCard = async () => {
  
  return (
    <Link href={`/products/`}>
      <div className="relative w-64 py-5 text-white duration-500 bg-gray-800 shadow-md sm:w-full bg-cCommonBg rounded-xl hover:scale-105 hover:shadow-xl">
        <Image
          style={{ minHeight: "120px", maxHeight: "120px" }}
          alt={"Product Image"}
          width={400}
          height={500}
          src={iDummyDoctor}
          className="object-contain object-center w-full h-32 rounded-t-xl"
        />

        <div className="px-3 pt-2">
          <span className="mr-3 text-xs uppercase">
          Consultant - Radiology & Imaging
          </span>
          <p className="block text-sm font-semibold capitalize truncate line-clamp-2">
            Dr. Shoheli Sultana
          </p>
          {/* <div className="my-2">
            <CommonRating value={parseInt(product?.ratting ?? 0)} />
          </div> */}
          <div className="flex justify-between">
            <p className="text-base font-semibold text-red-400 cursor-auto">
              {/* ${product?.price ?? 0} */} 4444
            </p>
{/* 
            {session?.user?.email && (
              <ProductCardAction
                data={{
                  product_id: product?._id,
                  user: user,
                  session: session,
                }}
              />
            )} */}
          </div>
        </div>
        <div className="absolute top-0.5 right-0.5">
       {/* {product?.offer?.offerPercentage && <span className="px-2 py-1 text-xs font-semibold text-white bg-red-500 rounded-full">{product?.offer?.offerPercentage}% OFF</span>} */}
      </div>
      </div>
    </Link>
  );
};

export default DoctorCard;
