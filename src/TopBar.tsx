import { useState } from "react";
import HamburgerIcon from "./HamburgerIcon";
import { Link } from "react-router-dom";
import { fullScreenMenuOpen } from "./data/config";
import { useAtom } from "jotai";

function TopBar() {
    const [ navOpen, setNavOpen ] = useAtom(fullScreenMenuOpen);
    const bgClass = navOpen ? '' : 'bg-white/50 backdrop-blur-md';

    return (
        <section className={`fixed top-0 z-50 flex flex-row items-center justify-between w-full py-mos-sm px-mos-md ${bgClass}`}>
            <div>
                {!navOpen
                    ? <img src="http://mosdesign.local/wp-content/themes/mosdesign/img/final-mark.png" />
                    : null
                }
            </div>
            <div className="flex flex-row gap-2">
                {!navOpen
                    ? (<>
                        <Link to={`/`}>Home</Link>
                        <Link to={`about`}>About</Link>
                    </>)
                    : null
                }
            </div>
            <div>
                <button
                    className="flex flex-row items-center uppercase text-mos-red"
                    onClick={() => setNavOpen(cur => !cur)}
                >
                    <span>Menu</span><HamburgerIcon open={navOpen} />
                </button>
            </div>
        </section>
    );
}

export default TopBar;