import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import { IoIosMenu } from "react-icons/io";

function MainHeader() {
  const [isOpened, setIsOpened] = useState(false);

  const mainNav = [
    {
      title: "Home",
      href: "/home",
    },
    {
      title: "Journals",
      href: "/journals",
    },
    {
      title: "Publishers",
      href: "/publishers",
    },
    {
      title: "Help",
      href: "/help",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ];

  function handleMenu() {
    setIsOpened((el) => !el);
  }

  return (
    <div className="relative">
      <div className="w-screen  px-4 py-2 lg:py-0 ">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-20">
            <div className="font-bold text-xl">PublishCool</div>
            <div className="hidden lg:flex gap-4 items-center  ">
              {mainNav.map((link) => (
                <NavLink
                  className={({ isActive }) =>
                    ` py-4 px-2 border-b-2 font-semibold text-gray-500  ${
                      isActive ? " border-primary" : " border-transparent"
                    }`
                  }
                  key={link.title}
                  to={link.href}
                >
                  {link.title}
                </NavLink>
              ))}
            </div>
          </div>

          <div onClick={handleMenu} className="lg:hidden">
            <IoIosMenu className="text-2xl" />
          </div>

          <div className="hidden lg:flex gap-4 ">
            <Button variation="white" href="/login">
              {" "}
              Login{" "}
            </Button>
            <Button href="/register"> Register </Button>
          </div>
        </div>
      </div>
      {isOpened && (
        <div className="absolute w-screen h-auto py-4 bg-grey z-10  lg:hidden">
          <div className="flex-col flex items-center justify-center mb-4">
            {mainNav.map((link) => (
              <NavLink
                className={({ isActive }) =>
                  ` py-2 px-2 border-b-2 font-semibold text-darkblue  ${
                    isActive ? " border-primary" : " border-transparent"
                  }`
                }
                key={link.title}
                to={link.href}
                onClick={handleMenu}
              >
                {link.title}
              </NavLink>
            ))}
          </div>
          <div className="flex flex-row items-center justify-center gap-2">
            <Button variation="white" href="/login" onClick={handleMenu}>
              {" "}
              Login{" "}
            </Button>
            <Button href="/register" onClick={handleMenu}>
              {" "}
              Register{" "}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MainHeader;
