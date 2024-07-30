import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoStar } from "react-icons/io5";

function FeaturedPublishers() {
  return (
    <div className="bg-white p-4 rounded-lg flex flex-col gap-4">
      <div className="flex justify-between items-center ">
        <p className="text-lg font-bold">Featured Publishers</p>
        <div className="bg-grey py-1 px-2 flex gap-2 cursor-pointer rounded-lg items-center justify-center text-primary font-semibold">
          <p>See All</p>
          <FaLongArrowAltRight />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <div className="max-w-[80px] rounded-lg overflow-hidden">
            <img src="/public/Dummy1.jpg" />
          </div>
          <div className="flex flex-col">
            <p className="font-bold">Good Print</p>
            <p className="flex items-center gap-2">
              <IoStar className="text-yellow-400" />{" "}
              <span> 4.5 (30 Journals)</span>
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="max-w-[80px] rounded-lg overflow-hidden">
            <img src="/public/Dummy1.jpg" />
          </div>
          <div className="flex flex-col">
            <p className="font-bold">Good Print</p>
            <p className="flex items-center gap-2">
              <IoStar className="text-yellow-400" />{" "}
              <span> 4.5 (30 Journals)</span>
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="max-w-[80px] rounded-lg overflow-hidden">
            <img src="/public/Dummy1.jpg" />
          </div>
          <div className="flex flex-col">
            <p className="font-bold">Good Print</p>
            <p className="flex items-center gap-2">
              <IoStar className="text-yellow-400" />{" "}
              <span> 4.5 (30 Journals)</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedPublishers;
