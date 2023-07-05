import { useQuery } from "@tanstack/react-query";
import INewsItem from "../types/INewsItem";

import { ASSETS_SOURCE } from "../settings";

type TNewsQuery = {
    data: {
        newsItems: INewsItem[],
        totalItems: number,
        totalPages: number
    }
};

type Params = {
  queryKey: [string, { id: number }];
};

const newsQuery = (page: string | undefined) => {
    return useQuery<TNewsQuery, Error>(['news', 'data', page], async (params: Params) => {
        let __page = typeof page !== 'undefined'
            ? parseInt(page) ? parseInt(page) + 1 : 0
            : null;

        let _page = __page ? `?page=${page}` : '';
        let url = `${ASSETS_SOURCE}/wp-json/wp/v2/mos_news${_page}`;

        const res = await fetch(url);
        const data = await res.json();
        
        return {
            newsItems: data,
            totalItems: res.headers.get('X-Wp-Total'),
            totalPages: res.headers.get('X-Wp-Totalpages'),
        };
    });
};

export default newsQuery;
