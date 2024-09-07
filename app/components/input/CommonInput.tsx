import React from "react";

interface CommonInputProps {
  level?: string;
  type?: string;
  placeHolder?: string;
  required?: boolean;
}

const CommonInput: React.FC<CommonInputProps> = ({
  level = "",
  type = "text",
  placeHolder = "",
  required = false,
}) => {
  return (
    <div className="">
      <label className="block mb-2 font-medium text-white">
        {level} {required &&<>*</>}
      </label>
      <input
        type={type}
        placeholder={placeHolder}
        className="w-full text-black p-2 border rounded-lg sm:p-3"
        required={required}
      />
    </div>
  );
};

export default CommonInput;
