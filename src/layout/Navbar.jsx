import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Space, Input } from "antd";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="fixed h-[60px] top-0 left-0 w-full bg-[#ddd] flex items-center z-50">
      {/* control */}
      <div className="flex flex-row h-[60px] ml-4">
        <Link
          className="px-8 justify-center flex items-center hover:bg-[#ccc] cursor-pointer rounded-lg"
          to="/"
        >
          Movie
        </Link>

        <Link
          to="/address"
          className="px-8 justify-center flex items-center hover:bg-[#ccc] cursor-pointer rounded-lg"
        >
          Address theater
        </Link>
        <Link
          to="/member"
          className="px-8 justify-center flex items-center hover:bg-[#ccc] cursor-pointer rounded-lg"
        >
          Member
        </Link>
        <Link
          className="px-8 justify-center flex items-center hover:bg-[#ccc] cursor-pointer rounded-lg"
          to="/event"
        >
          Event
        </Link>
        {/* search input */}
        <div className="px-8 justify-center flex items-center rounded-lg w-[320px]">
          <Input className="w-full" placeholder="Search film" />
        </div>
      </div>

      {/* user information */}
      <div className="right-5 absolute">
        <Avatar size={48} icon={<UserOutlined />} />
      </div>
    </div>
  );
};

export default Navbar;
