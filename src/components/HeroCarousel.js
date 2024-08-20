import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, EffectFade } from 'swiper/modules';
import { useSelector } from 'react-redux';

function HeroCarousel() {
  const carouselImages = ['banner-1.png', 'banner-2.png', 'banner-3.png'];
  const sliders = useSelector((state) => state.auth.sliders);
  

  return (
    <>
    {sliders.length>0?(<Swiper
      modules={[Autoplay, EffectFade]}
      fadeEffect={{ crossFade: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      spaceBetween={50}
      slidesPerView={1}
    >
      {sliders.map((image, index) => (
        <SwiperSlide className="swiper-slide" key={index}>
          <img
            src={`https://campus.acetians.in/custom/images/${image.slider_image}`}
            alt={`Slide ${index + 1}`}
          />
        </SwiperSlide>
      ))}
    </Swiper>):
    <Swiper
      modules={[Autoplay, EffectFade]}
      fadeEffect={{ crossFade: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      spaceBetween={50}
      slidesPerView={1}
    >
      {carouselImages.map((image, index) => (
        <SwiperSlide className="swiper-slide" key={index}>
          <img
            src={`https://university.acetians.in/uploads/${image}`}
            alt={`Slide ${index + 1}`}
          />
        </SwiperSlide>
      ))}
    </Swiper>}
    </>
  );
}

export default HeroCarousel;
