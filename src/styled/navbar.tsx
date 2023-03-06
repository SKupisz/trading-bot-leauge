import styled from "styled-components";
import { motion } from "framer-motion";

export const NavbarContainer = styled(motion.nav)`
    width: calc(100% - 10px);
    height: 10vh;
    padding: 0px 5px;
    text-align: center;
    align-content: center;
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 4;
    overflow: hidden;
    border-radius: 0px;
    background: ${(props) => props.theme.navbarBackgroundColor};
    color: ${(props) => props.theme.textColor};

    & > a{
        text-decoration: none;
        color: inherit;
    }

    @media screen and (min-width: 768px){
        width: fit-content;
        border-radius: 0px 0px 50px 0px;
    }
`;

export const NavbarIcon = styled.div`
    font-size: 2.6em;
    color: inherit;
    width: calc(100% - 20px);
    height: fit-content;
    padding: 10px;
    cursor: pointer;
    transition: filter 0.4s;
    margin-bottom: 4vh;

    &:hover{
        filter: brightness(70%);
    }

    @media screen and (min-width: 768px){
        width: calc(100% - 20px);
        font-size: 3.2em;
    }
`;

export const NavbarElem = styled.div`
    width: calc(100% - 20px);
    padding: 10px;
    text-align: center;
    color: inherit;
    font-size: 1.3em;
    letter-spacing: 0.04em;
    margin-bottom: 2vh;
    cursor: pointer;
    transition: filter 0.4s;

    &:hover{
        filter: brightness(60%);
    }

    @media screen and (min-width: 768px){
        font-size: 1.6em;
    }
`;

export const ContentContainer = styled.section`
    width: 100%;
    position: absolute;
    top: 10vh;
    @media screen and (min-width: 768px){
        top: 0vh;
    }
`;