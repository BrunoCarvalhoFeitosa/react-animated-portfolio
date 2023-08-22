import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode, Pagination, Navigation, EffectCoverflow } from "swiper"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/free-mode"
import "swiper/css/pagination"
  
const testimonialData = [
  {
    image: "/t-avt-1.png",
    name: "Anna Vitória",
    position: "Customer",
    message:
      "Tive a oportunidade de trabalhar com ele, um ótimo profissional e muito dedicado.",
  },
  {
    image: "/t-avt-2.png",
    name: "Sara Lopes",
    position: "Customer",
    message:
      "Extremamente competente, é muito pontual, sempre nos passa feedback das sprints.",
  },
  {
    image: "/t-avt-3.png",
    name: "Jhon Silva",
    position: "Customer",
    message:
      "Manda muito bem no Next.js e animações, pude aprender muita coisa com ele.",
  },
  {
    image: "/t-avt-4.png",
    name: "Gabriela Spolleto",
    position: "Customer",
    message:
      "Tive a oportunidade de gerencia-lo e nossos clientes sempre o avaliaram muito bem.",
  },
  {
    image: "/t-avt-5.jpg",
    name: "Giovanny Souza",
    position: "Customer",
    message:
      "Pude trabalhar em pair-programming, recomendo muito o trabalho dele.",
  },
  {
    image: "/t-avt-6.jpg",
    name: "Giuliano Gentil",
    position: "Customer",
    message:
      "Sempre foi solicito, cumpriu com todos os prazos que repassamos à ele.",
  },
  {
    image: "/t-avt-8.jpg",
    name: "Carla Schimiddti",
    position: "Customer",
    message:
      "Trabalho com muitos clientes e sempre que algum projeto se encaixa eu o recomendo.",
  },
  {
    image: "/t-avt-2.png",
    name: "Daniela Alencar",
    position: "Customer",
    message:
      "As skills dele em Javascript sempre me impressionaram, sua dedicação é notável.",
  },
]

const TestimonialSlider = () => {
  return (
    <Swiper
      effect={"coverflow"}
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
      modules={[Navigation, FreeMode, Pagination, EffectCoverflow]}
    >
        {testimonialData.map((item, index) => (
          <SwiperSlide key={index}>
              <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer">
                  <div>
                    <div>
                      <div className="flex flex-col items-center">
                        <div className="mb-2">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-[125px] h-[125px] rounded-full object-cover"
                          />
                        </div>
                        <div className="mb-3">
                          {item.name}
                        </div>
                        <div>
                          <p className="text-sm text-center">
                            {item.message}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
          </SwiperSlide>
        ))}
    </Swiper>
  )
}

export default TestimonialSlider
  