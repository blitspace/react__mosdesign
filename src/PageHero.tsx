import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function PageHero({ title, image }: { title?: string, image?: string }) {
    return (
        <section
            className="sticky -top-[250px] flex flex-col justify-between min-h-screen bg-center bg-cover"
            style={{
            backgroundImage: `url(\'${image}\')`,
        }}>
            <div></div>
            <div className="text-5xl text-center text-white mt-mos-lg py-mos-md">
                { title }
            </div>
            <div className="text-center text-white py-mos-md">
                <button className="text-white transition-all bg-white rounded-full bg-opacity-40 hover:bg-opacity-80 hover:text-mos-red">
                    <KeyboardArrowDownIcon fontSize="large" />
                </button>
            </div>
        </section>
    );
}

export default PageHero;
