export interface IPost_Tag {
    ID: number,
    name: string,
};

interface INewsItemTerms {
    mos_post_date: Array<{
        ID: number
    }>,
    post_tag: Array<IPost_Tag>,
    brand: Array<{
        ID: number
    }>,
    news_category: Array<{
        ID: number,
        name: string,
        slug: string,
    }>,
};

export default INewsItemTerms;
