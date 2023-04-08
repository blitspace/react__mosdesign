import { Link } from "react-router-dom";
import PageHero from "../PageHero";
import StickySection from "../StickySection";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function News() {
    return (<>
        <PageHero title="News" image="http://mosdesign.local/wp-content/uploads/2015/03/News-header.jpg"/>
        <StickySection top={'[88px]'}>
            <div className="min-h-screen p-mos-md">
                <div className="grid grid-cols-2 gap-6">
                    {[1, 2, 3, 4].map((i, idx) => (
                        <div key={idx} className="flex flex-col w-full aspect-square">
                            <div
                                className="flex flex-col justify-between w-full overflow-hidden bg-center bg-cover aspect-square"
                                style={{ backgroundImage: "url('http://mosdesign.local/wp-content/uploads/2014/07/BoConcept-Boston-Chair-thumbs.jpg')"}}
                            >
                                <div className="text-right p-mos-sm">
                                    <button className="px-4 py-2 text-sm text-white uppercase rounded-full bg-mos-footer">Category</button>
                                </div>
                                <div className="flex flex-row p-mos-sm bg-white/40 backdrop-blur-sm">
                                    <div className="flex-grow">
                                        <h3 className="text-2xl">Title {idx}</h3>
                                        <div className="text-xl">Lorem Ipsum</div>
                                        <div className="text-lg">2023 | Brand</div>
                                    </div>
                                    <div className="">
                                        <Link className="w-5 h-5 border-2 rounded-full border-slate-600 aspect-square bg-slate-600" to=""><ChevronRightIcon /></Link>
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
