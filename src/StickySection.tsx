import { ReactElement } from "react";

function StickySection({ top, children }: { top?:number | string, children: ReactElement }) {
    return (
        <section className={`sticky top-${top || 0} bg-white`}>
            { children }
        </section>
    );
}

export default StickySection;
