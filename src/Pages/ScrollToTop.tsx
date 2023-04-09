// https://stackoverflow.com/a/61602724

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        let top = 200;
        window.scrollTo({ top: top, behavior: 'smooth' });
    }, [pathname]);

    return null;
}