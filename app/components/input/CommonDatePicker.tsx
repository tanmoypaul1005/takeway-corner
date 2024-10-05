

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
