import React from "react";
import Button from "./Button";
function Newsletter() {
  return (
    <div className="bg-white p-4 rounded-lg flex flex-col gap-2">
      <p className="text-lg font-bold">Newsletter</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
        unde!
      </p>
      <div className="grid grid-cols-[2fr_1fr] gap-2">
        <input
          className="border-grey border rounded-lg px-2 outline-none"
          type="text"
          placeholder="Enter your email"
        />
        <Button> Subscribe </Button>
      </div>
    </div>
  );
}

export default Newsletter;
