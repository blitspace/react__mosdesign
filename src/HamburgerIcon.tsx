import "./HamburgerIcon.css";

function HamburgerIcon({ open }: { open: boolean }) {
    return (
        <div className="scale-50">
            <div id="nav-icon3" className={open ? 'open' : ''}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
}

export default HamburgerIcon;
