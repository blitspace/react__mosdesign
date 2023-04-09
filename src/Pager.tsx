import { Link } from "react-router-dom";

function Pager({ data, url }: { data: number[], url: string }) {
    return (
        <div>
            <ul className="flex flex-row justify-center gap-2">
                {data.map(i => {
                    return <li key={i}>
                        <Link
                            className="flex flex-row items-center justify-center w-8 h-8 text-white rounded-full bg-mos-footer hover:bg-mos-red hover:text-white"
                            to={`${url}/${i}`}
                        >{i}</Link>
                    </li>
                })}
            </ul>
        </div>
    );
}

export default Pager;