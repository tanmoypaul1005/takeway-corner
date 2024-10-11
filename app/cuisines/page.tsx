import Image from "next/image";
import React from "react";
import CuisinesCard from "./components/CuisinesCard";

const Cuisines = () => {
  return (
    <div>
      <div className="text-[32px] font-semibold leading-10 text-white mb-5">
        Your favourite cuisines
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7">
        <CuisinesCard title="Biryani" img="https://images.deliveryhero.io/image/foodpanda/cuisine-images/BD/193.png?height=192" />
        <CuisinesCard title="Pizza" img="https://images.deliveryhero.io/image/foodpanda/cuisine-images/BD/73.png?height=192" />
        <CuisinesCard title="Burgers" img="https://images.deliveryhero.io/image/foodpanda/cuisine-images/BD/85.png?height=192" />
        <CuisinesCard title="Cakes" img="https://images.deliveryhero.io/image/foodpanda/cuisine-images/BD/77.png?height=192" />
        <CuisinesCard title="Breakfast" img="https://images.deliveryhero.io/image/foodpanda/cuisine-images/BD/193.png?height=192" />
        <CuisinesCard title="Pasta" img="https://images.deliveryhero.io/image/foodpanda/cuisine-images/BD/73.png?height=192" />
        <CuisinesCard title="Khichuri" img="https://images.deliveryhero.io/image/foodpanda/cuisine-images/BD/85.png?height=192" />
        <CuisinesCard title="Cafe" img="https://images.deliveryhero.io/image/foodpanda/cuisine-images/BD/77.png?height=192" />
      </div>
    </div>
  );
};

export default Cuisines;
