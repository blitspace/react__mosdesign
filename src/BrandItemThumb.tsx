import { Link } from "react-router-dom";

type BrandItemThumbProps = {
    id: number,
    title: string,
    image: string,
    fontSize?: '2xl' | '3xl',
};

function BrandItemThumb({ id, title, image, fontSize = '3xl' }: BrandItemThumbProps) {
    return (
        <div className="relative w-full aspect-square" title={`${title}`}>
            <Link
                to={`/brands/${id}`}
                className="absolute top-0 bottom-0 left-0 right-0 transition-colors duration-300 group bg-black/10 hover:bg-black/60"
            >
                <div className="flex flex-col items-center justify-center h-full">
                    <div className={`text-${fontSize} font-semibold tracking-wider text-white uppercase transition-all duration-300 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100`}>{ title }</div>
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
