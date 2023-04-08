import data from "../public/articles.json";
import ArticleCarouselItem from "./ArticleCarouselItem";


function ArticlesCarousel() {
    return (
        <section>
            {data.records.map((i, idx) => (
                <ArticleCarouselItem key={idx} data={i} />)
            )}
        </section>
    );
}

export default ArticlesCarousel;
