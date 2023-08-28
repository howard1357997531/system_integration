import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./css/Advertise.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Box, styled } from "@mui/material";
import { blue } from "@mui/material/colors";
import StartButton from "../nav/StartButton";

function AdvertiseScreen() {
  const imageUrl = ["image/1.jpg", "image/2.jpg", "image/3.jpg", "image/4.jpg"];
  const StyleBox = styled(Box)({
    position: "relative",
    height: "calc(100vh - 70px)",
    paddingTop: "70px",
  });

  const StyleImage = styled(Box)({
    backgroundRepeat: "none",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "100%",
  });
  return (
    <>
      <StyleBox id="1">
        <Swiper
          spaceBetween={30}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {imageUrl.map((image) => (
            <SwiperSlide key={image}>
              <StyleImage
                sx={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${image})`,
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <StartButton />
      </StyleBox>
      <StyleBox id="2"></StyleBox>
    </>
  );
}

export default AdvertiseScreen;

/*
            <SwiperSlide>
              <img src="image/1.jpg" alt=""></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src="image/2.jpg" alt=""></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src="image/3.jpg" alt=""></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src="image/4.jpg" alt=""></img>
            </SwiperSlide>
*/
