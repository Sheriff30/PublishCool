import React from "react";
import { NavLink } from "react-router-dom";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const social = [
    {
      icon: <RiInstagramFill className="text-grey" />,
      href: "/instagram",
      key: "Instagram-icon",
    },
    {
      icon: <FaLinkedinIn className="text-grey" />,
      href: "/linkedIn",
      key: "linkedIn-icon",
    },
    {
      icon: <FaFacebookF className="text-grey" />,
      href: "/facebook",
      key: "facebook-icon",
    },

    {
      icon: <FaTwitter className="text-grey" />,
      href: "/twitter",
      key: "twitter-icon",
    },
  ];
  return (
    <div className="bg-darkblue text-white flex justify-center items-center">
      <div className="bg-darkblue2 text-center flex flex-col gap-4 py-14 px-5 md:px-24">
        <p className="text-2xl font-bold">
          <span>App</span>
          <span className="text-primary">Lab</span>
        </p>
        <div className="flex gap-4 flex-col md:flex-row">
          <NavLink>Home</NavLink>
          <NavLink>KeyFeatures</NavLink>
          <NavLink>Pricing</NavLink>
          <NavLink>Testiminal</NavLink>
          <NavLink>FAQ</NavLink>
        </div>
        <div>
          <div className="flex justify-center items-center gap-2">
            {social.map((link) => (
              <NavLink
                to={link.href}
                key={link.key}
                className="b p-1 rounded-full"
              >
                {link.icon}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
