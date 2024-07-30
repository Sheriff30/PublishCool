import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

function News() {
  return (
    <div className="bg-white p-4 rounded-lg flex flex-col gap-4">
      <div className="flex justify-between items-center ">
        <p className="text-lg font-bold">News</p>
        <div className="bg-grey py-1 px-2 flex gap-2 cursor-pointer rounded-lg items-center justify-center text-primary font-semibold">
          <p>See All</p>
          <FaLongArrowAltRight />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <p>6 June 2024</p>
          <p className="font-bold">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, eum.{" "}
          </p>
        </div>
        <div className="flex flex-col">
          <p>6 June 2024</p>
          <p className="font-bold">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, eum.{" "}
          </p>
        </div>
        <div className="flex flex-col">
          <p>6 June 2024</p>
          <p className="font-bold">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, eum.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default News;
