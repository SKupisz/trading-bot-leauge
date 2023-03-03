import React, { Dispatch, SetStateAction } from "react";
import { RankingRow, RankingRowElem } from "@/styled/ranking";
import { SortingModesEnum, SortingOrdersEnum } from "@/util/rankingEnums";

interface RankingHeaderRowComponentInterface {
    changeSortingModeCallback: Dispatch<SetStateAction<SortingModesEnum>>,
    changeSortingOrderCallback: Dispatch<SetStateAction<SortingOrdersEnum>>,
    currentSortingMode: SortingModesEnum,
    currentSortingOrder: SortingOrdersEnum,
}

const RankingHeaderRowComponent:React.FC<RankingHeaderRowComponentInterface> 
= ({
    changeSortingModeCallback,
    changeSortingOrderCallback,
    currentSortingMode,
    currentSortingOrder,
}:RankingHeaderRowComponentInterface) => {

    const changeSortingCallback = (newMode: SortingModesEnum) => {
        if(currentSortingMode === newMode){
            changeSortingOrderCallback(currentSortingOrder === SortingOrdersEnum.Ascending ? SortingOrdersEnum.Descending : SortingOrdersEnum.Ascending );
        }
        else {
            changeSortingModeCallback(newMode);
            changeSortingOrderCallback(SortingOrdersEnum.Descending);
        }
    }

    return <RankingRow isHeader>
        <RankingRowElem isClickable onClick={() => changeSortingCallback(SortingModesEnum.Name)}>
            Nazwa
        </RankingRowElem>
        <RankingRowElem isClickable onClick={() => changeSortingCallback(SortingModesEnum.Money)}>
            Stan
        </RankingRowElem>
        <RankingRowElem isClickable onClick={() => changeSortingCallback(SortingModesEnum.Change)}>
            Zmiana
        </RankingRowElem>
    </RankingRow>
};

export default RankingHeaderRowComponent;