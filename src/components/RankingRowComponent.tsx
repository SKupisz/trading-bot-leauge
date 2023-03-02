import { RankingRow, RankingRowElem } from "@/styled/ranking";

interface RankingRowComponentInterface {
    isHeader?: boolean,
    column1: string,
    column2: string,
    column3: string,
    column4: string,
}

const RankingRowComponent:React.FC<RankingRowComponentInterface> = ({
    isHeader, column1, column2, column3, column4
}:RankingRowComponentInterface) => {
    return <RankingRow isHeader={isHeader !== undefined}>
        <RankingRowElem>
            {column1}
        </RankingRowElem>
        <RankingRowElem>
            {column2}
        </RankingRowElem>
        <RankingRowElem>
            {column3}
        </RankingRowElem>
        <RankingRowElem>
            {column4}
        </RankingRowElem>
    </RankingRow>
};

export default RankingRowComponent;