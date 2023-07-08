import { ReactElement } from "react";
import newsQuery from "./queries/newsQuery";
import INewsItem from "./types/INewsItem";
import NewsItemThumb from "./NewsItemThumb";
import routes from "./utils/routes";
import utils from "./utils/utils";


function NewsArticleLatestPosts() {
    const newsData = newsQuery(1, 3);

    if (newsData.isSuccess) {
        return (<>
            <section className="bg-white">
                <div className="xsticky xtop-below-nav">
                    <div
                        className="w-full text-2xl text-center text-white bg-gray-400 py-mos-sm"
                    >Latest Posts</div>
                </div>
                <div className="mx-auto max-w-mos-content px-mos-md py-mos-md">
                    <div className="grid grid-cols-3 gap-4">
                        {newsData.data?.newsItems.map((news: INewsItem) => {
                            const id = news.id;
                            const retrievedTitle = utils.htmlEntities(news.title.rendered).split(':');
                            const title = retrievedTitle[0];
                            const subtitle = retrievedTitle[1];

                            const category = news.extra_meta.news_category.name;
                            // const categoryUrl = routes.news.category();
                            const categoryUrl = '';
                            const image = news.extra_meta.square_featured_image;
                            const articleUrl = routes.news.article(news.id);;
                            const year = news.date.split(':')[0].split('-')[0];
                            const yearUrl = routes.news.year(year);
                            const brandName = utils.htmlEntities(news.extra_meta.article_brand_name);
                            const brandUrl = '';
                            // const brandUrl = routes.brands.index(news.extra_post_meta_data?.article_brand_slug);


                            return (
                                <NewsItemThumb
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
                                    mode="SIMPLE"
                                />
                            );
                        })}
                    </div>
                </div>
            </section>
        </>);
    } else {
        return null;
    }
}

export default NewsArticleLatestPosts;

