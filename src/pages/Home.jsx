import React, { useEffect, useState } from "react";
import Slider from "../components/Slider/Slider";
import { Col, Divider, Row, Typography } from "antd";

import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";
import dataTest from "./data.json";
import MovieItem from "../components/MovieItem/MovieItem";
import { useDispatch, useSelector } from "react-redux";
import * as api from "../api/index"
import { filmsSlice, saveFilmsState } from "../redux/FilmsSlice";
const Home = () => {


  



 


  const datatest = useSelector(state => state.films?.films)




  






  return (
    <div className="w-full mt-[64px] flex flex-col justify-center items-center">
      <div className="w-[90%]">
        <Slider />
      </div>
      {/* divider  */}
      <div className="w-full my-4 h-[2px] bg-[#ccc]"></div>
      <div className="flex w-full justify-start ">
        <Typography className="text-lg text-slate-100 font-semibold py-4 text-left">
          Phim đang chiếu
        </Typography>
      </div>
      <Row gutter={[16, 16]}>
        {datatest?.map((data, i) => {
          return (
            <Col key={i} xs={24} sm={12} md={8} lg={8}>
                <MovieItem  phimItem={data} />
            </Col>
          );
        })}
       
      </Row>
      <Footer />
    </div>
  );
};

export default Home;
