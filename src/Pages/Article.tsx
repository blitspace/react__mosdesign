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
import utils from "../utils/utils";
import tagsQuery from "../queries/tags";
import { IPost_Tag } from "../types/INewsItemTerms";

type Article_Tag = {id: number, name: string};

function Article() {
    const { newsID } = useParams();
    const newsData = newsItemQuery(newsID);
    const tagsData = tagsQuery();
    let year = '';
    let newsCategoryID = '';
    let brandID = '';
    let data: INewsItem | undefined = undefined;
    let articleTags: IPost_Tag[];


    if (newsData.isLoading) {
        // return <div className="w-full mx-auto max-w-mos-content px-mos-md py-mos-md">Loading</div>;
        return <PageHero isLoading={true} title="Loading..." image={`${ASSETS_SOURCE}/wp-content/uploads/2015/03/News-header.jpg`} />;
    }

    if (newsData.isSuccess) {
        data = newsData.data[0];
        year = data?.extra_meta?.q_date_name;
        newsCategoryID = '123';
        brandID = 'qwe';
    }

    if (newsData.isSuccess && tagsData.isSuccess) {
        articleTags = data?.tags.map<IPost_Tag>(i => {
            const search = tagsData.data?.filter(j => j.ID == i);

            return search.length ? search[0] : undefined;
        });
    }

    return (<>
        <PageHero
            title=""
            image={newsData.data[0]?.featured_img_url}
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
                            >{data?.extra_meta.news_category.name}</Link>
                        </div>

                        <div className="text-2xl mb-mos-sm">
                            <Link
                                to={routes.news.year(year)}
                            >{year}</Link>
                        </div>

                        <div className="text-2xl mb-mos-sm">
                            <Link
                                to={routes.brands.index(brandID)}
                            >{data?.extra_meta.article_brand_name}</Link>
                        </div>

                        <div className="text-sm mb-mos-sm">
                            <strong>Tags</strong> | {
                                data?.tags
                                    ? <ArticleTags postTag={articleTags} />
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
                        <Header1>{utils.htmlEntities(data?.title.rendered)}</Header1>
                        <Header3>{utils.htmlEntities(data?.extra_meta?.article_sub_title)}</Header3>
                        <div
                            dangerouslySetInnerHTML={{ __html: data?.content.rendered.replaceAll('<p>&nbsp;</p>', '') || '' }}
                        />
                    </></Col2>
                </></ArticleLayoutCols2>
            </div>
        </StickySection>
    </>);
}

export default Article;
