import { ReactElement } from "react";

export function Col1({ children }: { children: ReactElement }) {
    return (
        <div className="order-2 w-full md:w-2/5 md:order-1 grow-0 shrink-0 basis-[220px]">
            {children}
        </div>
    );
}

export function Col2({children}: { children: ReactElement }) {
    return (
        <div className="flex-grow order-1 md:order-2">
            {children}
        </div>
    );
}

export function ArticleLayoutCols2({ children }: { children: ReactElement }) {
    return (
        <article className="flex flex-col flex-grow flex-shrink-0 gap-24 md:flex-row">
            {children}
        </article>
    );
}
