import { ReactElement } from "react";

function StickySection({ top, children }: { top?:number, children: ReactElement }) {
    return (
        <section className={`sticky top-${top || 0} bg-white`}>
            { children }
        </section>
    );
}

export default StickySection;
