import { useQuery } from "@tanstack/react-query";
import { ASSETS_SOURCE } from "../settings";
import IBrandItem from "../types/IBrandItem";


const brandsQuery = () => {
    return useQuery<IBrandItem[]>(['brands', 'data'], async () => {
        // let url = `${ASSETS_SOURCE}/wp-json/posts?type=mos_brands`;
        let url = `${ASSETS_SOURCE}/wp-json/wp/v2/mos_brands`;
        const res = await fetch(url);
        // console.log('==>', await res.json());
        const data = await res.json();
        return data;
    });
};

export default brandsQuery;
