import ArticlesCarousel from "../ArticlesCarousel/ArticlesCarousel";
import PageHero from "../PageHero";

function Home() {
    return (<>
        <PageHero title="We are MOs Design." image="http://mosdesign.local/wp-content/uploads/2014/12/Home-header-2015.jpg"/>
        <ArticlesCarousel />
    </>);
}

export default Home;
