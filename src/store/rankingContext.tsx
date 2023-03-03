import React, {createContext, useReducer} from "react";
import { SET_INSPECTED_TEAM_INDEX } from "@/util/rankingConstants"

type stateType = {
    currentlyInspectedTeamID: number;
}

type actionType = {
    type: string;
    payload: any;
}

type rankingContextType = {
    currentlyInspectedTeamID: number;
    setCurrentlyInspectedTeamID: (newID: number) => void;
}

interface RankingContextProviderInterface {
    children: JSX.Element[] | JSX.Element
}

const rankingReducer = (state:stateType, action:actionType) => {
    switch(action.type){
        case SET_INSPECTED_TEAM_INDEX:
            return {...state, currentlyInspectedTeamID: action.payload};
        default:
            return {...state};
    }
};

export const RankingContext = createContext<rankingContextType>({
    currentlyInspectedTeamID: -1,
    setCurrentlyInspectedTeamID: (newId: number) => {}
})

const RankingContextProvider:React.FC<RankingContextProviderInterface> = ({
    children
}:RankingContextProviderInterface) => {

    const [rankingState, dispatch] = useReducer(rankingReducer, {
        currentlyInspectedTeamID: -1
    });

    const setNewTeamID = (newID: number) => dispatch({
        type: SET_INSPECTED_TEAM_INDEX,
        payload: newID
    });

    const value:rankingContextType = {
        currentlyInspectedTeamID: rankingState.currentlyInspectedTeamID,
        setCurrentlyInspectedTeamID: setNewTeamID
    }

    return <RankingContext.Provider value={value}>
        {children}
    </RankingContext.Provider>
};

export default RankingContextProvider;

