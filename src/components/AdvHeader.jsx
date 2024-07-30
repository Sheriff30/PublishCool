import React from "react";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";
import { Link } from "react-router-dom";
function AdvHeader() {
  const AdvNav = [
    {
      icon: <RiInstagramFill className="text-primary" />,
      href: "/Instagram",
      key: "Instagram-icon",
    },
    {
      icon: <FaFacebookF className="text-primary" />,
      href: "/facebook",
      key: "facebook-icon",
    },
    {
      icon: <AiFillYoutube className="text-primary" />,
      href: "/youtube",
      key: "youtube-icon",
    },
    {
      icon: <FaWhatsapp className="text-primary" />,
      href: "/whatsapp",
      key: "whatsapp-icon",
    },
    {
      icon: <FaTwitter className="text-primary" />,
      href: "/twitter",
      key: "twitter-icon",
    },
    {
      icon: <FaSnapchatGhost className="text-primary" />,
      href: "/snapchat",
      key: "snapchat-icon",
    },
  ];

  return (
    <div className="w-screen bg-primary px-4">
      <div className="max-w-[1440px] mx-auto py-2 flex flex-col gap-2 md:flex-row md:gap-0 justify-between items-center">
        <p className="text-white">For Publishers | Advertise</p>
        <div className="flex justify-between items-center gap-2">
          {AdvNav.map((link) => (
            <Link
              to={link.href}
              key={link.key}
              className="bg-white p-1 rounded-full"
            >
              {link.icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdvHeader;
