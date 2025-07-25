'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import 'swiper/css';
import CarouselCard from '../carousel-card/carousel-card';
import data from '../../public/card-data.json';

const dataa = data.data

export default function SwiperCarousel(){
    return(
        <>
            <Swiper
                spaceBetween={100}
                slidesPerView={2}
                loop={true}
                modules={[Autoplay]}
                autoplay={{
                    delay:3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                direction={"horizontal"}
            >
                <SwiperSlide>
                    <CarouselCard 
                        source={dataa[0].icon}
                        title={dataa[0].title}
                        description={dataa[0].description}
                        url={dataa[0].url}
                        style={{gridRow:'2', gridColumn:'1'}}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <CarouselCard 
                        source={dataa[1].icon}
                        title={dataa[1].title}
                        description={dataa[1].description}
                        url={dataa[1].url}
                        style={{gridRow:'2', gridColumn:'1'}}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <CarouselCard
                        source={dataa[2].icon}
                        title={dataa[2].title}
                        description={dataa[2].description}
                        url={dataa[2].url}
                        style={{gridRow:'2', gridColumn:'1'}}
                    />
                </SwiperSlide>
            </Swiper>        
        </>
    )
}