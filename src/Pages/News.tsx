import PageHero from "../PageHero";
import StickySection from "../StickySection";
import { ASSETS_SOURCE } from "../settings";
import ArticleItemThumb from "../ArticleItemThumb";
import { useQuery } from "@tanstack/react-query";
import INewsItem from "../types/INewsItem";
import { useParams } from "react-router-dom";
import Pager from "../Pager";
import newsQuery from "../queries/news";
import routes from "../utils/routes";


function News() {
    const { page } = useParams();

    const newsData = newsQuery(page);

    if (newsData.isLoading) {
        // return <div className="w-full mx-auto max-w-mos-content px-mos-md py-mos-md">Loading</div>;
        return <PageHero isLoading={true} title="Loading..." image={`${ASSETS_SOURCE}/wp-content/uploads/2015/03/News-header.jpg`} />;
    }

    return (<>
        <PageHero title="News" image={`${ASSETS_SOURCE}/wp-content/uploads/2015/03/News-header.jpg`} />
        <StickySection top={'[88px]'}>
            <div className="w-full mx-auto max-w-mos-content px-mos-md py-mos-md">
                <div className="grid gap-6 grid-col-1 md:grid-cols-2 mb-mos-md">
                    {newsData.isFetched && newsData.data?.map(news => (
                        <ArticleItemThumb
                            key={news.ID}
                            title={news.extra_post_meta_data?.article_title}
                            subtitle={news.extra_post_meta_data?.article_sub_title}
                            category={news.terms?.news_category[0].name}
                            categoryUrl={routes.news.category(news.terms?.news_category[0].ID)}
                            image={news.extra_post_meta_data?.square_featured_image}
                            url={routes.news.article(news.ID)}
                            year={news.extra_post_meta_data?.q_date_name}
                            yearUrl={routes.news.year(news.extra_post_meta_data?.q_date_slug)}
                            brand={news.extra_post_meta_data?.article_brand_name}
                            brandUrl={`/brands/${news.extra_post_meta_data?.article_brand_slug}`}
                        />
                    ))}
                </div>
                <Pager data={[1, 2, 3, 4]} currentPage={parseInt(page || '1')} url="/news" />
            </div>
        </StickySection>
    </>);
}

export default News;
