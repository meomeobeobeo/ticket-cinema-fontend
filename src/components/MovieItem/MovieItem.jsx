import React from "react";
import "./MovieItem.scss";
import ModalTrailer from "../ModalTrailer/ModalTrailer";
import LazyLoad from "react-lazyload";
import { NavLink } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import moment from "moment";
export default function MovieItem({ phimItem }) {

  const [open, setOpen] = React.useState(false);
  const handleToggle = () => setOpen(!open);
  return (
    <div className="movie-card col-sm-12">
      <NavLink className="card-link" to={`/detail/${phimItem.id}`}>
        <div className="card-content">
          <div className="content-left">
            <div className="left-header-movie">
              <h1 className="movie-name">{phimItem.name}</h1>
              <p className="during-time">120 phút</p>
              <p className="date-time">
                {moment(phimItem.startTime).format("DD-MM-yyyy")}
              </p>
            </div>
            <div className="below-header">
              <p className="description">{phimItem.description}</p>
            </div>
          </div>
          <LazyLoad throttle={200}>
            <CSSTransition
              key="1"
              timeout={1000}
              
            >
              <div
                className="content-right"
                style={{ backgroundImage: `url(${phimItem.imgBanner})` }}
              ></div>
            </CSSTransition>
          </LazyLoad>
        </div>
      </NavLink>
      <div className="play-trailer" onClick={handleToggle}>
        <i className="play-icon fa fa-play"></i>
      </div>

      <ModalTrailer
        trailer={phimItem.trailer}
        maPhim={phimItem.id}
        open={open}
        handleToggle={handleToggle}
      />
    </div>
  );
}
