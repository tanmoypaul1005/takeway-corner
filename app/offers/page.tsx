import { fetchOffer } from "@app/action/offer";
import React from "react";
import OfferSlider from "./components/OfferSlider";

const Offers = async () => {
  const offers = await fetchOffer({});
  return (
    <>
      <OfferSlider offerList={offers} />
    </>
  );
};

export default Offers;
