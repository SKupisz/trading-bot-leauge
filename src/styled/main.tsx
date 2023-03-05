import styled, { createGlobalStyle } from "styled-components";

export const Theme = {
    backgroundColor: "#191825",
    rowBackgroundColor: "#5D41B2",
    textColor: "#DED9EF",
    textShadow: "3px 3px 4px rgba(222,217,239,.2)",
    textShadowGlowup: "3px 3px 10px rgba(93,65,178,.9)",
    boxShadowNormal: "3px 3px 4px rgba(93,65,178,.2)",
    boxShadowGlowup: "0px 0px 10px 10px rgba(93,65,178,.6)",
};

export const GlobalStyle = createGlobalStyle`
    body{
        padding: 0;
        margin: 0;
        background: #191825;
        overflow-x: hidden;
    }
`;

export const LastUpdateDataHeader = styled.header`
    width: calc(100% - 20px);
    padding: 10px;
    text-align: center;
    font-size: 1.2em;
    letter-spacing: 0.04em;
    color: ${(props) => props.theme.textColor};
    text-shadow: ${(props) => props.theme.textShadowGlowup};
    position: relative;
    top: 2vh;
    margin-bottom: 5vh;
    display: block;
    margin-left: auto;
    margin-right: auto;

    @media screen and (min-width: 320px){
        font-size: 1.4em;
    }

    @media screen and (min-width: 425px){
        font-size: 1.7em;
    }

    @media screen and (min-width: 768px){
        width: calc(80% - 20px);
        font-size: 1.9em;
    }
`;
