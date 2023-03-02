import styled from "styled-components";

interface RankingRowInterface {
    isHeader?: boolean
}

export const RankingWrapper = styled.section`
    width: calc(60% - 20px);
    padding: 10px;
    text-align: center;
    position: relative;
    left: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const RankingRow = styled.div<RankingRowInterface>`
    width: calc(90% - 20px);
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

`;

export const RankingRowElem = styled.span`
    margin: 0px 4px;
    font-size: 1.8em;
    letter-spacing: 0.04em;
    color: ${(props) => props.theme.textColor};
    text-shadow: ${(props) => props.theme.textShadow};
`;