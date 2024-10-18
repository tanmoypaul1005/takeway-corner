import Breadcrumbs from "@app/components/breadcrumbs/Breadcrumbs";
import Image from "next/image";
import React from "react";
import FoodCard from "./components/FoodCard";
import { fetchShopDetails } from "@app/action/shop";
import { getCategory } from "@app/action/category";

const Restaurant =async ({params}) => {

  const shopDetails=await fetchShopDetails(params?.restaurant_id);
  console.log("shopDetails",shopDetails)

  const category=await getCategory(); 
  
  return (
    <div className="px-10 pb-10">
      <Breadcrumbs />
      <div className="flex gap-x-3 border-b-[1px] pb-5">
        <Image
          className="rounded-md"
          width={150}
          height={150}
          src={shopDetails?.image}
          alt=""
        />
        <div className="flex flex-col justify-center">
          <div className="text-2xl font-bold text-white">
             {shopDetails?.title}
          </div>
          <div className="flex gap-x-1">
            <div className="text-[#e21b70] font-semibold text-sm">
              Free delivery
            </div>
            <div className="text-sm font-semibold line-through ">Tk 40</div>
          </div>
          <div className="text-sm font-semibold text-white">{shopDetails?.ratting}.0 (200+)</div>
        </div>
      </div>

      <div className="rounded flex px-3 py-3 mt-10 overflow-x-auto shadow-lg gap-x-10 bg-[#0b1120]">
        {
          category.map((item) => (
            <div key={item.id} className="text-white whitespace-nowrap">
              {item.title}
            </div>
          ))
        }
      </div>

      <div className="my-10">
        <div className="text-xl font-semibold">🔥Popular</div>
        <div className="mt-1 text-sm font-normal">Most ordered right now.</div>
      </div>

      <div className="grid w-full grid-cols-12 gap-x-7">
        <div className="flex flex-col col-span-8 gap-y-5">
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
        </div>

        <div className="w-full col-span-4 font-sans">
          <h1 className="text-2xl font-extrabold text-white">Your Cart</h1>
          <div className="bg-white rounded-md px-4 py-6 h-max shadow-[0_2px_12px_-3px_rgba(6,81,237,0.3)]">
            <ul className="space-y-4 text-gray-800">
              <li className="flex flex-wrap gap-4 text-sm">
                Subtotal <span className="ml-auto font-bold">$200.00</span>
              </li>
              <li className="flex flex-wrap gap-4 text-sm">
                Shipping <span className="ml-auto font-bold">$2.00</span>
              </li>
              <li className="flex flex-wrap gap-4 text-sm">
                Tax <span className="ml-auto font-bold">$4.00</span>
              </li>
              <hr className="border-gray-300" />
              <li className="flex flex-wrap gap-4 text-sm font-bold">
                Total <span className="ml-auto">$206.00</span>
              </li>
            </ul>

            <div className="mt-8 space-y-2">
              <button
                type="button"
                className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-gray-800 hover:bg-gray-900 text-white rounded-md"
              >
                Buy Now
              </button>
              <button
                type="button"
                className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-transparent hover:bg-gray-100 text-gray-800 border border-gray-300 rounded-md"
              >
                Continue Shopping{" "}
              </button>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <img
                src="https://readymadeui.com/images/master.webp"
                alt="card1"
                className="object-contain w-10"
              />
              <img
                src="https://readymadeui.com/images/visa.webp"
                alt="card2"
                className="object-contain w-10"
              />
              <img
                src="https://readymadeui.com/images/american-express.webp"
                alt="card3"
                className="object-contain w-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
