import { Link } from "react-router-dom";

function Pager({ data, url, currentPage }: { data: number[], url: string, currentPage: number | string }) {
    return (
        <div>
            <ul className="flex flex-row justify-center gap-4">
                {data.map(i => {
                    let active = i === currentPage;
                    let bg = active
                        ? 'text-white bg-mos-red'
                        : 'text-mos-footer bg-white border-2 border-mos-footer';
                    return <li key={i}>
                        <Link
                            className={`flex flex-row items-center justify-center w-10 h-10 rounded-full ${bg}
                            hover:bg-mos-red hover:border-mos-red hover:text-white`}
                            to={`${url}/${i + 1}`}
                        >{i + 1}{active}</Link>
                    </li>
                })}
            </ul>
        </div>
    );
}

export default Pager;