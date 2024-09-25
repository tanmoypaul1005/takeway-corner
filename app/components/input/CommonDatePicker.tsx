// "use client";
// import React from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { iCalender } from "../../../util/imageImports";
// import Image from "next/image";

// interface CommonDatePickerProps {
//   value: Date | null;
//   onChange: (date: Date | null) => void;
// }

// const CommonDatePicker: React.FC<CommonDatePickerProps> = ({
//   value = null,
//   onChange = () => {},
// }) => {
//   return (
//     <div className="">
//       <div className="block mb-2 font-medium text-white">Date</div>
//       <div className="relative w-full">
//         <DatePicker
//           selected={value}
//           onChange={onChange}
//           placeholderText="Select Dates"
//           dateFormat="MM/dd/yyyy"
//           className="pr-4 pl-[37px] max-w-[53vh] min-w-[53vh] py-3 text-gray-700 border border-gray-300 rounded-md focus:outline-none"
//         />
//         <div className="absolute left-3.5 top-[15px]">
//           <Image src={iCalender} alt="Calendar icon" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CommonDatePicker;

"use client";
"use client";
import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

interface DateValue {
  startDate: any;
  endDate: any;
}

const CommonDatePicker = () => {
  const [value, setValue] = useState<DateValue>({
    startDate: null,
    endDate: null,
  });

  return (
    <div className="">
      <label className="block mb-2 font-medium text-white">Date</label>
      <div>
        <Datepicker
          inputClassName="w-full rounded-md focus:ring-0 font-normal bg-white  text-black py-3.5 pl-4"
          useRange={false}
          asSingle={true}
          value={value}
          onChange={(newValue: DateValue) => setValue(newValue)}
        />
      </div>
    </div>
  );
};

export default CommonDatePicker;
