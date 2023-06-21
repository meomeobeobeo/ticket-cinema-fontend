import React, { useEffect, useState } from "react";

import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";

const { Text, Title } = Typography;
const { Option } = Select;
const demoImage =
  "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";
import * as apiNews from "../../api/news";
import "./styles.scss";
import { CSSTransition } from "react-transition-group";
import Footer from "../../components/Footer/Footer";

const data = [
  {
    title: "Vệ Binh Dải Ngân Hà 3",
    contentUrl:
      "https://drive.google.com/uc?export=view&id=16D1XfZRB4ztXiBC2PlWo6jw11Ll5zbTh",
    desc: "Miễn phí bắp nước khi đi xem từ 4 người",
  },
  {
    title: "QUÁ NHANH QUÁ NGUY HIỂM 10",
    contentUrl:
      "https://drive.google.com/uc?export=view&id=10fmFLmAV7Pp9-6FE-jmN4Ms2etPp2aqU",
    desc: "Miễn phí nước khi đi xem từ 2 người",
  },
  {
    title: "NÀNG TIÊN CÁ",
    contentUrl:
      "https://drive.google.com/uc?export=view&id=1BciBIhrKlPihyLwGcwH8GDjLoeCiqFNO",
    desc: "Miễn phí poster",
  },
  {
    title: "ANH EM SUPER MARIO",
    contentUrl: "https://drive.google.com/uc?export=view&id=10QS3BUoyAuTvtzTvPkHAM6gr48I5XVkj",
    desc: "Miễn phí poster",
  },
  {
    title: "AVATAR: DÒNG CHẢY CỦA NƯỚC",
    contentUrl: "https://drive.google.com/uc?export=view&id=1Ubq0KAeaP-LABSkLKgGszmq5cITVsXYJ",
    desc: "Miễn phí snack",
  },
];

const Event = () => {
  const [newsData, setNewsData] = useState(data);
  // useEffect(()=>{
  //   let req = apiNews.getNewsInformation({newsCategory : 'Transformers',count : 5})
  //   req.then((data) => {
  //     console.log(data)
  //     setNewsData(data.data)
  //   })
  // },[])

  return (
    <div style={{ marginLeft: "4px" }} className="w-full mt-[80px]">
      <Row gutter={[24, 24]}>
        {newsData.map((news, i) => (
          <Col xs={24} sm={12} lg={8} key={i}>
            <CSSTransition   key="1" timeout={1000}>
              <Card hoverable className="news-card">
                <a href={news.url} target="_blank" rel="noreferrer">
                  <div className="news-image-container">
                    <Title className="news-title" level={4}>
                      {news.title}
                    </Title>
                    <img
                      className="w-32 h-32"
                      src={news.contentUrl || demoImage}
                      alt="news"
                    />
                  </div>
                  <p>
                    {news.length > 100
                      ? `${news.desc.substring(0, 100)}...`
                      : news.desc}
                  </p>
                  <div className="provider-container"></div>
                </a>
              </Card>
            </CSSTransition>
          </Col>
        ))}
      </Row>
      <Footer />
    </div>
  );
};

export default Event;
