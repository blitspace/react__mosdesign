interface IRoutes {
    pathSingular: string;
    pathPlural: string;

    index(ID: string | number): string;

    year?(ID: string | number): string;
    tag?(ID: string | number): string;
    category?(ID: string | number): string;
    article?(ID: string | number): string;
}

class BaseRouteClass implements IRoutes {
    pathSingular: string;
    pathPlural: string;

    constructor(pathSingular: string, pathPlural: string) {
        this.pathSingular = pathSingular;
        this.pathPlural = pathPlural;
    }

    index(ID: string | number): string {
        return `${this.pathPlural}`;
    }
}

class News extends BaseRouteClass {
    index(ID: string | number | undefined): string {
        return `/${this.pathPlural}`;
    }

    year(ID: string | number): string {
        return `/${this.pathPlural}/year/${ID}`;
    }

    tag(ID: string | number): string {
        return `/${this.pathPlural}/tags/${ID}`;
    }

    category(ID: string | number): string {
        return `/category/${ID}`;
    }

    article(ID: string | number): string {
        return `/news-article/${ID}`;
    }
}

class Brands extends BaseRouteClass {
    readonly pathSingular: string = 'brands';
    readonly pathPlural: string = 'brands';

    index(ID: string | number): string {
        return `/${this.pathSingular}/${ID}`;
    }
}

const routes = {
    news: new News('news', 'news'),
    brands: new Brands('brand', 'brands'),
}

export default routes;
