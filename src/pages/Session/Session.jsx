import { Swiper, SwiperSlide } from "swiper/react"
import Heading from "../../components/Heading"
import SessionsCard from "./SessionsCard"
import { Autoplay } from 'swiper/modules';
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import './../../index.css'


const Session = () => {
  const sessionsData =
    [
      {
        name: "Real-Time Signal Processing in IoT Devices",
        description:
          "Gain an in-depth understanding of how signal processing revolutionizes real-time applications in IoT. The session provides invaluable insights and skills that are highly relevant in professional and industry settings.",
        image:'/Images/iot.jpg'
      },
      {
        name: "Renewable Energy Signal Processing for Smart Grids",
        description:
          "Learn how signal processing helps manage and improve the performance of smart grids, making energy distribution more efficient and reliable.",
        image:'/Images/smart-grids.jpg'
      },
      {
        name: "Career Paths in Signal Processing",
        description:
          "Explore the vast career opportunities in the field of signal processing and its impact across industries. This session will provide valuable insights into the potential pathways and skills needed to excel in this dynamic domain.",
        image:'/Images/career.jpg'
      },
      
    ]

  let swiperInstance = null;
  return (
    <section id="sessions" className="bg-black py-12 relative overflow-hidden">

      <div className="gradient-circle absolute  left-10"></div>
      <div className="gradient-circle absolute  right-10"></div>
      <div className="gradient-circle absolute bottom-0 left-1/4"></div>

        <Heading heading="sessions" />
          <Swiper
              onSwiper={(swiper) => (swiperInstance = swiper)}
              loop={true}
              autoplay={{ delay: 3000,disableOnInteraction: true,}}
              modules={[EffectCoverflow, Pagination, Navigation,Autoplay]}
              className="mySwiper"
              effect={"coverflow"}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 0,
                modifier: 1,
                slideShadows:false
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 40,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
            >
              
                {
                  sessionsData.map((session,index)=>(
                    <SwiperSlide key={index}>
                    <SessionsCard
                    name={session.name}
                    description={session.description}
                    image={session.image}
                    onMouseEnter={() => swiperInstance?.autoplay.stop()} // Pause autoplay
                    onMouseLeave={() => swiperInstance?.autoplay.start()} // Resume autoplay
                    />
                  </SwiperSlide>
                  ))
                }
            </Swiper>
    </section>
  )
}
export default Session