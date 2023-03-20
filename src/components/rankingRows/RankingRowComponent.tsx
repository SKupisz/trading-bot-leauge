import { RankingRow, RankingRowElem } from "@/styled/ranking";

interface RankingRowComponentInterface {
    isHeader?: boolean,
    column1: string,
    column2: number,
    column3: string,
    inspectTeamCallback: () => void,
}

const RankingRowComponent:React.FC<RankingRowComponentInterface> = ({
    isHeader, column1, column2, column3, inspectTeamCallback
}:RankingRowComponentInterface) => {
    return <RankingRow isHeader={isHeader !== undefined} onClick={inspectTeamCallback}>
        <RankingRowElem>
            {column1.length > 9 ? column1.substring(0,6)+"..." : column1}
        </RankingRowElem>
        <RankingRowElem>
            {column2.toFixed(0)}
        </RankingRowElem>
        <RankingRowElem>
            {column3}
        </RankingRowElem>
    </RankingRow>
};

export default RankingRowComponent;