import { Link } from "react-router-dom";
import CONFIG from "./data/config";

import { fullScreenMenuOpen } from "./data/config";
import { useAtom } from "jotai";
import { motion, sync, useCycle } from "framer-motion";
import { useRef } from "react";

const menu = {
    open: {
        scale: 1,
        opacity: 100,
        transition: {
            // type: "spring",
            // stiffness: 20,
            // restDelta: 2,
        },
    },
    closed: {
        scale: 0,
        opacity: 0,
        transition: {
            // delay: 0.5,
            // type: "spring",
            // stiffness: 400,
            // damping: 40,
        },
    }
};

const menuItems = {
    open: {
        y: 0,
        opacity: 100,
        transition: {
            y: {
                stiffness: 1000,
                velocity: -100,
            }
        }
    },
    closed: {
        y: 100,
        opacity: 0,
        transition: {
            y: {
                stiffness: 1000,
            }
        }
    }
};

const staggerVariants = {
    open: {
        transition: {
            staggerChildren: 0.07,
            delayChildren: 0.2,
        }
    },
    closed: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1,
        }
    }
};

function FullScreenNav() {
    const [ navOpen, setNavOpen ] = useAtom(fullScreenMenuOpen);

    if (typeof window != 'undefined' && window.document) {
        if (navOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }

    return (
        <motion.div
            // initial={false}
            animate={navOpen ? 'open' : 'closed'}
            variants={menu}
            className={`fixed top-0 bottom-0 left-0 right-0 z-40 justify-center bg-black/50 backdrop-blur-lg origin-top`}
            // initial={{ opacity: 0, display: 'none' }}
        >
            <div className="flex flex-col items-center justify-center w-screen h-screen">
                <motion.ul variants={staggerVariants} className="flex flex-col gap-8">
                    {CONFIG.menus.map((i, idx) => (
                        <motion.li
                            variants={menuItems}
                            animate={navOpen ? 'open' : 'closed'}
                            key={idx}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="text-3xl font-light text-center text-gray-300"
                        >
                            <Link to={i.url} onClick={() => setNavOpen(false)}>{i.label}</Link>
                        </motion.li>
                    ))}
                </motion.ul>
            </div>
        </motion.div>
    );
}

export default FullScreenNav;