import React from "react";
import Button from "../components/Button";
import { FaLongArrowAltRight } from "react-icons/fa";

function CtaCard() {
  return (
    <div className=" bg-pastelshadeblue rounded-lg p-4 md:py-6 md:px-12 flex flex-col  items-start ">
      <p className="mb-1 text-2xl font-bold">Health and beauty (AD)</p>
      <p className="mb-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <Button variation="white">
        <p> Go to category</p>
        <FaLongArrowAltRight />
      </Button>
    </div>
  );
}

export default CtaCard;
