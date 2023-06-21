import { Card, Modal } from "antd";
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import millify from "millify";
import CreditModal from "../CreditModal/CreditModal";
import { useSelector } from "react-redux";
import * as api from "../../../api/index"
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const Perchase = (props) => {
  let { danhSachGheDangDat , filmManagerId , swal } = props

    const [openCreditModal , setOpenCreditModal] = useState(false)
    const userData = useSelector((state) => state.auth.authData?.user);
    const navigate = useNavigate()






    const datVe = async ({creditForm})=>{

        const { cvc, expiry, focus, name, number } = creditForm
        // if(!cvc || !expiry || !focus || name || number){
        //     toast.error("Please enter a valid credit.")
        //     return;
        // }

        let dsGheWithUserId = danhSachGheDangDat.map((ds)=>{
            return {
                ...ds,
                taiKhoanNguoiDat : userData?.id,
                daDat : true
            }
        })
        

        let formData = {
            filmManagerId : filmManagerId,
            listSeats : dsGheWithUserId,
            userId : userData?.id,
            totalCost : renderTongTien(),
            
        }
        if(!formData.userId){
          toast.error("Please sign in for perchase.")
          navigate('/login', {replace : true})
          
          return
          
        }
        
        let req = await toast.promise(api.createNewBill({formData : formData}), {
          pending: "Perchase pending",
          success: "Perchase success",
          error: "Perchase error",
        });
       
        setOpenCreditModal(false)
        setTimeout(() => {
          
          window.location.reload()
        }, 5000);
      

      
    }

    const handleModalClose = ()=>{
        setOpenCreditModal(!openCreditModal)
    }

  const renderTongTien = () => {
    return danhSachGheDangDat.reduce((tongTien, gheDangDat, index) => {
      return (tongTien += gheDangDat.giaVe);
    }, 0);
  };

  return (
    <Card
      className="bg-inherit text-inherit billCard"
      title="Your selected seat"
      bordered={false}
    >
      {/* list chair */}
      <div className="flex flex-col">
        <span className="font-semibold mb-2">
          {danhSachGheDangDat?.length || 0} seats
        </span>

        <div className="flex gap-2 w-full flex-wrap max-h-[120px] overflow-y-auto">
          {danhSachGheDangDat?.map((seat, index) => {
            return (
              <div
                key={index}
                className="p-[4px] w-9 rounded-md bg-[var(--secondary)] font-semibold text-[var(--third)] "
              >
                {seat?.tenGhe}
              </div>
            );
          })}
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

        <div className="max-h-[240px] overflow-y-auto">
          {danhSachGheDangDat.map((seat, index) => {
            return (
              <div className="flex flex-row justify-between items-center mx-2 my-4">
                <span className="text-sm font-semibold w-[30%] m-auto text-left ">
                  {seat.loaiGhe}
                </span>
                <span className="text-sm font-semibold w-[30%] m-auto text-left ">
                  1
                </span>
                <span className="text-sm font-semibold w-[40%] m-auto text-left flex gap-1 ">
                  <span>{seat.giaVe}</span>
                  <span>VND</span>
                </span>
              </div>
            );
          })}
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
        <div className="w-full my-2 h-[1px] bg-[#ccc]"></div>
        {/* total cost */}
        <div className="flex flex-row justify-between items-center mx-2 my-4">
          <span className="text-sm font-semibold w-[30%] m-auto text-left ">
            Total cost
          </span>
          <span className="text-sm font-semibold w-[40%] m-auto text-left "></span>
          <span className="text-sm font-semibold w-[40%] m-auto text-left ">
            {millify(renderTongTien())}
          </span>
        </div>
      </div>

      {/* Button add foot or button purchare */}
      <div className="w-full flex flex-col gap-2">
        <div className="primaryBtn">
          <AiOutlinePlus />
          <span className="">Add food</span>
        </div>
        <div onClick={()=>{
            setOpenCreditModal(true);
        }} className="secondaryBtn">
          <span className="">Purchase</span>
        </div>
      </div>
      <Modal
        width={"60%"}
        onCancel={handleModalClose}
        open={openCreditModal}
        footer={null}
        closeAfterTransition
        className=""
      >
        <CreditModal setOpenCreditModal = {setOpenCreditModal} datVe = {datVe}  />
      </Modal>
    </Card>
  );
};

export default Perchase
