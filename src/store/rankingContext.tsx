import React, {createContext, useReducer} from "react";
import { SET_INSPECTED_TEAM_INDEX, SET_TEAMS } from "@/util/rankingConstants"

type stateType = {
    currentlyInspectedTeamID: string;
    teams: TeamType[];
}

export type TeamType = {
    teamName: string;
    id: string;
    time: string | Date;
    returnData: {
      balance: number;
      equity: number;
    }
  }

type actionType = {
    type: string;
    payload: any;
}

type rankingContextType = {
    currentlyInspectedTeamID: string;
    teams: TeamType[],
    setCurrentlyInspectedTeamID: (newID: string) => void;
    setTeams: (newTeams: TeamType[]) => void;
}

interface RankingContextProviderInterface {
    children: JSX.Element[] | JSX.Element
}

const rankingReducer = (state:stateType, action:actionType) => {
    switch(action.type){
        case SET_INSPECTED_TEAM_INDEX:
            return {...state, currentlyInspectedTeamID: action.payload};
        case SET_TEAMS: 
            return {...state, teams: action.payload};
        default:
            return {...state};
    }
};

export const RankingContext = createContext<rankingContextType>({
    currentlyInspectedTeamID: "",
    teams: [],
    setCurrentlyInspectedTeamID: (newId: string) => {},
    setTeams: (newTeams: TeamType[]) => {}
})

const RankingContextProvider:React.FC<RankingContextProviderInterface> = ({
    children
}:RankingContextProviderInterface) => {

    const [rankingState, dispatch] = useReducer(rankingReducer, {
        currentlyInspectedTeamID: "",
        teams: []
    });

    const setNewTeamID = (newID: string) => dispatch({
        type: SET_INSPECTED_TEAM_INDEX,
        payload: newID
    });

    const setTeams = (newTeams: TeamType[]) => dispatch({
        type: SET_TEAMS,
        payload: newTeams
    })

    const value:rankingContextType = {
        currentlyInspectedTeamID: rankingState.currentlyInspectedTeamID,
        teams: [],
        setCurrentlyInspectedTeamID: setNewTeamID,
        setTeams: setTeams
    }

    return <RankingContext.Provider value={value}>
        {children}
    </RankingContext.Provider>
};

export default RankingContextProvider;

