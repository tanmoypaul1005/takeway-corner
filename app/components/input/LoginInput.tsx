import React from "react";

const LoginInput = ({
  required = false,
  value = "",
  placeholder = "",
  type = "text",
  onChange = () => {},
}) => {
  return (
    <input
      value={value}
      required={required}
      placeholder={placeholder}
      onChange={onChange}
      className="w-full px-4 py-3 text-sm font-medium text-black placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:bg-white"
      type={type}
    />
  );
};

export default LoginInput;
