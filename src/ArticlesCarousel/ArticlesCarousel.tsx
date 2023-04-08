import { Navigation, Pagination, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import "./styles.css";

import data from "../../public/articles.json";
import ArticleCarouselItem from "./ArticleCarouselItem";
import StickySection from "../StickySection";


function ArticlesCarousel() {
    const pagination: any = {
        clickable: true,
        renderBullet: function (index: string, className: string) {
            return '<span class="bg-mos-red ' + className + '">' + "" + "</span>";
        },
    };

    return (
        <StickySection>
            <Swiper
                modules={[Navigation, Pagination, EffectFade]}
                navigation
                pagination={pagination}
                effect="fade"
                loop={true}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {data.records.map((i, idx) => (
                    <SwiperSlide key={idx}><ArticleCarouselItem data={i} /></SwiperSlide>)
                )}
            </Swiper>
        </StickySection>
    );
}

export default ArticlesCarousel;
