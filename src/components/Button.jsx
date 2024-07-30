/* eslint-disable react/prop-types */
import React from "react";
import { NavLink } from "react-router-dom";

function Button({ variation = "blue", children, href, onClick }) {
  let type;
  if (variation === "blue") {
    type = "bg-primary text-white border-white";
  }
  if (variation === "white") {
    type = "bg-white border-primary";
  }
  return (
    <NavLink
      onClick={onClick}
      to={href}
      className={` py-2 cursor-pointer   border px-4 flex justify-center  items-center gap-2 font-bold rounded-lg text-primary ${type} `}
    >
      {children}{" "}
    </NavLink>
  );
}

export default Button;
