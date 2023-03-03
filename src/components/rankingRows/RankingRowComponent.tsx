import { RankingRow, RankingRowElem } from "@/styled/ranking";

interface RankingRowComponentInterface {
    isHeader?: boolean,
    column1: string,
    column2: string,
    column3: string,
    inspectTeamCallback: () => void,
}

const RankingRowComponent:React.FC<RankingRowComponentInterface> = ({
    isHeader, column1, column2, column3, inspectTeamCallback
}:RankingRowComponentInterface) => {
    return <RankingRow isHeader={isHeader !== undefined} onClick={inspectTeamCallback}>
        <RankingRowElem>
            {column1}
        </RankingRowElem>
        <RankingRowElem>
            {column2}
        </RankingRowElem>
        <RankingRowElem>
            {column3}
        </RankingRowElem>
    </RankingRow>
};

export default RankingRowComponent;