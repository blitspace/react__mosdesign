import PageHero from "../PageHero";
import StickySection from "../StickySection";
import { ASSETS_SOURCE } from "../settings";
import NewsItemThumb from "../NewsItemThumb";
import { useQuery } from "@tanstack/react-query";
import INewsItem from "../types/INewsItem";
import { useParams } from "react-router-dom";
import Pager from "../Pager";
import newsQuery from "../queries/newsQuery";
import routes from "../utils/routes";
import useQueryParams from "../hooks/queryParams";
import utils from "../utils/utils";


function NewsIndex() {
    const queryParams = useQueryParams();
    const { page } = useParams();

    const newsData = newsQuery(page);

    if (newsData.isLoading) {
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

        {/* test {queryParams.get('tag')} */}

        <StickySection top={'[88px]'}>
            <div className="w-full mx-auto max-w-mos-content px-mos-md py-mos-md">
                <div className="grid gap-6 grid-col-1 md:grid-cols-2 mb-mos-md">
                    <>
                    { newsData.isFetched && console.log(newsData.data) }
                    </>
                    {
                        newsData.isFetched && newsData.data?.newsItems?.map((news: INewsItem) => {
                            const id = news.id;
                            const tags = news.tags;
                            // const retrievedTitle = utils.htmlEntities(news.title.rendered).split(':');
                            const title = news.title?.rendered;
                            const featureImage = news.featured_img_url;
                            const date = news.date;
                            const brandName = news.article_brand_name;
                            const category = news.news_category;
                            const year = news.quarterly_year;
                            // const subtitle = retrievedTitle[1];

                            // const category = news.extra_meta.news_category.name;
                            // const categoryUrl = routes.news.category();
                            // const categoryUrl = '';
                            // const image = news.extra_meta.square_featured_image;
                            // const articleUrl = routes.news.article(news.id);;
                            // const year = news.date.split(':')[0].split('-')[0];
                            // const yearUrl = routes.news.year(year);
                            // const brandName = utils.htmlEntities(news.extra_meta.article_brand_name);
                            // const brandUrl = '';
                            // const brandUrl = routes.brands.index(news.extra_post_meta_data?.article_brand_slug);


                            return (
                                // <div key={id}>
                                //     <p>
                                //         {id} -- {title} -- {brandName}
                                //     </p>
                                //     <div>
                                //         <img src={featureImage} />
                                //     </div>
                                //     <div>
                                //         {/* {tags} */}
                                //     </div>
                                // </div>
                                <NewsItemThumb
                                    key={id}
                                    title={title}
                                    // subtitle={subtitle}
                                    category={category}
                                    // categoryUrl={categoryUrl}
                                    image={featureImage}
                                    // url={articleUrl}
                                    year={year}
                                    // yearUrl={yearUrl}
                                    brand={brandName}
                                    // brandUrl={brandUrl}
                                />
                            );
                        })
                    }
                    {/* {newsData.isFetched && newsData.data?.map((news: INewsItem) => {
                        // const id = news.id;
                        // const title = news.title;
                        console.log('=>', news);
                        // const subtitle = '';
                        // const category = '';
                        // const categoryUrl = '';
                        // const image = '';
                        // const articleUrl = '';
                        // const year = '';
                        // const yearUrl = '';
                        // const brandName = '';
                        // const brandUrl = '';
                        // const brandUrl = routes.brands.index(news.extra_post_meta_data?.article_brand_slug);

                        return (<div key={news.id}>{news.title}</div>);
                            // <ArticleItemThumb
                            //     key={id}
                            //     title={title}
                            //     subtitle={subtitle}
                            //     category={category}
                            //     categoryUrl={categoryUrl}
                            //     image={image}
                            //     url={articleUrl}
                            //     year={year}
                            //     yearUrl={yearUrl}
                            //     brand={brandName}
                            //     brandUrl={brandUrl}
                            // />);
                        // );
                    })} */}
                </div>
                <Pager data={[...Array(parseInt(newsData.data?.totalPages)).keys()]} currentPage={parseInt(page || '1')} url="/news" />
            </div>
        </StickySection>
    </>);
}

export default NewsIndex;
