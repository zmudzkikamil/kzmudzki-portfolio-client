import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function SwiperScale() {
  return (
    <Swiper slidesPerView={1.5} centeredSlides spaceBetween={20}>
      {[1, 2, 3, 4].map((n) => (
        <SwiperSlide className="transition-transform" key={n}>
          <div className="h-40 bg-white text-white text-center text-2xl">
            {n}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
