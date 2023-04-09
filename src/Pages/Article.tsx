import { useQuery } from "@tanstack/react-query";
import INewsItem from "../types/INewsItem";
import { Link, useParams } from "react-router-dom";
import StickySection from "../StickySection";
import PageHero from "../PageHero";

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';

import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

function Article() {
    const { newsID } = useParams();
    const newsData = useQuery<INewsItem, Error>(['news', newsID], () =>
        fetch(`http://mosdesign.local/wp-json/posts/${newsID}`)
            .then(res => res.json())
    );

    if (newsData.isLoading) {
        return <div className="w-full mx-auto max-w-mos-content px-mos-md py-mos-md">Loading</div>;
    }

    console.log(newsID);

    return (<>
        <PageHero
            title=""
            image={newsData.data?.featured_image.guid}
        />
        <StickySection top={'[88px]'}>
            <div className="w-full min-h-screen mx-auto max-w-mos-content px-mos-md py-mos-md">
                <div className="mb-mos-sm"><Link to="/news" className="flex gap-2"><KeyboardBackspaceIcon /> Back</Link></div>
                <article className="flex flex-col gap-6 md:flex-row">
                    <div className="order-2 w-full md:w-1/5 md:order-1">
                        <div className="inline-block px-4 py-1 text-white uppercase rounded-full mb-mos-sm bg-mos-footer">{newsData.data?.terms.news_category[0].name}</div>
                        <div className="text-2xl mb-mos-sm">{newsData.data?.date.split('T')[0].split('-')[0]}</div>
                        <div className="text-2xl mb-mos-sm">{newsData.data?.extra_post_meta_data.article_brand_name}</div>
                        <div className="text-sm mb-mos-sm">
                            <strong>Tags</strong> | {newsData.data?.terms.post_tag.map(i => (
                                <Link className="inline-block mr-2 hover:underline" to={`/tags/${i.ID}`}><span><em>{i.name}</em></span>,</Link>
                            ))}
                        </div>
                        <div className="flex flex-row gap-4">
                            <a href="/"><TwitterIcon /></a>
                            <a href="/"><PinterestIcon /></a>
                            <a href="/"><InstagramIcon /></a>
                            <a href="/"><FacebookIcon /></a>
                        </div>
                    </div>
                    <div className="order-1 w-4/5 md:order-2">
                        <h1 className="text-4xl mb-mos-md">{newsData.data?.title}</h1>
                        <h3 className="text-2xl uppercase mb-mos-lg">{newsData.data?.extra_post_meta_data?.article_sub_title}</h3>
                        <div dangerouslySetInnerHTML={{ __html: newsData.data?.content || '' }} />
                    </div>
                </article>
            </div>
        </StickySection>
    </>);
}

export default Article;
