import { Button, Card, DatePicker, Select, Typography } from "antd";
import React from "react";
import "./style.scss";
import Footer from "../components/Footer/Footer";
import { AiFillStar, AiOutlinePlus } from "react-icons/ai";
const { Option } = Select;

const DetailFilmPage = () => {
  return (
    <div className="w-[90%] mt-[64px] flex flex-col justify-center items-center text-slate-100">
      {/* film information */}
      <div className="w-full flex items-center gap-12 mt-3">
        <img
          className="w-[200px] h-[240px] rounded-lg object-cover "
          src={"src/assets/image/pic1.jpg"}
        />
        <div className="flex flex-col">
          <span className="text-xl font-bold mb-6">
            John width : chapper 3 - Parabellum (2019)
          </span>

          {/* information film  */}
          <div className="flex gap-8">
            {/* rate start */}
            <span className="flex justify-center items-center gap-1"> <AiFillStar className="text-yellow-200" /> 8.1 / 10</span>
            <span className="">2h 10 min</span>
            <span>2019,meomeo production</span>
          </div>

          <div className="w-full my-4 h-[2px] bg-[#ccc]"></div>
          {/* button watch traller */}
          <Button className="w-40 text-slate-100 custom-button ]">
            Watch traller
          </Button>
        </div>
      </div>
      <div className="w-full my-8 h-[2px] bg-[#ccc] flex gap-8 "></div>
      {/* information picker  */}
      <div className="w-full h-30 flex gap-4">
        <div className="flex w-[400px] gap-8 items-center">
          <span className="text-2xl font-semibold">Date</span>
          <DatePicker className="h-8 w-[70%]" onChange={() => {}} />
        </div>

        <div className="flex-row w-[400px] flex gap-4">
          <span className="text-xl font-semibold">Time</span>
          <Select className="w-[60%]" />
        </div>

        <div className="flex-row w-[400px] flex gap-4">
          <span className="text-xl font-semibold">Address</span>
          <Select className="w-[60%]" />
        </div>
      </div>
      <div className="w-full my-8 h-[2px] bg-[#ccc] flex gap-8 "></div>

      {/* bill and Choose a chair */}
      <div className="w-full flex justify-start">
        <Card
          className="bg-inherit text-inherit billCard"
          title="Your selected seat"
          bordered={false}
        >
          {/* list chair */}
          <div className="flex flex-col">
            <span className="font-semibold mb-2">3 seats</span>
            <div className="flex gap-2 w-full">
              <div className="p-[4px] w-9 rounded-md bg-[var(--secondary)] font-semibold text-[var(--third)] ">
                H10
              </div>
              <div className="p-[4px] w-9 rounded-md bg-[var(--secondary)] font-semibold text-[var(--third)] ">
                H11
              </div>
              <div className="p-[4px] w-9 rounded-md bg-[var(--secondary)] font-semibold text-[var(--third)] ">
                H12
              </div>
            </div>
          </div>

          {/* list bill */}
          <div className="flex flex-col">
            <div className="flex flex-row justify-between items-center mx-2 my-4">
              <span className="text-sm font-semibold w-[30%] m-auto text-left ">
                Type
              </span>
              <span className="text-sm font-semibold w-[30%] m-auto text-left ">
                Quantity
              </span>
              <span className="text-sm font-semibold w-[40%] m-auto text-left ">
                Price
              </span>
            </div>

            {/* render list service as ticket , type ticket , cod */}
            <div className="flex flex-row justify-between items-center mx-2 my-4">
              <span className="text-sm font-semibold w-[30%] m-auto text-left ">
                Nomal
              </span>
              <span className="text-sm font-semibold w-[30%] m-auto text-left ">
                3
              </span>
              <span className="text-sm font-semibold w-[40%] m-auto text-left ">
                15000 VND
              </span>
            </div>

            <div className="flex flex-row justify-between items-center mx-2 my-4">
              <span className="text-sm font-semibold w-[30%] m-auto text-left ">
                Nomal
              </span>
              <span className="text-sm font-semibold w-[30%] m-auto text-left ">
                3
              </span>
              <span className="text-sm font-semibold w-[40%] m-auto text-left ">
                15000 VND
              </span>
            </div>

            <div className="flex flex-row justify-between items-center mx-2 my-4">
              <span className="text-sm font-semibold w-[30%] m-auto text-left ">
                Nomal
              </span>
              <span className="text-sm font-semibold w-[30%] m-auto text-left ">
                3
              </span>
              <span className="text-sm font-semibold w-[40%] m-auto text-left ">
                15000 VND
              </span>
            </div>

            <div className="w-full my-2 h-[1px] bg-[#ccc]"></div>
            {/* foot and drink */}
            <div className="flex flex-row justify-between items-center mx-2 my-4">
              <span className="text-sm font-semibold w-[30%] m-auto text-left ">
                Food
              </span>
              <span className="text-sm font-semibold w-[30%] m-auto text-left ">
                Quantity
              </span>
              <span className="text-sm font-semibold w-[40%] m-auto text-left ">
                Price
              </span>
            </div>
            {/* render food  */}
            <div className="flex flex-row justify-between items-center mx-2 my-4">
              <span className="text-sm font-semibold w-[30%] m-auto text-left ">
                Snack
              </span>
              <span className="text-sm font-semibold w-[30%] m-auto text-left ">
                1
              </span>
              <span className="text-sm font-semibold w-[40%] m-auto text-left ">
                10000 VND
              </span>
            </div>
          </div>

          {/* Button add foot or button purchare */}
          <div className="w-full flex flex-col gap-2">
            <div className="primaryBtn">
              <AiOutlinePlus />
              <span className="">Add food</span>
            </div>
            <div className="secondaryBtn">
              <span className="">Purchase</span>
            </div>
          </div>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default DetailFilmPage;
