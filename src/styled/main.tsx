import styled, { createGlobalStyle } from "styled-components";

export const Theme = {
    backgroundColor: "#191825",
    rowBackgroundColor: "#5D41B2",
    navbarBackgroundColor: "#38266f",
    textColor: "#DED9EF",
    textShadow: "2px 2px 2px rgba(222,217,239,.1)",
    textShadowGlowup: "2px 2px 2px rgba(93,65,178,.6)",
    boxShadowNormal: "3px 3px 4px rgba(93,65,178,.2)",
    boxShadowGlowup: "0px 0px 4px 4px rgba(93,65,178,.6)",
};

export const GlobalStyle = createGlobalStyle`
    body{
        padding: 0;
        margin: 0;
        background: #191825;
        overflow-x: hidden;
    }

    ::-webkit-scrollbar{
        width: 10px;
        background: #191825;
    }

    ::-webkit-scrollbar-thumb {
        width: 8px;
        background: #5D41B2;
        border-radius: 4px;
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
