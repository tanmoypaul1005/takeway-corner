import React from "react";
import { fetchOfferDetails } from "@app/action/offer";
import ShopCard from "@app/restaurant/components/ShopCard";
import Image from "next/image";

const OfferDetails = async ({ params }) => {
  
  const offerDetails = await fetchOfferDetails(params.offer_id);
  
  return (
    <div>
      <div className="flex items-center justify-center mb-20">
      <Image
          src={offerDetails?.banner || '/fallback-image.jpg'} // Provide a fallback image URL
          alt="offer banner"
          width={5000}
          height={5000}
          quality={100}
          className="object-cover w-full h-auto"
        />
      </div>
      <div className="container">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {offerDetails?.shop?.map((item, index) => (
            <ShopCard key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OfferDetails;
