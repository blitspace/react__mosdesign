import { useState } from "react";
import HamburgerIcon from "./HamburgerIcon";
import { Link } from "react-router-dom";
import { fullScreenMenuOpen } from "./data/config";
import { useAtom } from "jotai";
import { motion } from "framer-motion";

const variants = {
    open: {
        backgroundColor: "rgba(255,255,255,0)",
        transition: {
            duration: 0.2,
        }
    },
    closed: {
        backgroundColor: "rgba(255,255,255,0.6)",
        transition: {
            duration: 0.2,
        }
    },
};

const menuVariants = {
    open: {
        color: "rgba(255,255,255,1)",
        transition: {
            duration: 0.2,
        }
    },
    closed: {
        color: "rgba(255,100,100,1)",
        transition: {
            duration: 0.2,
        }
    },
}

const buttonVariants = {
    open: {
        x: 50,
        opacity: 0,
        transition: {
            duration: .3,
        }
    },
    closed: {
        y: 0,
        opacity: 1,
        color: "rgba(255,100,100,1)",
        transition: {
            duration: .3,
        }
    },
}


function TopBar() {
    const [ navOpen, setNavOpen ] = useAtom(fullScreenMenuOpen);
    const bgClass = navOpen ? '' : 'bg-white/50';

    return (
        <motion.section
            variants={variants}
            animate={navOpen ? 'open' : 'closed'}
            className={`fixed top-0 z-50 flex flex-row items-center justify-between w-full py-mos-sm px-mos-md backdrop-blur-md`}
        >
            <div>
                {!navOpen
                    ? <img src="http://mosdesign.local/wp-content/themes/mosdesign/img/final-mark.png" />
                    : null
                }
            </div>
            <div>
                <motion.button
                    variants={menuVariants}
                    animate={navOpen ? 'open' : 'closed'}
                    className="flex flex-row items-center uppercase xtext-mos-red"
                    onClick={() => setNavOpen(cur => !cur)}
                >
                    <motion.span variants={buttonVariants}>Menu</motion.span><HamburgerIcon open={navOpen} />
                </motion.button>
            </div>
        </motion.section>
    );
}

export default TopBar;