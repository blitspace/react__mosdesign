import PageHero from "../PageHero";
import StickySection from "../StickySection";
import BrandItemThumb from "../BrandItemThumb";
import brandsQuery from "../queries/brands";

import { ASSETS_SOURCE } from "../settings";
import IBrandItem from "../types/IBrandItem";

function Brands() {
    const brandsData = brandsQuery();
    const headerImg = `${ASSETS_SOURCE}/wp-content/uploads/2014/12/Brands-header.jpg`

    if (brandsData.isLoading) {
        return <div className="w-full mx-auto max-w-mos-content px-mos-md py-mos-md">Loading</div>;
    }

    if (brandsData.isFetched) {
        console.log('**', brandsData.data);
    }

    return (<>
        <PageHero
            title="Our Brands"
            image={headerImg}
        />
        <StickySection top={'[88px]'}>
            <div className="w-full min-h-screen mx-auto max-w-mos-content px-mos-md py-mos-md">
                <div className="w-full mx-auto max-w-mos-content">
                    <div className="grid gap-6 grid-col-1 md:grid-cols-2 mb-mos-md">
                        {/* {brandsData.isFetched && brandsData?.data?.map(i => <p>{i.id}</p>)} */}
                        {/* <hr /> */}
                        {/* {brandsData.isFetched && JSON.stringify(brandsData?.data)} */}
                        {/* {brandsData.isFetched && brandsData?.data?.map(i: IBrandItem[] => console.log(i))} */}
                        {brandsData.isFetched && brandsData?.data?.map((i: IBrandItem) => (
                            <BrandItemThumb
                                key={i.id}
                                id={i.id}
                                title={i.title?.rendered}
                                image={i.brand_logo}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </StickySection>
    </>);
}

export default Brands;
