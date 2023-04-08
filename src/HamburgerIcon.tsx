import { motion, sync, useCycle } from "framer-motion";
import "./HamburgerIcon.css";

const variants = {
    open: {
        backgroundColor: "rgba(255,255,255,1)",
        transition: {
            duration: 0.2,
        }
    },
    closed: {
        backgroundColor: "rgba(237,58,58,1)",
        transition: {
            duration: 0.2,
        }
    },
};

function HamburgerIcon({ open }: { open: boolean }) {
    return (
        <div className="scale-50">
            <div id="nav-icon3" className={open ? 'open' : ''}>
                <motion.span
                animate={open ? 'open' : 'closed'}
                variants={variants}></motion.span>
                <motion.span
                animate={open ? 'open' : 'closed'}
                variants={variants}></motion.span>
                <motion.span
                animate={open ? 'open' : 'closed'}
                variants={variants}></motion.span>
                <motion.span
                animate={open ? 'open' : 'closed'}
                variants={variants}></motion.span>
            </div>
        </div>
    );
}

export default HamburgerIcon;
