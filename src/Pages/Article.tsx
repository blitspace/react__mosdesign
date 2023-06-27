import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';

import INewsItem from "../types/INewsItem";
import StickySection from "../StickySection";
import PageHero from "../PageHero";
import { Col1, Col2, ArticleLayoutCols2 } from "../Layouts/ArticleLayoutCols2";
import { ASSETS_SOURCE } from "../settings";
import { Header1, Header3 } from "../Headers";
import newsItemQuery from "../queries/newsItem";
import BackLink from "../BackLink";
import routes from "../utils/routes";

import ArticleTags from "../ArticleTags";

function Article() {
    const { newsID } = useParams();
    const newsData = newsItemQuery(newsID);
    let year = '';
    let newsCategoryID = '';
    let brandID = '';

    if (newsData.isLoading) {
        // return <div className="w-full mx-auto max-w-mos-content px-mos-md py-mos-md">Loading</div>;
        return <PageHero isLoading={true} title="Loading..." image={`${ASSETS_SOURCE}/wp-content/uploads/2015/03/News-header.jpg`} />;
    }

    if (newsData.isSuccess) {
        year = newsData.data?.date.split('T')[0].split('-')[0];
        newsCategoryID = newsData.data?.terms.news_category[0].ID.toString();
        brandID = newsData.data?.terms.brand[0].ID.toString();
    }

    return (<>
        <PageHero
            title=""
            image={newsData.data?.featured_image.guid}
        />
        <StickySection top={'[88px]'}>
            <div className="w-full min-h-screen mx-auto max-w-mos-content px-mos-md py-mos-md">
                <BackLink link="/news" />

                <ArticleLayoutCols2><>
                    <Col1><>
                        <div
                            className="inline-block px-4 py-1 text-white uppercase rounded-full mb-mos-sm bg-mos-footer hover:bg-mos-red"
                        >
                            <Link
                                to={routes.news.category(newsCategoryID)}
                                className="hover:text-current"
                            >{newsData.data?.terms.news_category[0].name}</Link>
                        </div>

                        <div className="text-2xl mb-mos-sm">
                            <Link
                                to={routes.news.year(year)}
                            >{year}</Link>
                        </div>

                        <div className="text-2xl mb-mos-sm">
                            <Link
                                to={routes.brands.index(brandID)}
                            >{newsData.data?.extra_post_meta_data.article_brand_name}</Link>
                        </div>

                        <div className="text-sm mb-mos-sm">
                            <strong>Tags</strong> | {
                                newsData?.data?.terms
                                    ? <ArticleTags postTag={newsData.data?.terms.post_tag} />
                                    : null
                            }
                        </div>
                        <div className="flex flex-row gap-4">
                            <a href="/"><TwitterIcon /></a>
                            <a href="/"><PinterestIcon /></a>
                            <a href="/"><InstagramIcon /></a>
                            <a href="/"><FacebookIcon /></a>
                        </div>
                    </></Col1>
                    <Col2><>
                        <Header1>{newsData.data?.title}</Header1>
                        <Header3>{newsData.data?.extra_post_meta_data?.article_sub_title}</Header3>
                        <div dangerouslySetInnerHTML={{ __html: newsData.data?.content || '' }} />
                    </></Col2>
                </></ArticleLayoutCols2>
            </div>
        </StickySection>
    </>);
}

export default Article;
