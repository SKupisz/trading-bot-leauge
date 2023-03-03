import { createGlobalStyle } from "styled-components";

export const Theme = {
    backgroundColor: "#191825",
    rowBackgroundColor: "#5D41B2",
    textColor: "#DED9EF",
    textShadow: "3px 3px 4px rgba(222,217,239,.2)",
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
