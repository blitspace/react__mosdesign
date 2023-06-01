interface IRoutes {
    readonly pathSingular: string;
    readonly pathPlural: string;

    year?(ID: string | number): string;
    tag?(ID: string | number): string;
    index?(ID: string | number): string;
    category?(ID: string | number): string;
    article?(ID: string | number): string;
}

class News implements IRoutes {
    readonly pathSingular: string = 'news';
    readonly pathPlural: string = 'news';

    year(ID: string | number): string {
        return `/${this.pathPlural}/year/${ID}`;
    }

    tag(ID: string | number): string {
        return `/${this.pathPlural}/tags/${ID}`;
    }

    index(ID: string | number): string {
        return `/${this.pathPlural}/brand/${ID}`;
    }

    category(ID: string | number): string {
        return `/category/${ID}`;
    }

    article(ID: string | number): string {
        return `/article/${ID}`;
    }
}

class Brands implements IRoutes {
    readonly pathSingular: string = 'brand';
    readonly pathPlural: string = 'brands';

    index(ID: string | number): string {
        return `/${this.pathSingular}/${ID}`;
    }
}

const routes = {
    news: new News(),
    brands: new Brands(),
}

export default routes;
