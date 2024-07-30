import React from "react";
import Button from "./Button";
import { FaLongArrowAltRight } from "react-icons/fa";

function GetStartedCard() {
  return (
    <div className="bg-primary rounded-lg text-center text-white  grid gap-4 py-4 px-8 lg:flex lg:justify-between lg:items-center">
      <div className="flex flex-col  ">
        <p className="text-4xl font-bold">230 +</p>
        <p className="font-bold">Publisher</p>
      </div>
      <div className="w-full h-[2px] bg-white lg:h-full lg:w-[2px]"></div>
      <div className="flex flex-col ">
        <p className="text-4xl font-bold">45000 +</p>
        <p className="font-bold">Publisher</p>
      </div>
      <div className="w-full h-[2px] bg-white lg:h-full lg:w-[2px]"></div>

      <div className="flex flex-col ">
        <p className="text-4xl font-bold">53000 +</p>
        <p className="font-bold">Publisher</p>
      </div>
      <div className="w-full h-[2px] bg-white lg:h-full lg:w-[2px]"></div>

      <div className="flex flex-col ">
        <p className="text-4xl font-bold">27000 +</p>
        <p className="font-bold">Publisher</p>
      </div>
      <div className="uppercase font-bold">
        <p>fast & easy</p>
        <p className="mb-2">journal publishing</p>
        <Button variation="blue">
          {" "}
          get started <FaLongArrowAltRight />{" "}
        </Button>
      </div>
    </div>
  );
}

export default GetStartedCard;
