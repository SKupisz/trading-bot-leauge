import React, {createContext, useReducer} from "react";
import { SET_INSPECTED_TEAM_INDEX } from "@/util/rankingConstants"

type stateType = {
    currentlyInspectedTeamID: string;
}

type actionType = {
    type: string;
    payload: any;
}

type rankingContextType = {
    currentlyInspectedTeamID: string;
    setCurrentlyInspectedTeamID: (newID: string) => void;
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
    currentlyInspectedTeamID: "",
    setCurrentlyInspectedTeamID: (newId: string) => {}
})

const RankingContextProvider:React.FC<RankingContextProviderInterface> = ({
    children
}:RankingContextProviderInterface) => {

    const [rankingState, dispatch] = useReducer(rankingReducer, {
        currentlyInspectedTeamID: ""
    });

    const setNewTeamID = (newID: string) => dispatch({
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

