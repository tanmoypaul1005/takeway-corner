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
        src={"https://images.deliveryhero.io/image/fd-bd/campaign-assets/04c60cb6-fc89-11ee-8291-b694295486bc/desktop_landing_EnZmXK.png?height=450&quality=95&width=2000&?width=2000"}
        alt="offer banner"
        width={5000}
        height={5000}
        quality={100}
        style={{
          maxWidth: "100%",
          minWidth: "100%",
          maxHeight: "320px",
          minHeight: "320px",
        }}
        className="object-cover w-full h-auto"
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
