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

    let orderOfMagnitude = 0, moneyOperand = column2;

    while(moneyOperand >= 1000){
        moneyOperand /= 1000;
        orderOfMagnitude++;
    }


    let currencyShowing:string = "";
    currencyShowing = currencyShowing.concat(moneyOperand.toFixed(1));

    switch(orderOfMagnitude){
        case 1:
            currencyShowing += "K";
            break;
        case 2:
            currencyShowing += "M";
            break;
        case 3:
            currencyShowing += "B";
            break;
        default:
            break;
    }

    currencyShowing += " PLN";

    return <RankingRow isHeader={isHeader !== undefined} onClick={inspectTeamCallback}>
        <RankingRowElem>
            {column1.length > 9 ? column1.substring(0,6)+"..." : column1}
        </RankingRowElem>
        <RankingRowElem>
            {currencyShowing}
        </RankingRowElem>
        <RankingRowElem>
            {column3}
        </RankingRowElem>
    </RankingRow>
};

export default RankingRowComponent;