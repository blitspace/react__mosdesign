import { Navigation, Pagination, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import data from "../public/articles.json";
import ArticleCarouselItem from "./ArticleCarouselItem";


function ArticlesCarousel() {
    return (
        <section>
            {/* <Swiper
                spaceBetween={0}
                slidesPerView={1}
            > */}
            <Swiper
                modules={[Navigation, Pagination, EffectFade]}
                navigation
                pagination={{ clickable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                effect="fade"
            >
                {data.records.map((i, idx) => (
                    <SwiperSlide key={idx}><ArticleCarouselItem data={i} /></SwiperSlide>)
                )}
            </Swiper>
        </section>
    );
}

export default ArticlesCarousel;
