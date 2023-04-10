import { Link, useParams } from "react-router-dom";

import PageHero from "../PageHero";
import StickySection from "../StickySection";
import { ArticleLayoutCols2, Col1, Col2 } from "../Layouts/ArticleLayoutCols2";
import MoreBrands from "../MoreBrands";
import brandItemQuery from "../queries/brandItem";
import BackLink from "../BackLink";


function Brand() {
    const { brandID } = useParams();
    const brandData = brandItemQuery(brandID);

    if (brandData.isLoading) {
        return <div className="w-full mx-auto max-w-mos-content px-mos-md py-mos-md">Loading</div>;
    }

    return (<>
        <PageHero
            title=""
            image={brandData.data?.featured_image.source}
        />
        <StickySection top={'[88px]'}><>
            <div className="w-full mx-auto min-h-fit max-w-mos-content px-mos-md py-mos-md">
                <BackLink />
                <div className="mb-mos-md"><img src={`${brandData.data?.brand_logo}`} /></div>
                <ArticleLayoutCols2>
                    <>
                        <Col1>
                            <ul>
                                {[1, 2, 3, 4,].map(i => (
                                    <li className="mb-mos-sm" key={i}>
                                        <Link to="#">Article Lorem {i}</Link>
                                    </li>
                                ))}
                            </ul>
                        </Col1>
                        <Col2>
                            <div dangerouslySetInnerHTML={{__html: brandData.data?.content || ''}} />
                        </Col2>
                    </>
                </ArticleLayoutCols2>
            </div>
            <MoreBrands />
        </></StickySection>
    </>);
}

export default Brand;
