import { motion } from "framer-motion";
import styled from "styled-components";

export const TeamWidgetWrapper = styled(motion.section)`
    width: 100%;
    height: calc(100vh - 20px);
    padding: 10px 0px;
    position: fixed;
    top: 0px;
    left: 0%;
    z-index: 3;
    background: ${(props) => props.theme.backgroundColor}f2;
    box-shadow: -10px 0px 10px ${(props) => props.theme.rowBackgroundColor}62;
    color: ${(props) => props.theme.textColor};

    &::before{
        content: '';
        width: 100%;
        height: 100%;
        border-radius: 0px 50% 0px 0px;
        background: linear-gradient(90deg, ${(props) => props.theme.rowBackgroundColor}27 1%,  ${(props) => props.theme.backgroundColor}f2 100%);
        box-shadow: 5px -5px 10px ${(props) => props.theme.backgroundColor}02;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
    }

    @media screen and (min-width: 375px){
        width: 90%;
        left: 10%;
    }

    @media screen and (min-width: 425px){
        width: 80%;
    }

    @media screen and (min-width: 768px){
        width: 60%;
    }

    @media screen and (min-width: 1024px){
        width: 45%;
    }
`;

export const TeamWidgetHeader = styled.header`
    width: calc(100% - 20px);
    padding: 10px;
    text-align: center;
    font-size: 1.7em;
    letter-spacing: 0.04em;
    text-shadow: ${(props) => props.theme.textShadow};
    position: relative;
    top: 5vh;
    margin-bottom: 5vh;

    @media screen and (min-width: 425px){
        font-size: 2.1em;
    }

    @media screen and (min-width: 768px){
        width: calc(80% - 20px);
        font-size: 2.4em;
    }

    @media screen and (min-width: 1024px){
        width: calc(70% - 20px);
        font-size: 2.7em;
    }
`;

export const TeamWidgetClosingBtn = styled.button`
    width: fit-content;
    height: fit-content;
    padding: 5px;
    font-size: 2em;
    border: none;
    background: none;
    font-family: inherit;
    color: ${(props) => props.theme.textColor};
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    transition: filter 0.4s;

    &:hover{
        filter: brightness(70%);
    }
`;

export const TeamWidgetInfoContainer = styled.div`
    width: calc(70% - 20px);
    height: fit-content;
    display: flex;
    flex-direction: column;
`