import React from "react";

const AutoBreadcrumbs = ({ items,title="" }) => {
  return (
    <div className="flex flex-col items-center px-5 py-4 rounded-md bg-slate-800 sm:flex-row">
      <a href="#" className="text-2xl font-bold text-white">
        {title}
      </a>
      <div className="py-2 mt-4 text-xs sm:mt-0 sm:ml-auto sm:text-base">
        <div className="relative">
          <ul className="relative flex items-center justify-between w-full space-x-2 sm:space-x-4">
            {items.map((item, index) => (
              <>
                {item?.status === "complete" && (
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
                    <span className="font-semibold text-white">{item?.title}</span>
                  </li>
                )}

                {item?.status === "active" && (
                  <li className="flex items-center space-x-3 text-left sm:space-x-4">
                    <a
                      className="flex items-center justify-center w-6 h-6 text-xs font-semibold text-white bg-gray-600 rounded-full ring ring-gray-600 ring-offset-2"
                      href="#"
                    >
                      2
                    </a>
                    <span className="font-semibold text-white">{item?.title}</span>
                  </li>
                )}
                
                {item?.status === "pending" && (
                  <li className="flex items-center space-x-3 text-left sm:space-x-4">
                    <a
                      className="flex items-center justify-center w-6 h-6 text-xs font-semibold text-white bg-gray-400 rounded-full"
                      href="#"
                    >
                      3
                    </a>
                    <span className="font-semibold text-white">{item?.title}</span>
                  </li>
                )}

                {index !== items.length - 1 && (
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
                )}
              </>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AutoBreadcrumbs;
