import React, { useState } from "react";
import { NavbarContainer, NavbarElem, NavbarIcon } from "@/styled/navbar";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";

const MainNavbar:React.FC = () => {

    const [isOpened, toggleIsOpened] = useState<boolean>(false);

    return <AnimatePresence>
        <NavbarContainer layout initial={{
            height: "10vh"
        }} animate={{
            height: isOpened ? "100vh" : "10vh"
        }} transition={{
            duration: 0.4,
            delay: 0.1
        }}>
            <NavbarIcon onClick={() => toggleIsOpened((currentState: boolean) => !currentState)}>
                X
            </NavbarIcon>
            <Link href="/" onClick={() => toggleIsOpened((currentState: boolean) => !currentState)}>
                <NavbarElem>
                    Główna
                </NavbarElem>
            </Link>
            <Link href="/regulamin" onClick={() => toggleIsOpened((currentState: boolean) => !currentState)}>
                <NavbarElem>
                    Regulamin
                </NavbarElem>
            </Link>
        </NavbarContainer>    
    </AnimatePresence>
};

export default MainNavbar;