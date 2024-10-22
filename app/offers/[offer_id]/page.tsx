import { fetchOfferDetails } from "@app/action/offer";
import Image from "next/image";
import React from "react";

const OfferDetails = async ({ params }) => {
  const offerDetails = await fetchOfferDetails(params.offer_id);

  return (
    <div className="flex items-center justify-center">
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
  );
};

export default OfferDetails;
