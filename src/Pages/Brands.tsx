import PageHero from "../PageHero";
import StickySection from "../StickySection";
import BrandItemThumb from "../BrandItemThumb";
import brandsQuery from "../queries/brands";


function Brands() {
    const brandsData = brandsQuery();

    if (brandsData.isLoading) {
        return <div className="w-full mx-auto max-w-mos-content px-mos-md py-mos-md">Loading</div>;
    }

    return (<>
        <PageHero
            title="Our Brands"
            image="http://mosdesign.local/wp-content/uploads/2014/12/Brands-header.jpg"
        />
        <StickySection top={'[88px]'}>
            <div className="w-full min-h-screen mx-auto max-w-mos-content px-mos-md py-mos-md">
                <div className="w-full mx-auto max-w-mos-content">
                    <div className="grid gap-6 grid-col-1 md:grid-cols-2 mb-mos-md">
                        {brandsData.isFetched && brandsData?.data?.map(i => (
                            <BrandItemThumb
                                key={i.ID}
                                id={i.ID}
                                title={i.title}
                                image={i.extra_post_meta_data.square_featured_image}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </StickySection>
    </>);
}

export default Brands;
