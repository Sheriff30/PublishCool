import React from "react";
import AdvHeader from "./AdvHeader";
import MainHeader from "./MainHeader";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

function Applayout() {
  return (
    <div className=" min-h-screen grid grid-rows-[auto_auto_1fr] overflow-x-hidden">
      <AdvHeader />
      <MainHeader />
      <div className="w-screen bg-verylightblue py-4 px-4">
        <div className="max-w-[1440px] mx-auto">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Applayout;
