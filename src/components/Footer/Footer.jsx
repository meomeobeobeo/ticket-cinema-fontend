import { Divider, Typography } from "antd";
import React from "react";
import { BsTwitter, BsFacebook } from "react-icons/bs";
import { SiGmail, SiZalo } from "react-icons/si";

const Footer = () => {
  return (
    <div className="w-[100%] py-8 flex flex-col justify-center items-start">
      <Typography className="text-lg font-semibold text-slate-100">
        MEO CINEMA
      </Typography>
      <div className="w-full h-[2px] bg-slate-100 my-3 "></div>
      <div className="w-full">
        <Typography className="text-lg font-semibold text-slate-100">
          Kết nối với chúng tôi
        </Typography>
        <div className="flex flex-row gap-8 my-2">
          <BsFacebook className="text-xl text-slate-100 hover:cursor-pointer " />
          <SiGmail className="text-xl text-slate-100 hover:cursor-pointer " />
          <SiZalo className="text-xl text-slate-100 hover:cursor-pointer " />
          <BsTwitter className="text-xl text-slate-100 hover:cursor-pointer " />
        </div>
      </div>
      <div className="w-full h-[2px] bg-slate-100 my-3 "></div>

      <div className="w-full flex justify-center items-center">
        <Typography className="text-lg font-semibold text-slate-100">
          MEOCINE PRODUCTION
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
