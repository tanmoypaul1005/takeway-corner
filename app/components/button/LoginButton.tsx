import React from "react";

const LoginButton = ({ login = false,title="" }) => {
  return (
    <button className="flex items-center justify-center w-full py-3 font-semibold tracking-wide text-gray-100 transition-all duration-300 ease-in-out bg-indigo-500 rounded-lg hover:bg-indigo-700 focus:shadow-outline focus:outline-none">
      {!login && (
        <svg
          className="w-6 h-6 -ml-2"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
          <circle cx="8.5" cy="7" r="4" />
          <path d="M20 8v6M23 11h-6" />
        </svg>
      )}
      <span className="ml-3">{title}</span>
    </button>
  );
};

export default LoginButton;
