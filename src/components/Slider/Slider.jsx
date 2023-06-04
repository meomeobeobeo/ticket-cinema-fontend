import { Button, Image } from "antd";
import React, { useEffect, useState } from "react";
import styles from './styles.module.scss';
import {FcNext , FcPrevious} from 'react-icons/fc'
const listPicture = [
  {
    url: "src/assets/image/pic1.jpg",
  },
  {
    url: "src/assets/image/pic2.jpg",
  },
  {
    url: "src/assets/image/pic3.jpg",
  },
  {
    url: "src/assets/image/pic4.jpg",
  },
  {
    url: "src/assets/image/pic5.jpg",
  },

];

const Slider = () => {
  // slider is component show list image and information of film
  const [visible, setVisible] = useState(false);
  const [picvisible , setPicvisible] = useState(0)
  
  const [sliderImage , setSliderImage] = useState(listPicture[picvisible].url)
  useEffect(()=>{
    setSliderImage(listPicture[picvisible].url)
  },[picvisible])
  const handleNextPic = () => {
    if(picvisible === listPicture.length - 1) {
      setPicvisible(0)
      return
    }
    setPicvisible(picvisible + 1)
  }
  const handlePrevPic = ()=>{
    if(picvisible === 0) {
      setPicvisible(listPicture.length - 1)
      return
    }
    setPicvisible(picvisible - 1)
  }


  return (
    <div className="w-full flex  justify-center items-center">


      

      {/* previus */}
      <Button 
      
      onClick={()=>{
        handlePrevPic()
      }}
      className="m-[8px]"   >
        <FcPrevious/>
      </Button>
      <Image
      className={`${styles.image} `}
        preview={{
          visible: false,
        }}
        src={sliderImage}
        onClick={() => setVisible(true)}
      />
       <Button onClick={()=>{handleNextPic()}} className="m-[8px] "   >
        <FcNext/>
       </Button>
      <div
        style={{
          display: "none",
        }}
      >
        <Image.PreviewGroup
          preview={{
            visible,
            onVisibleChange: (vis) => setVisible(vis),
          }}
        >
          {listPicture.map((picture , index) => {
            return <Image key={index} src={picture.url} />;
          })}
        </Image.PreviewGroup>
      </div>
    </div>
  );
};

export default Slider;
