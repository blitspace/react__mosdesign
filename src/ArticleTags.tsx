import { Link } from "react-router-dom";
import { IPost_Tag } from "./types/INewsItemTerms";

function ArticleTags({ postTag } : { postTag: IPost_Tag[] }) {
    return <>{postTag.map((i: IPost_Tag, indx, arry) => (
        <Link
          className="inline-block mr-1 hover:underline"
          to={`/tags/${i.ID}`}
        ><span><em>{i.name}</em></span>{indx !== (arry.length - 1) ? ',' : ''}</Link>
    ))}</>;
}

export default ArticleTags;
