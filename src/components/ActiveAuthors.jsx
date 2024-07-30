import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

function ActiveAuthors() {
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
            <p className="font-bold">Dr. James Smith</p>
            <p className="flex items-center gap-2">
              <span>Oxford Universiry</span>
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="max-w-[80px] rounded-lg overflow-hidden">
            <img src="/public/Dummy1.jpg" />
          </div>
          <div className="flex flex-col">
            <p className="font-bold">Dr. James Smith</p>
            <p className="flex items-center gap-2">
              <span>Oxford Universiry</span>
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="max-w-[80px] rounded-lg overflow-hidden">
            <img src="/public/Dummy1.jpg" />
          </div>
          <div className="flex flex-col">
            <p className="font-bold">Dr. James Smith</p>
            <p className="flex items-center gap-2">
              <span>Oxford Universiry</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActiveAuthors;
