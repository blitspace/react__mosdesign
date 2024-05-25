import INewsItemTerms from "./INewsItemTerms";

interface INewsItem {
    id?: number,
    title?: { rendered: string },
    status?: string,
    type?: string,
    author?:  number,
    content?: { rendered: string, },
    excerpt?: { rendered: string, },
    link?: string,
    date?: string,
    slug?: string,
    // ...
    featured_media?: number,
    featured_img_url?: string,
    terms?: INewsItemTerms,
    article_brand_name?: string,
    source?: string,
    tags?: number[],
    meta?: {
        ngg_post_thumbnail?:  number,
    },
    news_category?: string,
    quarterly_year?: string,
    extra_meta?: {
        square_featured_image?: string,
        q_date_name?: string,
        q_date_slug?: string,
        article_title?: string,
        article_sub_title?: string,
        article_brand_name?: string,
        article_brand_slug?: string,

        news_category?: {
            name?: string,
            slug?: string,
            archive_permalink?: string,
        }
    },
}

export default INewsItem;
