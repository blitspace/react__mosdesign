import { Link } from "react-router-dom";

function Pager({ data, url }: { data: number[], url: string }) {
    return (
        <div>
            <ul className="flex flex-row gap-2">
                {data.map(i => {
                    return <li key={i}>
                        <Link to={`${url}/${i}`}>{i}</Link>
                    </li>
                })}
            </ul>
        </div>
    );
}

export default Pager;