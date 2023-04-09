import { Link } from "react-router-dom";
import PageHero from "../PageHero";
import StickySection from "../StickySection";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { ASSETS_SOURCE } from "../settings";

function News() {
    return (<>
        <PageHero title="News" image={`${ASSETS_SOURCE}/wp-content/uploads/2015/03/News-header.jpg`} />
        <StickySection top={'[88px]'}>
            {/* <div className="min-h-screen p-mos-md"> */}
            <div className="w-full mx-auto max-w-mos-content px-mos-md py-mos-md">
                <div className="grid grid-cols-2 gap-6">
                    {[1, 2, 3, 4].map((i, idx) => (
                        <div key={idx} className="flex flex-col w-full aspect-square">
                            <div
                                className="flex flex-col justify-between w-full overflow-hidden bg-center bg-cover aspect-square"
                                style={{ backgroundImage: `url('${ASSETS_SOURCE}/wp-content/uploads/2014/07/BoConcept-Boston-Chair-thumbs.jpg')`}}
                            >
                                <div className="text-right p-mos-sm">
                                    <button className="px-4 py-2 text-sm text-white uppercase rounded-full bg-mos-footer">Category</button>
                                </div>
                                <div className="flex flex-row p-mos-sm bg-white/40 backdrop-blur-sm">
                                    <div className="flex-grow">
                                        <h3 className="text-2xl mb-mos-xs">Title {idx}</h3>
                                        <div className="text-xl font-light uppercase mb-mos-xs">Lorem Ipsum</div>
                                        <div className="text-lg font-light">2023 | Brand</div>
                                    </div>
                                    <div className="w-[50px] flex flex-col justify-center">
                                        <Link className="flex flex-col items-center justify-center w-full transition-colors border-2 rounded-full border-mos-red aspect-square hover:bg-mos-red" to="">
                                            <ChevronRightIcon fontSize="large" className="text-mos-red hover:text-white" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </StickySection>
    </>);
}

export default News;
