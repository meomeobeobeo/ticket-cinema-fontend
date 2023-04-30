import { useState } from "react";
import Navbar from "./layout/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Event from "./pages/Event";
import Login from "./pages/Login";
import Member from "./pages/Member";
import Address from "./pages/Address";
import "./App.scss";

function App() {
  return (
    <>
      <div className="w-[100%]  h-[100vh]">
        <Navbar />

        <div className="w-[100%]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/event" element={<Event />} />
            <Route path="/login" element={<Login />} />
            <Route path="/address" element={<Address />} />
            <Route path="/member" element={<Member />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
