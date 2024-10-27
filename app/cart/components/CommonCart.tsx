import React from "react";

const CommonCart = () => {
  return (
    <div className="grid items-start grid-cols-3 gap-4">
      <div className="flex items-start col-span-2 gap-4">
        <div className="p-2 bg-gray-100 rounded-md w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0">
          <img
            src="https://readymadeui.com/images/product14.webp"
            className="object-contain w-full h-full"
          />
        </div>

        <div className="flex flex-col">
          <h3 className="text-base font-bold text-white">Velvet Sneaker</h3>
          <p className="text-xs font-semibold text-gray-500 mt-0.5">Size: MD</p>

          <button
            type="button"
            className="flex items-center gap-1 mt-6 text-xs font-semibold text-red-500 shrink-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline w-4 fill-current"
              viewBox="0 0 24 24"
            >
              <path
                d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                data-original="#000000"
              ></path>
              <path
                d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                data-original="#000000"
              ></path>
            </svg>
            REMOVE
          </button>
        </div>
      </div>

      <div className="ml-auto">
        <h4 className="text-lg font-bold text-white max-sm:text-base">
          $20.00
        </h4>

        <button
          type="button"
          className="mt-6 flex items-center px-3 py-1.5 border border-gray-300 text-white text-xs outline-none bg-transparent rounded-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-2.5 fill-current"
            viewBox="0 0 124 124"
          >
            <path
              d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
              data-original="#000000"
            ></path>
          </svg>

          <span className="mx-3 font-bold">2</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-2.5 fill-current"
            viewBox="0 0 42 42"
          >
            <path
              d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
              data-original="#000000"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CommonCart;
