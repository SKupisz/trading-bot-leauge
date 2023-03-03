import React, { Dispatch, SetStateAction } from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

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

    const dropDownUpStyle = {
        color: "inherit",
        fontSize: "inherit",
        display: "inline-block",
        verticalAlign: "middle"
    }

    return <RankingRow isHeader>
        <RankingRowElem isClickable onClick={() => changeSortingCallback(SortingModesEnum.Name)}>
            Nazwa {
                currentSortingMode === SortingModesEnum.Name ? 
                currentSortingOrder === SortingOrdersEnum.Descending ?
                <ArrowDropDownIcon style={dropDownUpStyle} />
                : <ArrowDropUpIcon style={dropDownUpStyle} />
                : null
            }
        </RankingRowElem>
        <RankingRowElem isClickable onClick={() => changeSortingCallback(SortingModesEnum.Money)}>
            Stan {
                currentSortingMode === SortingModesEnum.Money ? 
                currentSortingOrder === SortingOrdersEnum.Descending ?
                <ArrowDropDownIcon style={dropDownUpStyle} />
                : <ArrowDropUpIcon style={dropDownUpStyle} />
                : null
            }
        </RankingRowElem>
        <RankingRowElem isClickable onClick={() => changeSortingCallback(SortingModesEnum.Change)}>
            Zmiana {
                currentSortingMode === SortingModesEnum.Change ? 
                currentSortingOrder === SortingOrdersEnum.Descending ?
                <ArrowDropDownIcon style={dropDownUpStyle} />
                : <ArrowDropUpIcon style={dropDownUpStyle} />
                : null
            }
        </RankingRowElem>
    </RankingRow>
};

export default RankingHeaderRowComponent;