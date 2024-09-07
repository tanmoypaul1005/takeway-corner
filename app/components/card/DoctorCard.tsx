import Image from "next/image";
import Link from "next/link";
import React from "react";
import { iDummyDoctor } from "../../../util/imageImports";
import CommonRating from "../ratting/CommonRating";

export const DoctorCard = async ({ doctor }) => {

  return (
    <Link href={`/doctor/${doctor?._id}`}>
      <div className="relative w-64 py-5 text-white duration-500 bg-gray-800 shadow-md sm:w-full bg-cCommonBg rounded-xl hover:scale-105 hover:shadow-xl">
        <Image
          style={{ minHeight: "120px", maxHeight: "120px" }}
          alt={"Product Image"}
          width={400}
          height={500}
          src={doctor?.image ?? iDummyDoctor}
          className="object-contain object-center w-full h-32 rounded-t-xl"
        />

        <div className="px-3 pt-2">
          <span className="mr-3 text-[10px] uppercase">
            {doctor?.specialization}
          </span>
          <p className="block text-base font-semibold capitalize truncate line-clamp-2">
            {doctor?.name}
          </p>
          <div className="my-2">
            <CommonRating value={parseInt(doctor?.ratings ?? 0)} />
          </div>
          <div className="flex justify-between">
            <p className="text-sm font-semibold text-red-400 cursor-auto line-clamp-2">
              {doctor?.qualifications?.map((qualification) => qualification).join(", ")}
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
