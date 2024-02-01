// import { useState, useRef } from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./swiper.scss";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";

function RoomIntro(){
  const swiperRoomParams = {
    modules: [EffectFade, Navigation, Pagination, Autoplay],
    effect: "fade",
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    speed: 300,
    pagination: {
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-navigation-next",
      prevEl: ".swiper-navigation-prev",
    },
  };
  return (
    <>
          <section className="bg-neu-100">
        <Swiper
          id="index-room-swiper"
          className="mySwiper w-full relative"
          {...swiperRoomParams}
        >
          <SwiperSlide>
            <div className="py-20 lg:py-30 px-5 lg:px-0 bg-neu-100 bg-[url('../images/desktop-deco-BG.png'),url('../images/desktop-deco-Line.png')] bg-[position:bottom,top_180px_right_0] bg-[size:contain,63%_auto] bg-no-repeat ">
              <div className="lg:flex items-end ">
                <div className="w-full lg:w-[900px] h-[300px] sm:h-[600px] lg:h-[900px] mb-6 lg:mb-0 bg-[url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b')] bg-center bg-cover"></div>
                <div className="text-white lg:px-20 pb-20 lg:pb-24">
                  <h3 className="mb-2 lg:mb-4 text-[28px] lg:text-[40px] font-bold">
                    尊爵雙人房
                  </h3>
                  <p className="mb-6 lg:mb-10 text-sm lg:text-base font-normal">
                    享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。
                  </p>
                  <h4 className="mb-6 lg:mb-10 font-bold text-2xl lg:text-[32px]">
                    NT$ 10,000
                  </h4>
                  <button
                    type="button"
                    className="cursor-pointer w-full bg-white hover:bg-primary-100 text-black hover:text-white p-5 lg:text-2xl font-bold"
                  >
                    查看更多
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="py-20 lg:py-30 px-5 lg:px-0 bg-neu-100 bg-[url('../images/desktop-deco-BG.png'),url('../images/desktop-deco-Line.png')] bg-[position:bottom,top_180px_right_0] bg-[size:contain,63%_auto] bg-no-repeat ">
              <div className="lg:flex items-end ">
                <div className="w-full lg:w-[900px] h-[300px] sm:h-[600px] lg:h-[900px] mb-6 lg:mb-0 bg-[url('https://images.unsplash.com/flagged/photo-1573168710865-2e4c680d921a')] bg-center bg-cover"></div>
                <div className="text-white lg:px-20 pb-20 lg:pb-24">
                  <h3 className="mb-2 lg:mb-4 text-[28px] lg:text-[40px] font-bold">
                    景觀雙人房
                  </h3>
                  <p className="mb-6 lg:mb-10 text-sm lg:text-base font-normal">
                    景觀雙人房擁有絕美的高雄市景觀，讓您在舒適的環境中欣賞城市之美。
                  </p>
                  <h4 className="mb-6 lg:mb-10 font-bold text-2xl lg:text-[32px]">
                    NT$ 12,000
                  </h4>
                  <button
                    type="button"
                    className="cursor-pointer w-full bg-white hover:bg-primary-100 text-black hover:text-white p-5 lg:text-2xl font-bold"
                  >
                    查看更多
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="py-20 lg:py-30 px-5 lg:px-0 bg-neu-100 bg-[url('../images/desktop-deco-BG.png'),url('../images/desktop-deco-Line.png')] bg-[position:bottom,top_180px_right_0] bg-[size:contain,63%_auto] bg-no-repeat ">
              <div className="lg:flex items-end ">
                <div className="w-full lg:w-[900px] h-[300px] sm:h-[600px] lg:h-[900px] mb-6 lg:mb-0 bg-[url('https://images.unsplash.com/photo-1616594039964-ae9021a400a0')] bg-center bg-cover"></div>
                <div className="text-white lg:px-20 pb-20 lg:pb-24">
                  <h3 className="mb-2 lg:mb-4 text-[28px] lg:text-[40px] font-bold">
                    豪華雅緻房
                  </h3>
                  <p className="mb-6 lg:mb-10 text-sm lg:text-base font-normal">
                    享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。
                  </p>
                  <h4 className="mb-6 lg:mb-10 font-bold text-2xl lg:text-[32px]">
                    NT$ 15,000
                  </h4>
                  <button
                    type="button"
                    className="cursor-pointer w-full bg-white hover:bg-primary-100 text-black hover:text-white p-5 lg:text-2xl font-bold z-20"
                  >
                    查看更多
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="py-20 lg:py-30 px-5 lg:px-0 bg-neu-100 bg-[url('../images/desktop-deco-BG.png'),url('../images/desktop-deco-Line.png')] bg-[position:bottom,top_180px_right_0] bg-[size:contain,63%_auto] bg-no-repeat ">
              <div className="lg:flex items-end ">
                <div className="w-full lg:w-[900px] h-[300px] sm:h-[600px] lg:h-[900px] mb-6 lg:mb-0 bg-[url('https://images.unsplash.com/photo-1560185893-a55cbc8c57e8')] bg-center bg-cover"></div>
                <div className="text-white lg:px-20 pb-20 lg:pb-24">
                  <h3 className="mb-2 lg:mb-4 text-[28px] lg:text-[40px] font-bold">
                    景觀尊榮家庭房
                  </h3>
                  <p className="mb-6 lg:mb-10 text-sm lg:text-base font-normal">
                    景觀尊榮家庭房不僅有寬敞的空間，還有絕美的市景視野，是帶給家庭最尊榮的待遇。
                  </p>
                  <h4 className="mb-6 lg:mb-10 font-bold text-2xl lg:text-[32px]">
                    NT$ 20,000
                  </h4>
                  <button
                    type="button"
                    className="cursor-pointer w-full bg-white hover:bg-primary-100 text-black hover:text-white p-5 lg:text-2xl font-bold"
                  >
                    查看更多
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* navigation */}
          <div className="absolute right-5 lg:right-20 bottom-20 lg:bottom-30 flex justify-end z-10">
            <button className="swiper-navigation-prev p-4 group">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
              className='fill-primary-100 group-hover:fill-primary-40 group-active:fill-primary-120'>
                <path d="M12 20L13.41 18.59L7.83 13L20 13L20 11L7.83 11L13.41 5.41L12 4L4 12L12 20Z" fill=""/>
              </svg>
            </button>
            <button className="swiper-navigation-next p-4 group">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                className='fill-primary-100 group-hover:fill-primary-40 group-active:fill-primary-120'>
                  <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill=""/>
              </svg>
            </button>
          </div>
        </Swiper>
      </section>
    </>
  )
}

export default RoomIntro