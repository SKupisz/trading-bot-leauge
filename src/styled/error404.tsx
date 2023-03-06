import styled from "styled-components";

export const ErrorContainer = styled.section`
    width: calc(100% - 20px);
    padding: 10px;
    text-align: center;
    position: relative;
    top: 2vh;
    left: 0%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${(props) => props.theme.textColor};

    @media screen and (min-width: 768px){
        top: 10vh;
    }

    @media screen and (min-width: 1024px){
        width: calc(80% - 20px);
        left: 10%;
    }
`;

export const ErrorHeader = styled.header`
    font-size: 2.1em;
    letter-spacing: 0.05em;
    text-shadow: ${(props) => props.theme.textShadow};
    margin-bottom: 4vh;
    position: relative;
    top: 2vh;

    @media screen and (min-width: 768px){
        font-size: 2.8em;
    }

    @media screen and (min-width: 1024px){
        font-size: 3.2em;
    }
`;

export const ErrorContent = styled.div`
    width: calc(100% - 20px);
    padding: 10px;
    text-align: center;
    font-size: 1.3em;
    letter-spacing: 0.04em;
    text-shadow: ${(props) => props.theme.textShadow};
    
    @media screen and (min-width: 768px){
        width: calc(90% - 20px);
        font-size: 1.5em;
    }

    @media screen and (min-width: 1024px){
        width: calc(70% - 20px);
        font-size: 1.8em;
    }
`;