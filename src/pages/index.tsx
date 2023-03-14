import { useContext, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import axios from "axios";

import { RankingWrapper, RankingRow, RankingRowErrorLoadingElem } from "@/styled/ranking"

import RankingRowComponent from "@/components/rankingRows/RankingRowComponent"
import RankingHeaderRowComponent from "@/components/rankingRows/RankingHeaderRowComponent";


import { SortingModesEnum, SortingOrdersEnum } from "@/util/rankingEnums";
import { RankingContext, TeamType } from "@/store/rankingContext";
import { BALANCE_INITIAL_DATA } from "@/util/rankingConstants";

import { LastUpdateDataHeader } from "@/styled/main";

export default function Home({fetchedTeams}:{fetchedTeams: TeamType[]}) {

  const context = useContext(RankingContext);

  const [currentSortingMode, setCurrentSortingMode] = useState<SortingModesEnum>(SortingModesEnum.Money);
  const [currentSortingOrder, setCurrentSortingOrder] = useState<SortingOrdersEnum>(SortingOrdersEnum.Descending);
  const [isError, toggleIsError] = useState<boolean>(false);

  const sortedTeams = context.teams.length === 0 ? [...fetchedTeams] : [...context.teams];

  switch(currentSortingMode){
    case SortingModesEnum.Money:
      sortedTeams.sort((team1, team2) => currentSortingOrder === SortingOrdersEnum.Ascending 
      ?  team1.returnData.equity - team2.returnData.equity : team2.returnData.equity - team1.returnData.equity);
      break;
    case SortingModesEnum.Name:
      sortedTeams.sort((team1, team2) => currentSortingOrder === SortingOrdersEnum.Ascending ?
      team2.teamName.localeCompare(team1.teamName) : team1.teamName.localeCompare(team2.teamName));
      break;
    case SortingModesEnum.Change:
      sortedTeams.sort((team1, team2) => currentSortingOrder === SortingOrdersEnum.Ascending 
      ?  team1.returnData.balance - team2.returnData.balance : team2.returnData.balance - team1.returnData.balance);
      break;
    default:
        break;
  }

  let teamsRows:JSX.Element[] = sortedTeams.map((elem:TeamType, index:number) => 
  <RankingRowComponent 
    column1={elem.teamName}
    column2={elem.returnData.equity}
    column3={((elem.returnData.equity-BALANCE_INITIAL_DATA) / BALANCE_INITIAL_DATA).toFixed(3)+"%"}
    inspectTeamCallback={() => context.setCurrentlyInspectedTeamID(context.currentlyInspectedTeamID === elem.id ? "" : elem.id)}
    />);

    useEffect(() => {
      if(context.teams.length === 0){
        context.setTeams(fetchedTeams);
      }
    }, [fetchedTeams]);

    useEffect(() => {
      async function getRows(){
        toggleIsError(false);
        try {
          const response = await axios.get(`${process.env.NEXT_PUBLIC_API_ADDRESS}/refresh`);
          const data = response.data;
          context.setTeams(data);
        } catch {
          toggleIsError(true);
        }
      }

      getRows();
    }, []);

  return (
    <>
      <LastUpdateDataHeader>
        Dane aktualizowane co 20 minut
      </LastUpdateDataHeader>
      <AnimatePresence>
        <RankingWrapper layout initial={{transform: "scale(1.0)"}}
          animate={{
            transform: `scale(${context.currentlyInspectedTeamID === "" ? "1.0" : "0.9"})`,
          }}
          transition={{
            duration: 0.1
          }}
        >
          <RankingHeaderRowComponent 
            changeSortingModeCallback={setCurrentSortingMode} 
            changeSortingOrderCallback={setCurrentSortingOrder}
            currentSortingMode={currentSortingMode}
            currentSortingOrder={currentSortingOrder}/>
          {
            teamsRows.length === 0 || isError ? <RankingRow isHeader={false}>
                <RankingRowErrorLoadingElem>
                  {isError ? "Błąd połączenia" : "Ładowanie..."}
                </RankingRowErrorLoadingElem>
            </RankingRow> : teamsRows
          }
        </RankingWrapper>
      </AnimatePresence>
    </>
  )
}

export async function getStaticProps(){
  try{
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_ADDRESS}/get-data`);
  
    const data = await response.data;

    return {
      props: {
        fetchedTeams: data
      },
      revalidate: 10
    }
  } catch(error){
    console.log(error);
  }

  return {
    props: {
      fetchedTeams: []
    },
    revalidate: 10
  }

}
