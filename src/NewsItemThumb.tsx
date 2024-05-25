import { Link, useParams } from "react-router-dom";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

type NewsItemThumbProps = {
    title?: string,
    subtitle?: string,
    category?: string,
    brand?: string,
    brandUrl?: string,
    year?: string,
    yearUrl?: string,
    image?: string,
    url?: string,
    categoryUrl?: string,
    mode?: string,
}

function NewsItemThumb({ title, subtitle, brand, brandUrl, year, yearUrl, category, categoryUrl, image, url, mode }: NewsItemThumbProps) {
    let titleBg = mode !== 'SIMPLE' ? 'backdrop-blur-sm bg-white/80' : '';
    // let titleClasses = 'overflow-ellipsis overflow-hidden whitespace-nowrap w-1/3';
    let titleClasses = '';

    return (
        <div className="cursor-pointer relative flex flex-col w-full aspect-square" title={(`${title} | ${subtitle}`) || ''}>
            {mode === 'SIMPLE' && (
                <div
                    className={`flex flex-col justify-between w-full overflow-hidden
                        bg-center bg-cover bg-slate-200 aspect-video`}
                    style={{ backgroundImage: `url('${image}')`}}
                ></div>
            )}

            {mode !== 'SIMPLE' && (
                <div
                    className={`flex flex-col justify-between w-full overflow-hidden
                        bg-center bg-cover bg-slate-200 aspect-square`}
                    style={{ backgroundImage: `url('${image}')`}}
                >
                    <div className="text-right p-mos-sm">
                        <Link
                            className="px-4 py-2 text-sm text-white uppercase rounded-full bg-mos-footer hover:bg-red-600 hover:text-white"
                            to={categoryUrl ?? ''}
                        >{category}</Link>
                    </div>
                </div>
            )}

            <div className={`absolute w-full bottom-0 flex flex-row gap-4 p-mos-sm ${titleBg}`}>
                <div className="flex-grow">
                    <h3
                        className={`text-2xl font-normal mb-mos-xxs ${titleClasses}`}
                    >{title}</h3>
                    <div
                        className={`font-light uppercase text-md mb-mos-xxs ${titleClasses}`}
                    >{subtitle}</div>
                    <div
                        className="font-light text-md"
                    ><Link to={yearUrl ?? ''}>{year}</Link> | <Link to={brandUrl ?? ''}>{brand}</Link></div>
                </div>

                <div className="basis-[50px] flex-shrink-0 flex flex-col justify-center">
                    <Link
                        className={`flex flex-col items-center justify-center w-full
                            transition-colors border-2 rounded-full group
                            border-mos-footer aspect-square hover:bg-mos-red hover:border-mos-red
                        `}
                        to={url}
                    >
                        <ChevronRightIcon fontSize="large" className="text-mos-footer group-hover:text-white" />
                    </Link>
                </div>
            </div>
        </div>);
}
export default NewsItemThumb;