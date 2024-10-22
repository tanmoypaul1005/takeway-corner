import { fetchOfferDetails } from "@app/action/offer";
import ShopCard from "@app/restaurant/components/ShopCard";
import Image from "next/image";
import React from "react";

const OfferDetails = async ({ params }) => {
  const offerDetails = await fetchOfferDetails(params.offer_id);
  
  return (
    <div>
      <div className="flex items-center justify-center mb-20">
        <Image
          src={offerDetails?.banner}
          style={{
            maxWidth: "80%",
            minWidth: "80%",
            maxHeight: "320px",
            minHeight: "320px",
          }}
          alt="offer banner"
          width={2000}
          height={2000}
          className="w-fit h-fit"
        />
      </div>
      <div className="container px-4 mx-auto">
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
