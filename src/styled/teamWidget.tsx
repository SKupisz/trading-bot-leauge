import { motion } from "framer-motion";
import styled from "styled-components";

export const TeamWidgetWrapper = styled(motion.section)`
    width: calc(100% - 20px);
    height: calc(100vh - 20px);
    padding: 10px;
    position: fixed;
    top: 0px;
    left: 0%;
    z-index: 3;
    background: ${(props) => props.theme.backgroundColor}f2;
    box-shadow: -10px 0px 10px ${(props) => props.theme.rowBackgroundColor}62;
    color: ${(props) => props.theme.textColor};

    @media screen and (min-width: 375px){
        width: calc(90% - 20px);
        left: 10%;
    }

    @media screen and (min-width: 425px){
        width: calc(80% - 20px);
    }

    @media screen and (min-width: 768px){
        width: calc(60% - 20px);
    }

    @media screen and (min-width: 1024px){
        width: calc(45% - 20px);
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