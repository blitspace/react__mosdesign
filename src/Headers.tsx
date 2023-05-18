import { ReactElement } from "react";

type THeaderContent = {
    children?: ReactElement | string,
}

export function Header1({ children }: THeaderContent) {
    return (
        <h1 className="text-4xl mb-mos-md">{children}</h1>
    );
}

export function Header3({ children }: THeaderContent) {
    return (
        <h3 className="text-2xl uppercase text-slate-600 mb-mos-lg">{children}</h3>
    );
}
