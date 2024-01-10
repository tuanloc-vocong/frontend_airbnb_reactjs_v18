import React from "react";
import "./Cards.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Swiper, { Navigation, Pagination } from "swiper";

const Cards = ({ room }) => {
  return (
    <div>
      <div key={room.id} className="card_box">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          mousewheel={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          style={{ height: "380px", width: "100%" }}
        >
          <SwiperSlide>
            <img className="card_img" src={room.hinhAnh} alt="" />
          </SwiperSlide>
        </Swiper>
        <div className="card_info_flex">
          <Link
            to={`/detail/${room.id}`}
            className="card_title no-underline text-black font-bold text-base pb-0"
          >
            {room.tenPhong.length > 30
              ? room.tenPhong.substr(0, 30) + "..."
              : room.tenPhong}
          </Link>
          <div className="card_rating">
            <p>
              <GradeIcon />
            </p>
            <p>4.88</p>
          </div>
        </div>
        <p
          className="text-sm"
          style={{ color: "var(--font-grey)", margin: "0 7px" }}
        >
          Mô tả:
        </p>
        <p
          style={{
            color: "var(--black)",
            margin: "0.5rem 7px 5px",
            fontSize: "0.8rem",
          }}
        >
          <strong></strong> đêm
        </p>
      </div>
    </div>
  );
};

export default Cards;
