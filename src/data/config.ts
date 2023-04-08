import { atom } from "jotai";

const fullScreenMenuOpen = atom(false);
export { fullScreenMenuOpen };

const CONFIG = {
    menus: [
        { label: 'Home', url: '#' },
        { label: 'News', url: '#' },
        { label: 'Brands', url: '#' },
        { label: 'About', url: '#' },
        { label: 'Press', url: '#' },
        { label: 'Contact Us', url: '#' },
    ]
}

export default CONFIG;
