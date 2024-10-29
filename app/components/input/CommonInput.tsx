import React from "react";

interface CommonInputProps {
  level?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CommonInput: React.FC<CommonInputProps> = ({
  level = "",
  type = "text",
  placeholder = "",
  required = false,
  name = "",
  value = "",
  onChange = () => {},
}) => {
  return (
    <div className="">
      <label className="block mb-2 font-medium text-white">
        {level} {required &&<>*</>}
      </label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        className="w-full p-2 text-black border rounded-lg sm:p-3"
        required={required}
      />
    </div>
  );
};

export default CommonInput;
