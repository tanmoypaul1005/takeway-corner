import React from 'react';

interface CommonButtonProps {
  btnLevel?: string;
  onClick?: () => void;
}

const CommonButton: React.FC<CommonButtonProps> = ({ btnLevel = "", onClick = () => {} }) => {
  return (
    <button
      className="cursor-pointer outline-none focus:outline-none bg-[#007E85] h-fit text-[18px] font-semibold text-white rounded-md px-8 py-2.5 w-fit"
      onClick={onClick}
    >
      {btnLevel}
    </button>
  );
};

export default CommonButton;