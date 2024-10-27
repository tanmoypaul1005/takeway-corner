"use client"
import React from "react";
import AddressList from "./components/AddressList";
import CommonInput from "@app/components/input/CommonInput";

const Checkout = () => {
  return (
    <div>
      <div className="flex flex-col items-center px-5 py-4 rounded-md bg-slate-800 sm:flex-row">
        <a href="#" className="text-2xl font-bold text-white">
          sneekpeeks
        </a>
        <div className="py-2 mt-4 text-xs sm:mt-0 sm:ml-auto sm:text-base">
          <div className="relative">
            <ul className="relative flex items-center justify-between w-full space-x-2 sm:space-x-4">
              <li className="flex items-center space-x-3 text-left sm:space-x-4">
                <a
                  className="flex items-center justify-center w-6 h-6 text-xs font-semibold rounded-full bg-emerald-200 text-emerald-700"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </a>
                <span className="font-semibold text-white">Shop</span>
              </li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <li className="flex items-center space-x-3 text-left sm:space-x-4">
                <a
                  className="flex items-center justify-center w-6 h-6 text-xs font-semibold text-white bg-gray-600 rounded-full ring ring-gray-600 ring-offset-2"
                  href="#"
                >
                  2
                </a>
                <span className="font-semibold text-white">Shipping</span>
              </li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <li className="flex items-center space-x-3 text-left sm:space-x-4">
                <a
                  className="flex items-center justify-center w-6 h-6 text-xs font-semibold text-white bg-gray-400 rounded-full"
                  href="#"
                >
                  3
                </a>
                <span className="font-semibold text-white">Payment</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
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
          <div className="">
            <label className="block mt-4 mb-2 text-sm font-medium">Email</label>

            <CommonInput placeholder="your.email@gmail.com"/>
            <label className="block mt-4 mb-2 text-sm font-medium">
              Card Holder
            </label>
      
            <CommonInput placeholder="Your full name here"/>
        
            

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
