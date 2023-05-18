interface NewsRoutes {
    year(ID: string): string;
    tag(ID: string): string;
    category(ID: string): string;
}

class News implements NewsRoutes {
    year(ID: string): string {
        return `/news/year/${ID}`;
    }

    tag(ID: string): string {
        return `/news/tags/${ID}`;
    }

    brand(ID: string): string {
        return `/news/brand/${ID}`;
    }

    category(ID: string): string {
        return `/news/category/${ID}`;
    }
}

const routes = {
    news: new News(),
}

export default routes;
