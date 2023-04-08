import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function HomePageHero() {
    return (
      <section
        className="flex flex-col justify-end min-h-screen bg-center bg-cover"
        style={{
          backgroundImage: "url(\'http://mosdesign.local/wp-content/uploads/2014/12/Home-header-2015.jpg\')",
        }}>
            <div className="text-center text-white py-mos-md">
                <button className="text-white transition-all bg-white rounded-full bg-opacity-40 hover:bg-opacity-80 hover:text-mos-red"><KeyboardArrowDownIcon fontSize="large" /></button>
            </div>
        </section>
    );
}

export default HomePageHero;
