import { Link } from "react-router-dom";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { ASSETS_SOURCE } from "./settings";

type ArticleItemThumbProps = {
    title: string,
    subtitle: string,
    category: string,
    brand: string,
    brandUrl: string,
    year: string,
    yearUrl: string,
    image: string,
    url: string,
    categoryUrl: string,
}

function ArticleItemThumb({ title, subtitle, brand, brandUrl, year, yearUrl, category, categoryUrl, image, url }: ArticleItemThumbProps) {
    return (
        <div className="flex flex-col w-full aspect-square">
            <div
                className="flex flex-col justify-between w-full overflow-hidden bg-center bg-cover aspect-square"
                style={{ backgroundImage: `url('${image}')`}}
            >
                <div className="text-right p-mos-sm">
                    <Link className="px-4 py-2 text-sm text-white uppercase rounded-full bg-mos-footer" to={categoryUrl}>{ category }</Link>
                </div>
                <div className="flex flex-row p-mos-sm bg-white/40 backdrop-blur-sm">
                    <div className="flex-grow">
                        <h3 className="text-2xl mb-mos-xxs">{ title }</h3>
                        <div className="font-light uppercase text-md mb-mos-xxs">{ subtitle }</div>
                        <div className="font-light text-md"><Link to={yearUrl}>{ year }</Link> | <Link to={brandUrl}>{ brand }</Link></div>
                    </div>
                    <div className="w-[50px] flex flex-col justify-center">
                        <Link
                            className="flex flex-col items-center justify-center w-full transition-colors border-2 rounded-full border-mos-red aspect-square hover:bg-mos-red"
                            to={url}
                        >
                            <ChevronRightIcon fontSize="large" className="text-mos-red hover:text-white" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ArticleItemThumb;