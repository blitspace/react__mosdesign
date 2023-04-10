import { useQuery } from "@tanstack/react-query";
import { ASSETS_SOURCE } from "../settings";
import IBrandItem from "../types/IBrandItem";


const brandsQuery = () => {
    return useQuery<IBrandItem[] | Error>(['brands', 'data'], () => {
        let url = `${ASSETS_SOURCE}/wp-json/posts?type=mos_brands`;
        return fetch(url)
            .then(res => res.json())
    });
};

export default brandsQuery;
