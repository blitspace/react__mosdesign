interface IBrandItem {
    featured_image_url: string;
    id: number;
    title: {
        rendered: string,
    },
    content: {
        rendered: string,
    },
    featured_media: string,
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
