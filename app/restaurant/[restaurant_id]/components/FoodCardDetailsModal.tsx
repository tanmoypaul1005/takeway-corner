import CommonModal from "@app/components/modal/ComonModal";
import Image from "next/image";
import React from "react";

const FoodCardDetailsModal = ({ isModal, setModal, selectedItem }) => {
  return (
    <div>
      <CommonModal
        open={isModal}
        setOpen={setModal}
        title="Food Details"
        content={
          <div className="mt-5">
            <Image
              className="w-full rounded-md h-80"
              width={800}
              height={800}
              src={selectedItem?.image}
              alt=""
            />
          </div>
        }
      />
    </div>
  );
};

export default FoodCardDetailsModal;
