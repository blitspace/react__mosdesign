import { atom } from "jotai";
import routes from "../utils/routes";
const fullScreenMenuOpen = atom(false);
export { fullScreenMenuOpen };

const CONFIG = {
    menus: [
        { label: 'Home', url: '/' },
        { label: 'News', url: routes.news.index() },
        { label: 'Brands', url: '/brands' },
        { label: 'About', url: '/about' },
        { label: 'Press', url: '#' },
        { label: 'Contact Us', url: '#' },
    ]
}

export default CONFIG;
