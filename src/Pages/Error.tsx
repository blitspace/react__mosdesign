import { Link, useNavigate } from "react-router-dom";
import App from "../App";
import PageHero from "../PageHero";
import StickySection from "../StickySection";
import ScrollToTop from "./ScrollToTop";


function Error() {
    const navigate = useNavigate();

    return (<App enableScrollToTop={false}><>
        <ScrollToTop val={400} />
        <PageHero
            title=""
            image="http://mosdesign.local/wp-content/themes/mosdesign/img/hero-shot-placeholder.jpg"
        />
        <StickySection top={'[88px]'}>
            <div className="w-full mx-auto text-2xl min-h-fit max-w-mos-content px-mos-md py-mos-md">
                <p>We're sorry, we can't seem to find what you are looking for.<br />
                Maybe these can help:</p>

                <p><Link to="/">Go back to the Homepage</Link></p>
                <p><Link to="#" onClick={() => navigate(-1)}>Go back to the last page you visited</Link></p>

                <p>See what's new at Mos Design</p>
            </div>
        </StickySection>
    </></App>);
}

export default Error;
