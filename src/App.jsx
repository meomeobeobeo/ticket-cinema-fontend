import { useState } from "react";
import Navbar from "./layout/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Event from './pages/event/Event'

import Member from "./pages/Member";
import Address from "./pages/Address";
import "./App.scss";
import DetailFilmPage from "./pages/DetailFIlmPage";
import Auth from "./pages/Auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUserData } from "./redux/authSlice";
import * as api from './api/index'
import { filmsSlice } from "./redux/FilmsSlice";
function App() {
  // get user data in local storage
  const dispatch = useDispatch();
  const [isLoading ,setIsLoading] = useState(false)
 


  const loadingData = async ()=>{
    let data = await api.getFilmInformation()
    
    dispatch(filmsSlice.actions.saveFilmsState(data.data))


  }

  useEffect(() => {
    const authData = JSON.parse(localStorage.getItem("profile"));
    dispatch(setUserData(authData));

    loadingData()




  }, []);

  return (
    <>
      <div className="w-[100%]  h-[100vh]">
        <Navbar />

        <div className="w-[100%] flex justify-center items-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/event" element={<Event />} />
            <Route path="/login" element={<Auth />} />
            <Route path="/address" element={<Address />} />
            <Route path="/member" element={<Member />} />
            <Route path={`detail/:filmId`}   element={<DetailFilmPage />} />
          </Routes>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;