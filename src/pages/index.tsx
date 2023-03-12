import { useContext, useState } from "react";
import { AnimatePresence } from "framer-motion";
import axios from "axios";

import { RankingWrapper } from "@/styled/ranking"

import RankingRowComponent from "@/components/rankingRows/RankingRowComponent"
import RankingHeaderRowComponent from "@/components/rankingRows/RankingHeaderRowComponent";
import TeamWidgetComponent from "@/components/teamWidget/teamWidgetComponent";


import { SortingModesEnum, SortingOrdersEnum } from "@/util/rankingEnums";
import { RankingContext } from "@/store/rankingContext";
import { BALANCE_INITIAL_DATA } from "@/util/rankingConstants";

import { LastUpdateDataHeader } from "@/styled/main";

type TeamType = {
  teamName: string;
  id: string;
  time: string | Date;
  returnData: {
    balance: number;
    equity: number;
  }
}

export default function Home({teams}:{teams: TeamType[]}) {

  const context = useContext(RankingContext)
  const [currentSortingMode, setCurrentSortingMode] = useState<SortingModesEnum>(SortingModesEnum.Money);
  const [currentSortingOrder, setCurrentSortingOrder] = useState<SortingOrdersEnum>(SortingOrdersEnum.Descending);

  const sortedTeams = [...teams];

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
    column3={(elem.returnData.equity/ BALANCE_INITIAL_DATA).toFixed(2)+"%"}
    inspectTeamCallback={() => context.setCurrentlyInspectedTeamID(context.currentlyInspectedTeamID === elem.id ? "" : elem.id)}
    />);

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
            teamsRows
          }
        </RankingWrapper>
      </AnimatePresence>
      <TeamWidgetComponent />
    </>
  )
}

export async function getStaticProps(){
  const response = await axios.get(`${process.env.NEXT_PUBLIC_API_ADDRESS}/get-data`);

  const data = response.data;

  return {
    props: {
      teams: data
    }
  }

}
