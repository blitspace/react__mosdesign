import ArticlesCarousel from "../ArticlesCarousel/ArticlesCarousel";
import PageHero from "../PageHero";
import { ASSETS_SOURCE } from "../settings";

function Home() {
    return (<>
        <PageHero title="We are MOs Design." image={`${ASSETS_SOURCE}/wp-content/uploads/2014/12/Home-header-2015.jpg`} />
        <ArticlesCarousel />
    </>);
}

export default Home;
