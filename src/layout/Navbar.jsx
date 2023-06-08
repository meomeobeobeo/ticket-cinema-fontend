import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Space, Input, Dropdown } from "antd";
import { Link } from "react-router-dom";
import { useSelector , useDispatch } from "react-redux";
import { AiOutlineLogin } from "react-icons/ai";
import {BiUserCircle } from 'react-icons/bi'
import {RiLogoutBoxFill} from 'react-icons/ri'
import { logout } from "../redux/authSlice";

const Navbar = () => {
  
  const userData = useSelector((state) => state.auth.authData?.user);
  const dispatch = useDispatch()
  console.log(userData);
  const items = [
    {
      key: "1",
      label: (
        <div target="_blank" className="flex items-center">
          <BiUserCircle size={24} className="m-1"/>
          <span> User profile</span>
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div onClick={()=>{
          dispatch(logout())
        }} target="_blank" className="flex items-center">
          <RiLogoutBoxFill size={24} className='m-1' />
          <span>Log out</span>
        </div>
      ),
    },
  ];

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
        {userData ? (
          <Dropdown
            arrow
            menu={{
              items,
            }}
            placement="bottomRight"
          >
            <Avatar
              size={48}
              src="src\assets\image\pic1.jpg"
              icon={<UserOutlined />}
            />
          </Dropdown>
        ) : (
          <Link to={"/login"}>
            <AiOutlineLogin size={32} />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
