import { ASSETS_SOURCE } from "../settings";
import ArticleCarouselTitle from "./ArticleCarouselTitle";

function ArticleCarouselItem({ data }: { data: any }) {
    return (
        <div className="flex flex-col justify-center h-screen bg-center bg-cover" style={{ backgroundImage: `url("${ASSETS_SOURCE}/${data["cover-image"]}")` }}>
            <ArticleCarouselTitle title={data.title} subTitle={data["sub-title"]} />
        </div>
    );
}

export default ArticleCarouselItem;