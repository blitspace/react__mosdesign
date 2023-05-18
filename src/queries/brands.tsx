import { useQuery } from "@tanstack/react-query";
import { ASSETS_SOURCE } from "../settings";
import IBrandItem from "../types/IBrandItem";


const brandsQuery = () => {
    return useQuery<IBrandItem[] | Error>(['brands', 'data'], async () => {
        let url = `${ASSETS_SOURCE}/wp-json/posts?type=mos_brands`;
        const res = await fetch(url);
        return await res.json();
    });
};

export default brandsQuery;
