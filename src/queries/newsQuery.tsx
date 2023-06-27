import { useQuery } from "@tanstack/react-query";
import INewsItem from "../types/INewsItem";

import { ASSETS_SOURCE } from "../settings";

type TNewsQuery = {newsItem: INewsItem[], totalPages: number};

const newsQuery = (page: number | string | undefined) => {
    return useQuery<TNewsQuery, Error>(['news', 'data', page], async () => {
        let __page = parseInt(page) ? parseInt(page) + 1 : 0;
        let _page = __page ? `?page=${page}` : '';
        let url = `${ASSETS_SOURCE}/wp-json/wp/v2/mos_news${_page}`;

        const res = await fetch(url);
        const data = await res.json();
        
        return {
            newsItems: data,
            totalPages: res.headers.get('X-Wp-Totalpages'),
        };
    });
};

export default newsQuery;
