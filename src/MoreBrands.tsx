import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import BrandItemThumb from "./BrandItemThumb";
import { ASSETS_SOURCE } from "./settings";
import IBrandItem from "./types/IBrandItem";

function MoreBrands() {
    const brandsData = useQuery<IBrandItem[] | Error>(['brands', 'data'], () => {
        let url = `${ASSETS_SOURCE}/wp-json/posts?type=mos_brands`;
        return fetch(url)
            .then(res => res.json())
    });

    if (brandsData.isLoading) {
        return <div className="w-full mx-auto max-w-mos-content px-mos-md py-mos-md">Loading</div>;
    }

    return (
        <section>
            <div className="text-2xl text-center text-white uppercase bg-gray-400 py-mos-sm">More Brands</div>
            <div className="w-full mx-auto min-h-fit max-w-mos-content px-mos-md py-mos-md">
                <div className="grid gap-6 grid-col-2 md:grid-cols-3 mb-mos-md">
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
        </section>
    );
}

export default MoreBrands;
