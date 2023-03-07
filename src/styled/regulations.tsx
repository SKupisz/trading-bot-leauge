import styled from "styled-components";

export const RegulationsHeader = styled.h1`
    width: calc(100% - 20px);
    padding: 10px;
    text-align: center;
    font-size: 1.5em;
    letter-spacing: 0.04em;
    color: ${(props) => props.theme.textColor};
    text-shadow: ${(props) => props.theme.textShadow};
    margin-bottom: 2vh;
    position: relative;
    top: 0vh;

    @media screen and (min-width: 425px){
        font-size: 1.8em;
    }

    @media screen and (min-width: 768px){
        font-size: 2.2em;
        margin-bottom: 4vh;
    }

    @media screen and (min-width: 1024px){
        font-size: 3.2em;
    }
`;

export const RegulationsContainer = styled.section`
    width: calc(100% - 20px);
    padding: 10px;
    padding-bottom: 40px;
    position: relative;
    top: 3vh;
    left: 0%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${(props) => props.theme.textColor};

    @media screen and (min-width: 768px){
        width: calc(90% - 20px);
        left: 5%;
    }

    @media screen and (min-width: 1024px){
        width: calc(80% - 20px);
        left: 10%;
    }
`;

export const RegulationsParagraphHeader = styled.h2`
    width: calc(100% - 10px);
    padding: 5px;
    text-align: center;
    font-size: 1.2em;
    letter-spacing: 0.04em;
    text-shadow: ${(props) => props.theme.textShadowGlowup};
    margin-bottom: 1vh;

    @media screen and (min-width: 425px){
        font-size: 1.5em;
    }

    @media screen and (min-width: 768px){
        font-size: 1.8em;
    }

    @media screen and (min-width: 1024px){
        width: calc(90% - 10px);
        font-size: 1.9em;
    }
`;

export const RegulationsParagraph = styled.p`
    width: calc(100% - 10px);
    padding: 5px;
    text-align: center;
    font-size: 0.9em;
    letter-spacing: 0.04em;
    line-height: 1.6em;
    text-shadow: ${(props) => props.theme.textShadow};
    margin-bottom: 0vh;

    @media screen and (min-width: 425px){
        font-size: 1.2em;
        line-height: auto;
    }

    @media screen and (min-width: 768px){
        width: calc(90% - 10px);
        font-size: 1.6em;
    }

    @media screen and (min-width: 1024px){
        width: calc(80% - 10px);
        font-size: 1.7em;
    }
`;