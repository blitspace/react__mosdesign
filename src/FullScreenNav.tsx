import { Link } from "react-router-dom";
import CONFIG from "./data/config";

import { fullScreenMenuOpen } from "./data/config";
import { useAtom } from "jotai";

function FullScreenNav() {
    const [ navOpen, setNavOpen ] = useAtom(fullScreenMenuOpen);

    if (typeof window != 'undefined' && window.document) {
        if (navOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }

    return (
        <div className={`fixed top-0 bottom-0 left-0 right-0 z-40 justify-center bg-black/50 backdrop-blur-lg ${navOpen ? '' : 'hidden'}`}>
            <div className="flex flex-col items-center justify-center w-screen h-screen">
                <ul className="flex flex-col gap-8">
                    {CONFIG.menus.map((i, idx) => (
                        <li
                            className="text-3xl font-light text-center text-gray-300"
                            key={idx}
                        ><Link to={i.url} onClick={() => setNavOpen(false)}>{i.label}</Link></li>
                    ))}
                    <li><button onClick={() => setNavOpen(cur => !cur)}>Close</button></li>
                </ul>
            </div>
        </div>
    );
}

export default FullScreenNav;