import { useQuery } from "@tanstack/react-query";
import { ASSETS_SOURCE } from "../settings";
import IBrandItem from "../types/IBrandItem";


const brandItemQuery = (brandID: number | string | undefined) => {
    return useQuery<IBrandItem, Error>(['brand', brandID], () =>
        fetch(`${ASSETS_SOURCE}/wp-json/posts/${brandID}`)
            .then(res => res.json())
    );
};

export default brandItemQuery;
