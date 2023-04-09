interface INewsItem {
    ID: number,
    title: string,
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
    terms: {
        mos_post_date: Array<{
            ID: number
        }>,
        post_tag: Array<{
            ID: number
        }>,
        brand: Array<{
            ID: number
        }>,
        news_category: Array<{
            ID: number,
            name: string,
            slug: string,
        }>,
    }
}

export default INewsItem;
