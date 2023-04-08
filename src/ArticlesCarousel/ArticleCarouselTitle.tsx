function ArticleCarouselTitle({ title, subTitle }: { title: string, subTitle: string }) {
    return (
        <div className="text-center bg-white/60 backdrop-blur-sm py-mos-lg">
            <h3 className="text-5xl text-gray-700">{title}</h3>
            <hr className="w-full max-w-md mx-auto border my-mos-md border-mos-red" />
            <h4 className="text-3xl text-gray-700 uppercase">{subTitle}</h4>
        </div>
    );
}

export default ArticleCarouselTitle;
