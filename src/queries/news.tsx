import { useQuery } from "@tanstack/react-query";
import INewsItem from "../types/INewsItem";
import { ASSETS_SOURCE } from "../settings";

const newsQuery = (page: number | string | undefined) => {
    return useQuery<INewsItem[], Error>(['news', 'data', page], async () => {
        let _page = page ? `&page=${page}` : '';
        let url = `${ASSETS_SOURCE}/wp-json/posts?type=mos_news${_page}`;

        const res = await fetch(url);
        return await res.json();
    });
};

export default newsQuery;
