import {
  Button,
  Card,
  Checkbox,
  DatePicker,
  Select,
  Spin,
  Tag,
  Typography,
} from "antd";
import React, { useEffect, useState } from "react";
import "./style.scss";
import Footer from "../components/Footer/Footer";
import { useParams } from "react-router-dom";
import { AiFillStar, AiOutlinePlus } from "react-icons/ai";
import * as api from "../api/index";
import moment from "moment";
import ChooseSlot from "../components/BookingSlot/ChooseSlot/ChooseSlot";
import dataPhongVe from "../components/BookingSlot/ChooseSlot/data.json";
import Perchase from "../components/BookingSlot/Perchase/Perchase";

const timeOptions = [
  {
    value: "7:00",
    label: "7:00",
  },
  {
    value: "8:00",
    label: "8:00",
  },
  {
    value: "9:00",
    label: "9:00",
  },
  {
    value: "10:00",
    label: "10:00",
  },
  {
    value: "11:00",
    label: "11:00",
  },
  {
    value: "12:00",
    label: "12:00",
  },
  {
    value: "13:00",
    label: "13:00",
  },
  {
    value: "14:00",
    label: "14:00",
  },
  {
    value: "15:00",
    label: "15:00",
  },
  {
    value: "16:00",
    label: "16:00",
  },
  {
    value: "17:00",
    label: "17:00",
  },
  {
    value: "18:00",
    label: "18:00",
  },
  {
    value: "19:00",
    label: "19:00",
  },
  {
    value: "20:00",
    label: "20:00",
  },
  {
    value: "21:00",
    label: "21:00",
  },
  {
    value: "23:00",
    label: "23:00",
  },
];

const addressOptions = [
  {
    value: "ha noi",
    label: "Hà Nội",
  },
  {
    value: "ho chi minh",
    label: "Hồ Chí Minh",
  },
  {
    value: "nam dinh",
    label: "Nam Định",
  },
];
const DetailFilmPage = () => {
  const params = useParams();
  const id = params.filmId;
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [filmManagerData, setFilmManagerData] = useState(null);
  const [filmManagerDataFilter, setFilmManagerDataFilter] = useState(null);
  const [filmManagerChoose, setFilmManagerChoose] = useState(null);
  let [danhSachGheDangDat, setDanhSachGheDangDat] = useState([]);
  console.log(danhSachGheDangDat)
  useEffect(() => {
    console.log(filmManagerChoose);
  }, [filmManagerChoose]);

  const fetchData = async (id) => {
    let data = await api.getDetailFilms({ id: id });

    setData(data.data);
  };

  const fetchFilmManager = async (id) => {
    let res = await api.getDataBaseOnFilmId({ id: id });

    setFilmManagerData(res.data);
    setFilmManagerDataFilter(res.data);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchData(id);
    fetchFilmManager(id);
    setIsLoading(false);
  }, [id]);
  if (isLoading) {
    return (
      <div className="w-[90%] mt-[64px] h-[100vh] flex flex-col justify-center items-center">
        <Spin size="large" />
      </div>
    );
  }

  const filterWithwatchTime = (watchTime) => {
    if (watchTime) {
      let dataFilter = filmManagerData?.filter((data) => {
        return data.watchTime === watchTime;
      });
      setFilmManagerDataFilter(dataFilter);
    }
  };
  const filterWithWatchDate = (watchDate) => {
    if (watchDate) {
      let dataFilter = filmManagerData?.filter((data) => {
        return data.watchTime === watchDate;
      });
      setFilmManagerDataFilter(dataFilter);
    }
  };
  const filterWithTheaterAddress = (theaterAddress) => {
    if (theaterAddress) {
      let dataFilter = filmManagerData?.filter((data) => {
        return data.theaterAddress === theaterAddress;
      });
      setFilmManagerDataFilter(dataFilter);
    }
  };

  return (
    <div className="w-[90%] mt-[64px] flex flex-col justify-center items-center text-slate-100">
      {/* film information */}
      <div className="w-full flex items-center gap-12 mt-3">
        <img
          className="w-[200px] h-[240px] rounded-lg object-cover "
          src={data?.imgBanner}
        />
        <div className="flex flex-col">
          <span className="text-xl font-bold mb-6">{data?.name}</span>

          {/* information film  */}
          <div className="flex gap-8">
            {/* rate start */}
            <div className="flex w-[400px] gap-8">
              <span className="flex justify-center items-center gap-1">
                {" "}
                <AiFillStar className="text-yellow-200" /> {data?.rated} / 10
              </span>
              <span className="">
                {data?.duration?.hours}h {data?.duration?.minutes}min
              </span>
              <span>2019,meomeo production</span>
            </div>
          </div>

          <div className="w-full my-4 h-[2px] bg-[#ccc]"></div>
          {/* button watch traller */}
          <Button
            onClick={() => {
              window.open(data?.trailer);
            }}
            className="w-40 text-slate-100 custom-button ]"
          >
            Watch traller
          </Button>
        </div>
        <div className="w-[600px]">
          {data?.description.length > 500 ? (
            <span>
              {data?.description.substring(0, 500)}
              <span className="ml-2">...</span>
            </span>
          ) : (
            <span>{data?.description}</span>
          )}
        </div>
      </div>
      <div className="w-full my-8 h-[2px] bg-[#ccc] flex gap-8 "></div>
      {/* information picker  */}
      <div className="w-full h-30 flex gap-4">
        <div className="flex w-[400px] gap-8 items-center">
          <span className="text-2xl font-semibold">Date</span>
          <DatePicker
            className="h-8 w-[70%]"
            onChange={(date) => {
              const formattedDate = moment(date).format("YYYY/MM/DD");
              filterWithWatchDate(formattedDate);
            }}
          />
        </div>

        <div className="flex-row w-[400px] flex gap-4">
          <span className="text-xl font-semibold">Time</span>
          <Select
            onChange={(e) => {
              filterWithwatchTime(e);
            }}
            options={timeOptions}
            className="w-[60%]"
          />
        </div>

        <div className="flex-row w-[400px] flex gap-4">
          <span className="text-xl font-semibold">Address</span>
          <Select
            onChange={(e) => {
              filterWithTheaterAddress(e);
            }}
            options={addressOptions}
            className="w-[60%]"
          />
        </div>
      </div>

      {/* result filter filmManager */}
      <div className="w-full min-h-[64px] p-2 bg-white flex flex-col gap-2 mt-4 rounded-md max-h-96 overflow-y-auto">
        {filmManagerDataFilter?.map((filmManager, index) => {
          const isChecked = filmManagerChoose === filmManager?.id;
          return (
            <Tag
              key={filmManager?.id}
              color="blue"
              className="p-[4px] flex gap-3 cursor-pointer hover:bg-orange-200"
            >
              <Checkbox
                onChange={() => {
                  if (isChecked) {
                    setFilmManagerChoose(null); // Deselect if already selected
                  } else {
                    setFilmManagerChoose(filmManager?.id); // Select the current checkbox
                  }
                }}
                checked={isChecked}
              ></Checkbox>
              <span>{filmManager?.filmInfor.name}</span>
              <span>{`Địa chỉ :  ${filmManager.theaterAddress}`}</span>
              <span>{`Số rạp :  ${filmManager.theaterNumber}`}</span>
              <span>{`Thời gian chiếu :  ${filmManager.watchTime}`}</span>
              <span>{`Ngày chiếu :  ${filmManager.watchDate}`}</span>
            </Tag>
          );
        })}
      </div>

      <div className="w-full my-8 h-[2px] bg-[#ccc] flex gap-8 "></div>

      {/* bill and Choose a chair */}
      <div className="w-full gap-8 flex justify-start">
        <Perchase danhSachGheDangDat={danhSachGheDangDat} filmManagerId={filmManagerChoose} />
        <div className="w-[75%]">
          {filmManagerChoose ? (
            <ChooseSlot
              filmManagerId={filmManagerChoose}
              thongTinPhongVe={dataPhongVe}
              danhSachGheDangDat={danhSachGheDangDat}
              setDanhSachGheDangDat={setDanhSachGheDangDat}
            />
          ) : (
            <span className="text-white">Please choose movie screening . </span>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetailFilmPage;
