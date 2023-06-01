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
import useQueryParams from "../hooks/queryParams";


function News() {
    const queryParams = useQueryParams();
    const { page } = useParams();

    const newsData = newsQuery(page);

    if (newsData.isLoading) {
        // return <div className="w-full mx-auto max-w-mos-content px-mos-md py-mos-md">Loading</div>;
        return <PageHero
            isLoading={true}
            title="Loading..."
            image={`${ASSETS_SOURCE}/wp-content/uploads/2015/03/News-header.jpg`}
        />;
    }

    return (<>
        <PageHero
            title="News"
            image={`${ASSETS_SOURCE}/wp-content/uploads/2015/03/News-header.jpg`}
        />

        test {queryParams.get('tag')}

        <StickySection top={'[88px]'}>
            <div className="w-full mx-auto max-w-mos-content px-mos-md py-mos-md">
                <div className="grid gap-6 grid-col-1 md:grid-cols-2 mb-mos-md">
                    {newsData.isFetched && newsData.data?.map(news => {
                        const id = news.ID;
                        const title = news.extra_post_meta_data?.article_title;
                        const subtitle = news.extra_post_meta_data?.article_sub_title;
                        const category = news.terms?.news_category[0].name;
                        const categoryUrl = routes.news.category(news.terms?.news_category[0].ID);
                        const image = news.extra_post_meta_data?.square_featured_image;
                        const articleUrl = routes.news.article(news.ID);
                        const year = news.extra_post_meta_data?.q_date_name;
                        const yearUrl = routes.news.year(news.extra_post_meta_data?.q_date_slug);
                        const brandName = news.extra_post_meta_data?.article_brand_name;
                        const brandUrl = routes.brands.index(news.extra_post_meta_data?.article_brand_slug);

                        return (
                            <ArticleItemThumb
                                key={id}
                                title={title}
                                subtitle={subtitle}
                                category={category}
                                categoryUrl={categoryUrl}
                                image={image}
                                url={articleUrl}
                                year={year}
                                yearUrl={yearUrl}
                                brand={brandName}
                                brandUrl={brandUrl}
                            />);
                        })}
                </div>
                <Pager data={[1, 2, 3, 4]} currentPage={parseInt(page || '1')} url="/news" />
            </div>
        </StickySection>
    </>);
}

export default News;
