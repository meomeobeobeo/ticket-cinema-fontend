import React, { useEffect, useState } from "react";

import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";

const { Text, Title } = Typography;
const { Option } = Select;
const demoImage =
  "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

import { CSSTransition } from "react-transition-group";
import Footer from "../components/Footer/Footer";
const data = [
  {
    title: "CGV Hồ Gươm Plaza",
    contentUrl: "src/assets/image/cine1.jpg",
    desc: "Tầng 3, TTTM Hồ Gươm Plaza, 110 Trần Phú, Phường Mỗ Lao, Quận Hà Đông, Hà Nội",
  },
  {
    title: "CGV Aeon Long Biên",
    contentUrl: "src/assets/image/cine2.jpg",
    desc: "Tầng 4 - TTTM AEON Long Biên, Số 27 Cổ Linh, Quận Long Biên, Hà Nội",
  },
  {
    title: "CGV Vincom Nguyễn Chí Thanh",
    contentUrl: "src/assets/image/cine3.jpg",
    desc: "Số 54A Nguyễn Chí Thanh, Phường Láng Thượng, Quận Đống Đa, Hà Nội",
  },
  {
    title: "CGV Mac Plaza (Machinco)",
    contentUrl: "src/assets/image/cine4.jpg",
    desc: "Tầng 7, Trung tâm thương mại Mac Plaza, 10 Trần Phú, Q, Hà Đông, Hanoi City",
  },
  {
    title: "CGV Vincom Times City",
    contentUrl: "src/assets/image/cine5.jpg",
    desc: "Tầng B1, TTTM Vincom Mega Mall Times City, 458 Minh Khai, Hai Bà Trưng, Hà Nội",
  },
];

const Address = () => {
  const [newsData, setNewsData] = useState(data);
  return (
    <div style={{ marginLeft: "4px" }} className="w-full mt-[80px] ">
      <Row gutter={[24, 24]}>
        {newsData.map((news, i) => (
          <Col xs={24} key={i}>
            <Card hoverable className="news-card bg-black hover:opacity-[0.8]">
              <a href={news.url} target="_blank" rel="noreferrer">
                <div className="news-image-container">
                  <Title className="news-title text-white" level={4}>
                    {news.title}
                  </Title>
                  <img
                    className="w-40 h-32 rounded-md"
                    src={news.contentUrl || demoImage}
                    alt="news"
                  />
                </div>
                <p className="text-white">
                  {news.length > 100
                    ? `${news.desc.substring(0, 100)}...`
                    : news.desc}
                </p>
                <div className="provider-container"></div>
              </a>
            </Card>
          </Col>
        ))}
      </Row>
      <Footer />
    </div>
  );
};

export default Address;
