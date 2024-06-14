import { useQuery } from "@tanstack/react-query";
import { ASSETS_SOURCE } from "../settings";
import IBrandItem from "../types/IBrandItem";


const brandsQuery = () => {
    return useQuery<IBrandItem[]>(['brands', 'data'], async () => {
        const url = `${ASSETS_SOURCE}/wp-json/wp/v2/mos_brands`;
        const res = await fetch(url);
        const data = await res.json();

        return data;
    });
};

export default brandsQuery;
