function TopBar() {
    return (
        <section className="fixed top-0 flex flex-row items-center justify-between w-full bg-white/50 py-mos-sm px-mos-md backdrop-blur-md">
            <div><img src="http://mosdesign.local/wp-content/themes/mosdesign/img/final-mark.png" /></div>
            <div><button className="uppercase text-mos-red">Menu</button></div>
        </section>
    );
}

export default TopBar;