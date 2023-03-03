import React, { Dispatch, SetStateAction } from "react";
import { RankingRow, RankingRowElem } from "@/styled/ranking";
import { SortingEnum } from "@/util/rankingEnums";

interface RankingHeaderRowComponentInterface {
    changeSortingCallback: Dispatch<SetStateAction<SortingEnum>>
}

const RankingHeaderRowComponent:React.FC<RankingHeaderRowComponentInterface> 
= ({
    changeSortingCallback
}:RankingHeaderRowComponentInterface) => {

    return <RankingRow isHeader>
        <RankingRowElem isClickable onClick={() => changeSortingCallback(SortingEnum.Position)}>
            Pozycja
        </RankingRowElem>
        <RankingRowElem isClickable onClick={() => changeSortingCallback(SortingEnum.Name)}>
            Nazwa
        </RankingRowElem>
        <RankingRowElem isClickable onClick={() => changeSortingCallback(SortingEnum.Money)}>
            Stan
        </RankingRowElem>
        <RankingRowElem isClickable onClick={() => changeSortingCallback(SortingEnum.Change)}>
            Zmiana
        </RankingRowElem>
    </RankingRow>
};

export default RankingHeaderRowComponent;