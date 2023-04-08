import { Link } from "react-router-dom";
import CONFIG from "./data/config";

import { fullScreenMenuOpen } from "./data/config";
import { useAtom } from "jotai";
import { motion, sync, useCycle } from "framer-motion";
import { useRef } from "react";

const menu = {
    open: {
        scaleY: 1,
        // opacity: 100,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2,
        },
    },
    closed: {
        scaleY: 0,
        // opacity: 0,
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40,
        },
    }
};

const menuLi = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: {
                stiffness: 1000,
                // velocity: -100,
            }
        }
    },
    closed: {
        y: -70,
        opacity: 0,
        transition: {
            y: {
                stiffness: 1000,
            }
        }
    }
};

const menuUl = {
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
            initial={false}
            variants={menu}
            className={`fixed top-0 bottom-0 left-0 right-0 z-40 justify-center bg-black/50 backdrop-blur-lg origin-top`}
            animate={navOpen ? 'open' : 'closed'}
        >
                <div className="flex flex-col items-center justify-center w-screen h-screen">
                    <motion.ul
                        variants={menuUl}
                        animate={navOpen ? 'open' : 'closed'}
                        className="flex flex-col gap-8"
                    >
                        {CONFIG.menus.map((i, idx) => (
                            <motion.li
                                variants={menuLi}
                                key={idx}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="text-3xl text-center text-gray-300 xfont-light"
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