import INewsItemTerms from "./INewsItemTerms";

interface INewsItem {
    id: number,
    title: { rendered: string },
    status: string,
    type: string,
    author: {
        ID: number
        // ...
    },
    content: string,
    link: string,
    date: string,
    slug: string,
    // ...
    extra_post_meta_data: {
        square_featured_image: string,
        q_date_name: string,
        q_date_slug: string,
        article_title: string,
        article_sub_title: string,
        article_brand_name: string,
        article_brand_slug: string,
    }
    featured_image: {
        ID: number,
        guid: string,
    },
    featured_img_url: string,
    terms: INewsItemTerms,
    source: string,
    tags: number[],
}

export default INewsItem;
