import { useState } from "react";
import Navbar from "./layout/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Event from "./pages/Event";
import Login from "./pages/Login";
import Member from "./pages/Member";
import Address from "./pages/Address";
import "./App.scss";
import DetailFilmPage from "./pages/DetailFIlmPage";

function App() {
  return (
    <>
      <div className="w-[100%]  h-[100vh]">
        <Navbar />

        <div className="w-[100%] flex justify-center items-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/event" element={<Event />} />
            <Route path="/login" element={<Login />} />
            <Route path="/address" element={<Address />} />
            <Route path="/member" element={<Member />} />
            <Route path="/detail" element={<DetailFilmPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;