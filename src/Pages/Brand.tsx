import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { ASSETS_SOURCE } from "../settings";
import IBrandItem from "../types/IBrandItem";
import PageHero from "../PageHero";
import StickySection from "../StickySection";
import { ArticleLayoutCols2, Col1, Col2 } from "../Layouts/ArticleLayoutCols2";
import { Header1 } from "../Headers";

function Brand() {
    const { brandID } = useParams();
    const brandData = useQuery<IBrandItem, Error>(['brand', brandID], () =>
        fetch(`${ASSETS_SOURCE}/wp-json/posts/${brandID}`)
            .then(res => res.json())
    );

    if (brandData.isLoading) {
        return <div className="w-full mx-auto max-w-mos-content px-mos-md py-mos-md">Loading</div>;
    }

    return (<>
        <PageHero
            title=""
            image={brandData.data?.featured_image.source}
        />
        <StickySection top={'[88px]'}>
            <div className="w-full min-h-screen mx-auto max-w-mos-content px-mos-md py-mos-md">
                {/* <Header1>{brandData.data?.title}</Header1> */}
                <div className="mb-mos-md"><img src={`${brandData.data?.brand_logo}`} /></div>
                <ArticleLayoutCols2><>
                    <Col1><>
                        <ul>
                            {[1, 2, 3, 4,].map(i => (<li className="mb-mos-sm">
                                <Link to="#">Article Lorem {i}</Link>
                            </li>))}
                        </ul>
                    </></Col1>
                    <Col2><>
                        <div dangerouslySetInnerHTML={{__html: brandData.data?.content || ''}} />
                    </></Col2>
                </></ArticleLayoutCols2>
            </div>
        </StickySection>
    </>);
}

export default Brand;
