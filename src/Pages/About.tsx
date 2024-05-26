import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import PageHero from "../PageHero";
import StickySection from "../StickySection";
import { ASSETS_SOURCE } from "../settings";


const textSize = 'text-2xl text-balance';
const floors = [0, 1, 2, 3];

function HeroJumpMenu() {
    const menu = [
        {
            label: 'Who We Are',
        },
        {
            label: 'What We Do',
        },
        {
            label: 'Floor Directory',
        }
    ];
    return (<div className={`bg-gray-900 text-white`}>
        <ul className={`flex flex-row justify-around`}>
            {
                menu.map(i => (
                    <li><a href="" className={`p-4 inline-block`}>{i.label}</a></li>
                ))
            }
        </ul>
    </div>);
}

function About() {
    return(<div style={{ height: '100vh', width: '100vw', background: '#ccc', }}>
        {/* <PageHero
            title="About"
            image={`${ASSETS_SOURCE}/wp-content/uploads/2014/12/About-header.jpg`}
            bottomComponent={<HeroJumpMenu />}
            downArrow={false}
        />  */}

        <div className={`bg-slate-400`} /> 

        <Parallax pages={8}>

            <ParallaxLayer offset={0} speed={0.05} >
                <div
                    className="bg-cover h-full"
                    style={{
                        backgroundImage: `url(${ASSETS_SOURCE}/wp-content/uploads/2014/12/About-header.jpg)`,
                    }}
                >
                </div>
            </ParallaxLayer>

            <ParallaxLayer offset={1} speed={0.5} factor={0.5} >
                {/* <div className="w-full mx-auto max-w-mos-content px-mos-md py-mos-md bg-white"> */}
                    <div
                        className={`py-8 text-center bg-white ${textSize}`}
                        style={{ textWrap: 'balance' }}
                    >
                        Enter an emporium of design, where luxury, function, balance, and creativity urbanity meet.
                    </div>
                {/* </div> */}
            </ParallaxLayer>

            <ParallaxLayer offset={1.2} speed={0.75} >
                <div
                    className="bg-cover h-full"
                    style={{
                        backgroundImage: `url(${ASSETS_SOURCE}/wp-content/uploads/2015/01/About-01.jpg)`,
                    }}
                >
                </div>
            </ParallaxLayer>

            <ParallaxLayer offset={1.98} speed={1} >
                <div className="bg-white">
                    <div className={`flex flex-row h-[50vh]`}>
                        <div
                            className={`basis-1/2 self-center text-center ${textSize}`}
                            style={{ textWrap: 'balance' }}
                        >Let your senses guide you as you navigate our wide array of sensuous, yet functional design choices.</div>
                        <div
                            className="basis-1/2 bg-cover"
                            style={{
                                backgroundImage: `url(${ASSETS_SOURCE}/wp-content/uploads/2015/01/About-02.jpg)`,
                            }}
                        >&nbsp;</div>
                    </div>
                    <div className={`flex flex-row h-[50vh]`}>
                        <div
                            className="basis-1/2 bg-cover"
                            style={{
                                backgroundImage: `url(${ASSETS_SOURCE}/wp-content/uploads/2015/01/About-03.jpg)`,
                            }}
                        >&nbsp;</div>
                        <div
                            className={`basis-1/2 self-center text-center ${textSize}`}
                            style={{ textWrap: 'balance' }}
                        >Develop a space that's uniquely yours, a room for you to simply be yourself.</div>
                    </div>
                </div>
            </ParallaxLayer>

            <ParallaxLayer offset={2} speed={1.25} >
                <div
                    className={`bg-cover h-full`}
                    style={{
                        backgroundImage: `url(${ASSETS_SOURCE}/wp-content/uploads/2015/01/About-05.jpg)`,
                    }}
                >
                </div>
            </ParallaxLayer>

            <ParallaxLayer offset={2.2} speed={2} factor={0.75}>
                <div
                    className={`py-8 text-center w-full bg-white ${textSize}`}
                    style={{ textWrap: 'balance' }}
                >
                Launched in August 2007, MOs Design features an expanding repertiore of international brands that specializes in designer furniture.
                </div>
            </ParallaxLayer>

            <ParallaxLayer offset={2.8} speed={0.5} >
                <div className={`h-full flex flex-row bg-white`}>
                    <div
                        className="basis-1/2 bg-cover"
                        style={{
                            backgroundImage: `url(${ASSETS_SOURCE}/wp-content/uploads/2015/01/About-04-e1425875351961.jpg)`,
                        }}
                    >&nbsp;</div>
                    <div
                        className={`basis-1/2 self-center text-center ${textSize}`}
                    >
                        <p
                            className="px-4 mb-8"
                            style={{ textWrap: 'balance' }}
                        >Each has its own unique values and concepts, reflecting various tastes, functions and lifestyles while also bringing something new to the space.</p>
                        <p
                            className="px-4"
                            style={{ textWrap: 'balance' }}
                        >The strategy is to focus on products and designs that are inspirational and luxurious while affordable to the market.</p>
                    </div>
                </div>
            </ParallaxLayer>

            <ParallaxLayer offset={3} speed={0.5} >
                <div>
                    {/* Floors control */}
                    <div className="bg-gray-900/80 absolute p-4 left-0 top-1/2 -translate-y-1/2">
                        <ul className="text-white">
                            {
                                floors.map(i => (
                                    <li className="mb-2" key={i}>
                                        <a
                                            href=""
                                            className="w-4 h-4 rounded-full border aspect-square inline-block p-4 justify-center items-center"
                                        ><span>{i}</span></a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div
                        className={` bg-cover`}
                        style={{
                            backgroundImage: `{url(${ASSETS_SOURCE}/wp-content/themes/mosdesign/img/mos-building-shot-2.jpg)}`,
                        }}
                    >
                        Floor Directory
                    </div>
                </div>
            </ParallaxLayer>

        </Parallax>
    </div>);
}

export default About;
