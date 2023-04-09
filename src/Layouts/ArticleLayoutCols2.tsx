import { ReactElement } from "react";

export function Col1({ children }: { children: ReactElement }) {
    return (
        <div className="order-2 w-full md:w-1/5 md:order-1 ">
            {children}
        </div>
    );
}

export function Col2({children}: { children: ReactElement }) {
    return (
        <div className="order-1 w-4/5 md:order-2">
            {children}
        </div>
    );
}

export function ArticleLayoutCols2({ children }: { children: ReactElement }) {
    return (
        <article className="flex flex-col gap-6 md:flex-row">
            {children}
        </article>
    );
}
