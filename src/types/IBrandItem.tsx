interface IBrandItem {
    ID: number;
    title: string,
    content: string,
    extra_post_meta_data: {
        square_featured_image: string,
    }
}

export default IBrandItem;
