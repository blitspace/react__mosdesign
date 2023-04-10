import { useQuery } from "@tanstack/react-query";
import { ASSETS_SOURCE } from "../settings";
import INewsItem from "../types/INewsItem";


const newsItemQuery = (newsID: string | number | undefined) => {
    return useQuery<INewsItem, Error>(['news', newsID], () =>
        fetch(`${ASSETS_SOURCE}/wp-json/posts/${newsID}`)
            .then(res => res.json())
    );
};

export default newsItemQuery;
