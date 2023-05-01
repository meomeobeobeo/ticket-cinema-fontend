import { Button, Image } from "antd";
import React, { useState } from "react";
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
];

const Slider = () => {
  // slider is component show list image and information of film
  const [visible, setVisible] = useState(false);
  return (
    <div className="w-full flex  justify-center items-center">

      {/* previus */}
      <Button className="m-[8px]"   >
        <FcPrevious/>
      </Button>
      <Image
      className={styles.image}
        preview={{
          visible: false,
        }}
        src="src\assets\image\pic5.jpg"
        onClick={() => setVisible(true)}
      />
       <Button className="m-[8px] "   >
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
