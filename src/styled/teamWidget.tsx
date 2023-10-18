import { motion } from "framer-motion";
import styled from "styled-components";

export const TeamWidgetWrapper = styled(motion.section)`
    width: 100%;
    height: calc(100vh - 20px);
    padding: 10px 0px;
    position: fixed;
    overflow-x: hidden;
    overflow-y: auto;
    top: 10vh;
    left: 0%;
    z-index: 3;
    background: ${(props) => props.theme.backgroundColor}f2;
    box-shadow: -4px 0px 4px ${(props) => props.theme.rowBackgroundColor}62;
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

    &::-webkit-scrollbar{
        width: 6px;
        background: ${(props) => props.theme.backgroundColor};
    }

    &::-webkit-scrollbar-thumb {
        background: ${(props) => props.theme.rowBackgroundColor};
        border-radius: 4px;
    }

    @media screen and (min-width: 375px){
        width: 90%;
        left: 10%;
    }

    @media screen and (min-width: 425px){
        width: 80%;
    }

    @media screen and (min-width: 768px){
        top: 0px;
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
    width: calc(98% - 20px);
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    left: 1%;
    top: 4vh;
    padding-bottom: 9vh;
    color: ${(props) => props.theme.textColor};
    text-shadow: ${(props) => props.theme.textShadowGlowup};

    @media screen and (min-width: 375px){
        width: calc(90% - 20px);
        left: 5%;
    }

    @media screen and (min-width: 768px){
        width: calc(80% - 20px);
        left: 10%;
    }

    @media screen and (min-width: 1024px){
        width: calc(70% - 20px);
        left: 15%;
    }
`;

export const TeamWidgetErrorHeader = styled.header`
    width: calc(100% - 20px);
    padding: 10px;
    text-align: center;
    font-size: 1.9em;
    letter-spacing: 0.04em;
    text-shadow: ${(props) => props.theme.textShadowGlowup};
`;

export const TeamWidgetTeamInfo = styled.div`
    width: calc(100% - 20px);
    padding: 10px;
    text-align: center;
    font-size: 1.2em;
    letter-spacing: 0.04em;

    @media screen and (min-width: 1024px){
        font-size: 1.4em;
    }
`;