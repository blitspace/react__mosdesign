import { Link } from "react-router-dom";

function BrandItemThumb({ id, title, image }: { id: number, title: string, image: string }) {
    return (
        <div className="relative w-full aspect-square" title={`${title}`}>
            <Link to={`/brands/${id}`} className="absolute top-0 bottom-0 left-0 right-0 transition-colors bg-black/10 hover:bg-black/60">
                <div className="flex flex-col items-center justify-center h-full">
                    <div className="text-3xl font-semibold tracking-wider text-white uppercase">{ title }</div>
                </div>
            </Link>
            <div
                className="flex flex-col items-center justify-center w-full overflow-hidden bg-center bg-cover aspect-square bg-slate-200"
                style={{ backgroundImage: `url('${image}')`}}
            >
            </div>
        </div>
    );
}

export default BrandItemThumb;
