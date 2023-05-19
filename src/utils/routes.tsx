interface NewsRoutes {
    readonly path: string;

    year(ID: string | number): string;
    tag(ID: string | number): string;
    brand(ID: string | number): string;
    category(ID: string | number): string;
    article(ID: string | number): string;
}

class News implements NewsRoutes {
    readonly path: string = 'news';

    year(ID: string | number): string {
        return `/${this.path}/year/${ID}`;
    }

    tag(ID: string | number): string {
        return `/${this.path}/tags/${ID}`;
    }

    brand(ID: string | number): string {
        return `/${this.path}/brand/${ID}`;
    }

    category(ID: string | number): string {
        return `/category/${ID}`;
    }

    article(ID: string | number): string {
        return `/article/${ID}`;
    }
}

const routes = {
    news: new News(),
}

export default routes;
