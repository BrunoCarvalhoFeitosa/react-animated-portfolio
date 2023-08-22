import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode, Pagination, Navigation, EffectCoverflow } from "swiper"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/free-mode"
import "swiper/css/pagination"

const workSlides = [
  {
    title: "Avon",
    path: "https://www.avon.com.br",
  },
  {
    title: "L'óreal",
    path: "https://www.segredosdesalao.com.br",
  },
  {
    title: "Suvinil",
    path: "https://loja.suvinil.com.br",
  },
  {
    title: "Malwee",
    path: "https://www.malwee.com.br",
  },
  {
    title: "Jequiti",
    path: "https://www.jequiti.com.br",
  },
  {
    title: "Toy Mania",
    path: "https://www.toymania.com.br",
  },
  {
    title: "Khelf",
    path: "https://www.khelf.com.br",
  },
  {
    title: "Mob Online",
    path: "https://www.mobonline.com.br",
  },
  {
    title: "Wine Brands",
    path: "https://www.winebrands.com.br",
  },
  {
    title: "The North face",
    path: "www.thenorthface.com.br",
  },
]
  
  const WorkSlider = () => {
    return (
      <Swiper
        grabCursor={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 15
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 15
          }
        }}
        loop
        navigation
        freeMode={true}
        pagination={{ clikable: true }}
        modules={[Navigation, FreeMode, Pagination]}
      >
          {workSlides.map((item, index) => (
            <SwiperSlide key={index}>
                <div className="relative bg-[hsla(254,45%,33%,0)]">
                  <div className=" h-[200px]">
                    <a
                      className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-900 to-pink-500 opacity-80"
                      href={item.path}
                    >
                      <div className="w-full h-full flex justify-center items-center">
                        <h4 className="text-3xl">
                          {item.title}
                        </h4>
                      </div>
                    </a>
                  </div>
                </div>
            </SwiperSlide>
          ))}
      </Swiper>
    )
  }
  
  export default WorkSlider
