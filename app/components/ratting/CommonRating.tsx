import Rating from "@mui/material/Rating";
import React from "react";

interface CommonRatingProps {
  value?: number;
  size?: "small" | "medium" | "large" | "";
}

const CommonRating: React.FC<CommonRatingProps> = ({ value = 0, size = "" }) => {
  return (
    <div className="flex items-center space-x-1">
      <span className="rounded bg-yellow-400 px-2.5 flex justify-center items-center max-h-[22px] min-h-[22px] text-xs font-semibold">
        {value}.0
      </span>
      <Rating
        sx={{
          // "& .MuiRating-iconFilled": {
          //   color: "#FFD700" // Change this to your desired color for filled stars
          // },
          "& .MuiRating-iconEmpty": {
            color: "#ffff", // Change this to your desired color for empty stars
          },
        }}
        // size={size}
        name="read-only"
        value={value}
        readOnly
      />
    </div>
  );
};

export default CommonRating;