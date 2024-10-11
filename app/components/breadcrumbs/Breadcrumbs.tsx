import React from "react";

const Breadcrumbs = () => {
  const list = [
    {
      title: "Dhaka",
    },
    {
      title: "Restaurant list",
    },
    {
      title: "Kacchi Bhai - Gulshan",
    },
  ];
  return (
    <div className="flex mb-10 font-semibold gap-x-2 text-[18px] leading-5">
      {list.map((item, index) => {
        return (
          <div className="" key={index}>
            <span className="text-white border-b-[1px]">{item.title}</span>
            {index < list.length - 1 && (
              <span className="text-white"> / </span>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
