// https://stackoverflow.com/a/61602724

import { useEffect } from "react";
import { useLocation } from "react-router-dom";


export default function ScrollToTop({ val }: { val?:number }) {
    const { pathname } = useLocation();

    useEffect(() => {
        let top = val || 200;
        window.scrollTo({ top: top, behavior: 'smooth' });
    }, [pathname]);

    return null;
}
