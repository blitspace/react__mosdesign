import { useState } from "react";
import HamburgerIcon from "./HamburgerIcon";

function TopBar() {
    const [ menuVisible, setMenuVisible ] = useState(false);

    return (
        <section className="fixed top-0 flex flex-row items-center justify-between w-full bg-white/50 py-mos-sm px-mos-md backdrop-blur-md">
            <div><img src="http://mosdesign.local/wp-content/themes/mosdesign/img/final-mark.png" /></div>
            <div>
                <button
                    className="flex flex-row items-center uppercase text-mos-red"
                    onClick={() => setMenuVisible(current => !current)}
                >
                    <span>Menu</span><HamburgerIcon open={menuVisible} />
                </button>
            </div>
        </section>
    );
}

export default TopBar;