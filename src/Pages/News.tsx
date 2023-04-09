import PageHero from "../PageHero";
import StickySection from "../StickySection";
import { ASSETS_SOURCE } from "../settings";
import ArticleItemThumb from "../ArticleItemThumb";

function News() {
    return (<>
        <PageHero title="News" image={`${ASSETS_SOURCE}/wp-content/uploads/2015/03/News-header.jpg`} />
        <StickySection top={'[88px]'}>
            {/* <div className="min-h-screen p-mos-md"> */}
            <div className="w-full mx-auto max-w-mos-content px-mos-md py-mos-md">
                <div className="grid grid-cols-2 gap-6">
                    {[...Array(15).keys()].map((i, idx) => (
                        <ArticleItemThumb
                            key={idx}
                            title="Amet nulla ut labore proident."
                            subtitle="Fugiat laborum est incididunt ad"
                            category="category"
                            categoryUrl="/category"
                            image={`${ASSETS_SOURCE}/wp-content/uploads/2014/07/BoConcept-Boston-Chair-thumbs.jpg`}
                            url="#"
                            year="2023"
                            yearUrl="/2023"
                            brand="brandname"
                            brandUrl="/brandname"
                        />
                    ))}
                </div>
            </div>
        </StickySection>
    </>);
}

export default News;
