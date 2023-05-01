import React from "react";
import Slider from "../components/Slider/Slider";
import { Col, Divider, Row, Typography } from "antd";
import FilmCard from "../components/FilmCard/FilmCard";
import Footer from "../components/Footer/Footer";
import {Link} from "react-router-dom";

const Home = () => {
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
        <Col xs={24} sm={12} md={8} lg={6}>
          <Link to="/detail">
            <FilmCard />
          </Link>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <FilmCard />
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <FilmCard />
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <FilmCard />
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <FilmCard />
        </Col>{" "}
        <Col xs={24} sm={12} md={8} lg={6}>
          <FilmCard />
        </Col>
      </Row>
      <Footer />
    </div>
  );
};

export default Home;
