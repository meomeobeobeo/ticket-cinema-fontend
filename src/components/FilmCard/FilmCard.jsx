import React from "react";
import { Card, Typography } from 'antd';
const { Meta } = Card;
const FilmCard = () => {
  return (
    <Card
      hoverable
      style={{
        width: '100%',
      }}
      className="text-left"
      cover={
        <img
          alt="example"
          src="src/assets/image/pic1.jpg"
        />
      }
    >
      <Typography className="text-base font-semibold">Lật mặt 6 : Tấm vé định mệnh</Typography>
      <span>
        
        <Typography><span className="font-semibold">Thể loại :</span> Hài hành động</Typography>
        <Typography><span className="font-semibold">Thời lượng :</span> 132 phút</Typography>
        <Typography><span className="font-semibold">Khởi chiếu :</span>  28-4-2023</Typography>
      </span>
    </Card>
  );
};

export default FilmCard;
