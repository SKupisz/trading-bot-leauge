import { motion } from "framer-motion";
import styled from "styled-components";

interface RankingRowInterface {
    isHeader?: boolean
}

interface RankingRowElemInterface{
    isClickable?: boolean
}

export const RankingWrapper = styled(motion.section)`
    width: calc(98% - 20px);
    padding: 10px;
    text-align: center;
    position: relative;
    top: 4vh;
    left: 1%;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 2;

    @media screen and (min-width: 560px){
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

    @media screen and (min-width: 1440px){
        width: calc(60% - 20px);
        left: 20%;
    }
`;

export const RankingRow = styled.div<RankingRowInterface>`
    width: calc(100% - 20px);
    padding: 20px 10px;
    border-radius: 10px;
    box-shadow: ${(props) => props.theme.boxShadowNormal};
    background: ${(props) => props.theme.rowBackgroundColor}41;
    margin-bottom: 10px;
    position: relative;
    overflow-y: hidden;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    ${(props) => props.isHeader !== undefined && !props.isHeader ? `
        cursor: pointer;
        transition: all 0.4s;

        &:hover{
            box-shadow: ${props.theme.boxShadowGlowup};
        }
    ` : null}

    @media screen and (min-width: 1024px){
        width: calc(90% - 20px);
    }

`;

export const RankingRowElem = styled.span<RankingRowElemInterface>`
    width: calc(33% - 8px);
    margin: 0px 4px;
    font-size: 1em;
    letter-spacing: 0.04em;
    color: ${(props) => props.theme.textColor};
    text-shadow: ${(props) => props.theme.textShadow};

    ${(props) => props.isClickable !== undefined ? `
        cursor: pointer;
        transition: filter 0.4s;

        &:hover{
            filter: brightness(70%);
        }
    ` : null}

    @media screen and (min-width: 375px){
        font-size: 1.15em;
    }

    @media screen and (min-width: 425px){
        font-size: 1.15em;
    }

    @media screen and (min-width: 475px){
        font-size: 1.35em;
    }

    @media screen and (min-width: 768px){
        font-size: 1.6em;
    }

    @media screen and (min-width: 1024px){
        font-size: 1.8em;
    }
`;

export const RankingRowErrorLoadingElem = styled.span`
    width: calc(100% - 20px);
    padding: 0px 10px;
    font-size: 1.4em;
    letter-spacing: 0.04em;
    color: ${(props) => props.theme.textColor};
    text-shadow: ${(props) => props.theme.textShadow};

    @media screen and (min-width: 768px){
        font-size: 1.8em;
    }
`;