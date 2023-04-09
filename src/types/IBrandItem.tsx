interface IBrandItem {
    ID: number;
    title: string,
    content: string,
    brand_logo: string,
    extra_post_meta_data: {
        square_featured_image: string,
    },
    featured_image: {
        ID: number,
        guid: string,
        source: string,
    }
}

export default IBrandItem;
