import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Loader from './Loader';

function PageHero({ title, image, isLoading = false }: { title?: string, image?: string, isLoading?: boolean }) {
    return (
        <section
            className="sticky -top-[250px] flex flex-col justify-between min-h-screen bg-center bg-cover"
            style={{
            backgroundImage: `url(\'${image}\')`,
        }}>
            <div></div>

            <div className="flex flex-row items-center justify-center text-5xl text-center text-white mt-mos-lg py-mos-md">
                { isLoading && (<><Loader /><div className="mr-4" /></>) }
                <span>{ title }</span>
            </div>

            <div className="text-center text-white py-mos-md">
                <button
                    className="text-white transition-all bg-white rounded-full bg-opacity-40 hover:bg-opacity-80 hover:text-mos-red"
                    onClick={() => window.scrollTo({
                        top: window.innerHeight,
                        behavior: 'smooth'
                    })}
                >
                    <KeyboardArrowDownIcon fontSize="large" />
                </button>
            </div>
        </section>
    );
}

export default PageHero;
