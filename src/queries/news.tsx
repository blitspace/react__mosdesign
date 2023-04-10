import { useQuery } from "@tanstack/react-query";
import INewsItem from "../types/INewsItem";


const newsQuery = (page: number | string | undefined) => {
    return useQuery<INewsItem[], Error>(['news', 'data', page], () => {
        let _page = page ? `&page=${page}` : '';
        let url = `http://mosdesign.local/wp-json/posts?type=mos_news${_page}`;
        return fetch(url)
            .then(res => res.json())
    });
};

export default newsQuery;
