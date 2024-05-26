// @ts-nocheck
import BrandItemThumb from "./BrandItemThumb";
import brandsQuery from "./queries/brands";
import IBrandItem from "./types/IBrandItem";

function MoreBrands({ exclude }: { exclude: number | string | undefined }) {
    const brandsData = brandsQuery();

    if (brandsData.isLoading) {
        return <div className="w-full mx-auto max-w-mos-content px-mos-md py-mos-md">Loading</div>;
    }

    return (
        <section>
            <div className="sticky z-10 text-2xl text-center text-white uppercase bg-gray-400 top-below-nav py-mos-sm">More Brands</div>
            <div className="w-full mx-auto min-h-fit max-w-mos-content px-mos-md py-mos-md">
                <div className="grid grid-cols-2 gap-6 md:grid-cols-3 mb-mos-md">
                    {brandsData.isFetched && brandsData?.data?.map((i: IBrandItem) => {
                        if (i.ID == exclude) return null;

                        return <BrandItemThumb
                            key={i.ID}
                            id={i.ID}
                            title={i.title}
                            image={i.extra_post_meta_data.square_featured_image}
                            fontSize="2xl"
                        />
                    })}
                </div>
            </div>
        </section>
    );
}

export default MoreBrands;
