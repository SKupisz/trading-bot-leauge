import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import { NavbarContainer, NavbarElem, NavbarIcon } from "@/styled/navbar";

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
                {!isOpened ? <MenuIcon style={{color: "inherit", fontSize: "inherit"}} /> 
                    : <CloseIcon style={{color: "inherit", fontSize: "inherit"}} /> }
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