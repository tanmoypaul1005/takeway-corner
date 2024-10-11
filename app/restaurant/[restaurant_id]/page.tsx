import Breadcrumbs from "@app/components/breadcrumbs/Breadcrumbs";
import Image from "next/image";
import React from "react";

const Restaurant = () => {
  return (
    <div className="px-10 pb-10">
      <Breadcrumbs />
      <div className="flex gap-x-3 border-b-[1px] pb-5">
        <Image
          className="rounded-md"
          width={150}
          height={150}
          src="https://images.deliveryhero.io/image/fd-bd/bd-logos/cw0gk-logo.jpg"
          alt=""
        />
        <div className="flex flex-col justify-center">
          <div className="text-2xl font-bold text-white">
            Kacchi Bhai - Gulshan
          </div>
          <div className="flex gap-x-1">
            <div className="text-[#e21b70] font-semibold text-sm">
              Free delivery
            </div>
            <div className="text-sm font-semibold line-through ">Tk 40</div>
          </div>
          <div className="text-sm font-semibold text-white">4.5 (200+)</div>
        </div>
      </div>

      <div className="my-10">
        <div className="text-xl font-semibold">🔥Popular</div>
        <div className="mt-1 text-sm font-normal">Most ordered right now.</div>
      </div>

      <div className="flex justify-between">
        <div className="flex flex-col gap-y-5">
          <div className="flex justify-between border-[1px] rounded  p-3">
            <div className="">
              <div className="text-xl font-bold">Basmati kacchi - 1:1</div>
              <div className="text-base font-medium">TK 300</div>
              <div>
                1:1 - Popular dish prepared of slow-cooked aromatic basmati rice
                layered with potatoes, marinated mutton pcs, in a delicate blend
                of whole spices
              </div>
            </div>
            <div>
              <Image
                className="rounded-md"
                width={200}
                height={200}
                src="https://images.deliveryhero.io/image/fd-bd/Products/2046151.jpg?width=%s"
                alt=""
              />
            </div>
          </div>

          <div className=" flex justify-between border-[1px] rounded  p-3">
            <div className="">
              <div className="text-xl font-bold">Basmati kacchi - 1:1</div>
              <div className="text-base font-medium">TK 300</div>
              <div>
                1:1 - Popular dish prepared of slow-cooked aromatic basmati rice
                layered with potatoes, marinated mutton pcs, in a delicate blend
                of whole spices
              </div>
            </div>
            <div>
              <Image
                className="rounded-md"
                width={200}
                height={200}
                src="https://images.deliveryhero.io/image/fd-bd/Products/2046151.jpg?width=%s"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="w-[500px]"></div>
      </div>
    </div>
  );
};

export default Restaurant;
