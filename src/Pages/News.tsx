import PageHero from "../PageHero";
import StickySection from "../StickySection";
import { ASSETS_SOURCE } from "../settings";
import ArticleItemThumb from "../ArticleItemThumb";
import { useQuery } from "@tanstack/react-query";
import INewsItem from "../types/INewsItem";
import { useParams } from "react-router-dom";


function News() {
    const { page } = useParams();

    const newsData = useQuery<INewsItem[], Error>(['news', 'data'], () => {
        let _page = page ? `&page=${page}` : '';
        let url = `http://mosdesign.local/wp-json/posts?type=mos_news${_page}`;
        return fetch(url)
            .then(res => res.json())
    });

    if (newsData.isLoading) {
        return <div className="w-full mx-auto max-w-mos-content px-mos-md py-mos-md">Loading</div>;
    }

    return (<>
        <PageHero title="News" image={`${ASSETS_SOURCE}/wp-content/uploads/2015/03/News-header.jpg`} />
        <StickySection top={'[88px]'}>
            <div className="w-full mx-auto max-w-mos-content px-mos-md py-mos-md">
                <div className="grid grid-cols-2 gap-6">
                    {newsData.isFetched && newsData.data?.map(news => (
                        <ArticleItemThumb
                            key={news.ID}
                            title={news.extra_post_meta_data?.article_title}
                            subtitle={news.extra_post_meta_data?.article_sub_title}
                            category={news.terms?.news_category[0].name}
                            categoryUrl={`/category/${news.terms?.news_category[0].slug}`}
                            image={news.extra_post_meta_data?.square_featured_image}
                            url={`/news/${news.ID}`}
                            year={news.extra_post_meta_data?.q_date_name}
                            yearUrl={`/news/date/${news.extra_post_meta_data?.q_date_slug}`}
                            brand={news.extra_post_meta_data?.article_brand_name}
                            brandUrl={`/brands/${news.extra_post_meta_data?.article_brand_slug}`}
                        />
                    ))}
                </div>
            </div>
        </StickySection>
    </>);
}

export default News;
