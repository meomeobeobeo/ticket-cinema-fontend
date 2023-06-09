import React, { useEffect, useState } from "react";
import Slider from "../components/Slider/Slider";
import { Col, Divider, Row, Typography } from "antd";

import Footer from "../components/Footer/Footer";
import { Link, useSearchParams } from "react-router-dom";

import MovieItem from "../components/MovieItem/MovieItem";
import { useDispatch, useSelector } from "react-redux";
import * as api from "../api/index";
import { filmsSlice, saveFilmsState } from "../redux/FilmsSlice";
const Home = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("filmName");

  const datatest = useSelector((state) => state.films?.films);

  let dataFilter = datatest;
  if (query) {
    dataFilter = datatest?.filter((value, index) => {
      return value?.name?.toLowerCase().includes(query?.toLowerCase());
    });
  }

  console.log(dataFilter);

  return (
    <div className="w-full mt-[64px] flex flex-col justify-center items-center">
      <div className="w-[90%]">{/* <Slider /> */}</div>
      {/* divider  */}
      <div className="w-full my-4 h-[2px] bg-[#ccc]"></div>
      <div className="flex w-full justify-start ">
        <Typography className="text-lg text-slate-100 font-semibold py-4 text-left">
          Phim đang chiếu
        </Typography>
      </div>
      <Row className="w-full" gutter={[16, 16]}>
        {dataFilter?.map((data, i) => {
          return (
            <Col key={i} xs={24} sm={12} md={8} lg={8}>
              <MovieItem phimItem={data} />
            </Col>
          );
        })}
      </Row>
      <Footer />
    </div>
  );
};

export default Home;
