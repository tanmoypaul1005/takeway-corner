"use client";
import React from "react";
import AddressList from "./components/AddressList";
import CommonInput from "@app/components/input/CommonInput";
import AutoBreadcrumbs from "@app/components/breadcrumbs/AutoBreadcrumbs";

const Checkout = () => {
  const breadcrumbsItem = [
    { title: "Shop", status: "complete" },
    { title: "Cart", status: "complete" },
    { title: "Checkout", status: "active" },
  ];

  return (
    <div>
      <AutoBreadcrumbs title="Checkout" items={breadcrumbsItem} />
      <div className="grid lg:grid-cols-2">
        <div className="px-4 pt-8">
          <p className="text-xl font-medium">Order Summary</p>
          <p className="text- gray-400">
            Check your items. And select a suitable shipping method.
          </p>
          <AddressList />
        </div>
        <div className="px-4 pt-8 mt-10 text -gray-50 lg:mt-0">
          <p className="text-xl font-medium">Payment Details</p>
          <p className="text-gray-400">
            Complete your order by providing your payment details.
          </p>
          <div className="mt-2">
            <CommonInput level="Email" placeholder="your.email@gmail.com" />

            <>
              <label className="block mt-4 mb-2 text-sm font-medium">
                Card Holder
              </label>
            </>
            <CommonInput placeholder="Your full name here" />

            <div className="py-2 mt-6 border-t border-b">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-white">Subtotal</p>
                <p className="font-semibold text-white">$399.00</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-white">Shipping</p>
                <p className="font-semibold text-white">$8.00</p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-6">
              <p className="text-sm font-medium text-white">Total</p>
              <p className="text-2xl font-semibold text-white">$408.00</p>
            </div>
          </div>
          <button className="w-full px-6 py-3 mt-4 mb-8 font-medium text-white bg-gray-900 rounded-md">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
