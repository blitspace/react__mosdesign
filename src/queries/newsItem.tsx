import { useQuery } from "@tanstack/react-query";
import { ASSETS_SOURCE } from "../settings";
import INewsItem from "../types/INewsItem";


const newsItemQuery = (newsID: string | undefined) => {
    return useQuery<INewsItem[], Error>(['news', newsID], async () => {
        const url: string = `${ASSETS_SOURCE}/wp-json/wp/v2/mos_news?include=${newsID}`;
        const res = await fetch(url);
        const data = await res.json();

        return data;
    });
};

export default newsItemQuery;
