import { Input, Typography } from "antd";
import React, { useState } from "react";
import * as api from "../api/index";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authSlice } from "../redux/authSlice";
const Auth = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = async () => {
    let req = await toast.promise(api.login({ formData: formData }), {
      pending: "Login pending",
      success: "Login success",
      error: "Login failed",
    });
    if (req.data?.user) {
      localStorage.setItem(
        "profile",
        JSON.stringify({
          user: req.data.user,
          token: req.data.token,
        })
      );

      dispatch(
        authSlice.actions.setUserData({
          user: req.data.user,
          token: req.data.token,
        })
      );
      navigate("/", { replace: true });
    }

    setFormData({});
  };
  const handleSignUp = async () => {
  
    let req = await toast.promise(api.signUp({ formData: formData }), {
      pending: "Signup pending",
      success: "Signup success",
      error: "Signup failed",
    });
    setIsSignIn(true);

    setFormData({});
  };

  

  return (
    <div className="w-full bg-[#04192e] flex justify-center items-center mt-[60px] h-[100vh]">
      <div className="flex flex-col w-[500px] bg-white justify-center items-center rounded-xl py-6 gap-2">
        <div className="w-full flex justify-center items-center my-8">
          {isSignIn ? (
            <span className="text-2xl font-semibold">Sign in</span>
          ) : (
            <span className="text-2xl font-semibold">Sign up</span>
          )}
        </div>

        {isSignIn ? (
          <div className="flex flex-col w-[80%] my-8 gap-4">
            <div className="flex w-full flex-col gap-2">
              <span className="text-sm font-semibold">Email address</span>
              <Input
                value={formData?.email || ""}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  });
                }}
                placeholder="Enter email"
                className="w-full"
              />
            </div>
            <div className="flex w-full flex-col gap-2">
              <span className="text-sm font-semibold">Password</span>
              <Input
                value={formData?.password || ""}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    password: e.target.value,
                  });
                }}
                type="password"
                placeholder="Enter password"
                className="w-full"
              />
            </div>
            <span
              onClick={() => {
                setIsSignIn(false);
                setFormData({});
              }}
              className="text-black text-sm"
            >
              if you don't have account{" "}
              <span className="cursor-pointer text-red-400 mx-3">Sign up</span>
            </span>
          </div>
        ) : (
          <div className="flex flex-col w-[80%] my-8 gap-4">
            <div className="flex w-full flex-col gap-2">
              <span className="text-sm font-semibold">Name</span>
              <Input
                value={formData?.name || ""}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    name: e.target.value,
                  });
                }}
                placeholder="Enter name"
                className="w-full"
              />
            </div>
            <div className="flex w-full flex-col gap-2">
              <span className="text-sm font-semibold">Email address</span>
              <Input
                value={formData?.email || ""}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  });
                }}
                placeholder="Enter email"
                className="w-full"
              />
            </div>
            <div className="flex w-full flex-col gap-2">
              <span className="text-sm font-semibold">Password</span>
              <Input
                value={formData?.password || ""}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    password: e.target.value,
                  });
                }}
                type="password"
                placeholder="Enter password"
                className="w-full"
              />
            </div>
            <span className="text-black text-sm">
              if you have account{" "}
              <span
                onClick={() => {
                  setIsSignIn(true);
                  setFormData({});
                }}
                className="cursor-pointer text-red-400 mx-3"
              >
                Sign in
              </span>
            </span>
          </div>
        )}

        {/* button submit form  */}
        {isSignIn ? (
          <div
            onClick={handleLogin}
            className="w-[80%] flex justify-center items-center gap-2 py-4 bg-blue-500 rounded-lg cursor-pointer hover:opacity-50"
          >
            <span className="text-white font-semibold text-base">Login</span>
          </div>
        ) : (
          <div
            onClick={handleSignUp}
            className="w-[80%] flex justify-center items-center gap-2 py-4 bg-blue-500 rounded-lg cursor-pointer hover:opacity-50"
          >
            <span className="text-white font-semibold text-base">Regist</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Auth;
