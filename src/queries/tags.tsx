import { useQuery } from "@tanstack/react-query";
import { ASSETS_SOURCE } from "../settings";
import IBrandItem from "../types/IBrandItem";


const tagsQuery = () => {
    return useQuery<IBrandItem[]>(['tags', 'data'], async () => {
        let url = `${ASSETS_SOURCE}/wp-json/blit/v1/all-tags`;
        const res = await fetch(url);
        return await res.json();
    });
};

export default tagsQuery;
