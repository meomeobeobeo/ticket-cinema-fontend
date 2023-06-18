import React, { Fragment, memo, useEffect, useState } from "react";
import "./ChooseSlot.scss";
import * as api from "../../../api/index";
import Counter from "./Counter";
import { Spin } from "antd";

export default function ChooseSlot({
  danhSachGheDangDat,
  setDanhSachGheDangDat,
  filmManagerId,
}) {
  const [thongTinPhongVe, setThongTinPhongVe] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchSeatInfor = async (filmManagerId) => {
    let data = (await api.getSeatDataBaseOnFilmManagerId({ id: filmManagerId }))
      .data;
    console.log(data);

    setThongTinPhongVe(data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (filmManagerId) {
      fetchSeatInfor(filmManagerId);
    }
  }, [filmManagerId]);
  if (isLoading) {
    return (
      <div className="w-[90%] mt-[64px] h-[100vh] flex flex-col justify-center items-center">
        <Spin size="large" />
      </div>
    );
  }

  const renderGhe = (daDat, ghe) => {
    if (daDat) {
      return <i className="fa fa-couch slot__item item--picked"></i>;
    } else {
      let cssGheDangDat = "";

      let index = danhSachGheDangDat?.findIndex(
        (gheDangDat) => gheDangDat.stt === ghe.stt
      );
      if (index !== -1) {
        cssGheDangDat = "item--picking";
      }
      let cssGheVip = "";
      if (ghe.loaiGhe === "Vip") {
        cssGheVip = "item--vip";
      }
      return (
        <i
          style={{ fontSize: "20px" }}
          className={`fa fa-couch text-xs slot__item ${cssGheVip} ${cssGheDangDat}`}
          onClick={() => {
            datGhe(ghe);
          }}
        ></i>
      );
    }
  };
  const datGhe = (ghe) => {
    let index = danhSachGheDangDat.findIndex(
      (gheDangDat) => gheDangDat.stt === ghe.stt
    );
    if (index !== -1) {
      danhSachGheDangDat.splice(index, 1);
    } else {
      danhSachGheDangDat = [...danhSachGheDangDat, ghe];
    }
    setDanhSachGheDangDat([...danhSachGheDangDat]);
  };
  const renderDanhSachGhe = () => {
    let { danhSachGhe } = thongTinPhongVe;
    return danhSachGhe?.map((ghe, index) => {
      return <Fragment key={index}>{renderGhe(ghe.daDat, ghe)}</Fragment>;
    });
  };

  return (
    <div className="checkOut__left md:col-span-9 sm:col-span-12 p-0">
      <div className="bookSlot">
        <div className="bookSlot__content">
          <div className="theater__info d-flex justify-content-between">
            <div className="theater__img d-flex ">
              <div className="theater__name">
                <span className="name">
                  <span className="subname">
                    {thongTinPhongVe.thongTinPhim?.tenRap}
                  </span>
                </span>
                <p className="showtime">
                  Giờ chiếu: {thongTinPhongVe.thongTinPhim?.gioChieu}
                </p>
                <p className="subname">
                  Tên phim : {thongTinPhongVe.thongTinPhim?.tenPhim}
                </p>
              </div>
            </div>
            <div className="timeKeepSlot">
              <p className="title__text">thời gian giữ ghế</p>
              <Counter />
            </div>
          </div>
          <div className="chooseSlot">
            <div className="screen__img">
              <img src="https://i.ibb.co/zWgWjtg/screen.png" alt="screen" />
            </div>
            <div className="picking row">
              <div className="slot__picking col-12">
                <div className="slot__row">{renderDanhSachGhe()}</div>
              </div>
            </div>
            <div className="slot__detail flex flex-row justify-around items-center">
              <div className="flex gap-2 justify-center items-center">
                <i className="fa fa-couch item--picking" />
                <span className="slot__text">Ghế đang chọn</span>
              </div>
              <div className="flex gap-2 justify-center items-center">
                <i className="fa fa-couch item--picked" />
                <span className="slot__text">Ghế đã chọn</span>
              </div>
              <div className="flex gap-2 justify-center items-center">
                <i className="fa fa-couch item--regular" />
                <span className="slot__text">Ghế chưa chọn</span>
              </div>
              <div className="flex gap-2 justify-center items-center">
                <i className="fa fa-couch item--vip" />
                <span className="slot__text">Ghế Vip</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
