import React from 'react'

const CommonButton = ({btnLevel=""}) => {
    return (
        <button className="bg-[#007E85] h-fit text-[18px] font-semibold text-white rounded-md px-8 py-2.5 w-fit">
            {btnLevel}
        </button>
    )
}

export default CommonButton