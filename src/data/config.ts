import { atom } from "jotai";

const fullScreenMenuOpen = atom(false);
export { fullScreenMenuOpen };

const CONFIG = {
    menus: [
        { label: 'Home', url: '/' },
        { label: 'News', url: '/news' },
        { label: 'Brands', url: '/brands' },
        { label: 'About', url: '/about' },
        { label: 'Press', url: '#' },
        { label: 'Contact Us', url: '#' },
    ]
}

export default CONFIG;
