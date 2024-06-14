import { useQuery } from "@tanstack/react-query";
import INewsItem from "../types/INewsItem";

import { ASSETS_SOURCE } from "../settings";

type TNewsQuery = {
    newsItems?: INewsItem[],
    totalItems?: any,
    totalPages?: any,
};

const newsQuery = (page: any = 1, max = 10) => {
    return useQuery<TNewsQuery>(['news', 'data', page], async () => {
        let __page = typeof page !== 'undefined'
            ? page ? parseInt(page) + 1 : 0
            : null;

        let _page = __page ? `?page=${page}` : '';
        let url = `${ASSETS_SOURCE}/wp-json/wp/v2/mos_news${_page}&per_page=${max}`;

        const res = await fetch(url);
        const data = await res.json();

        const totalItems = res?.headers?.get('X-Wp-Total');
        const totalPages = res?.headers?.get('X-Wp-Totalpages');
        
        return {
            newsItems: data,
            totalItems: totalItems,
            totalPages: totalPages,
        };
    });
};

export default newsQuery;
