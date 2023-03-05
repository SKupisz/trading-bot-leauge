import { useContext, useState } from "react";
import { RankingWrapper } from "@/styled/ranking"

import RankingRowComponent from "@/components/rankingRows/RankingRowComponent"
import RankingHeaderRowComponent from "@/components/rankingRows/RankingHeaderRowComponent";
import TeamWidgetComponent from "@/components/teamWidget/teamWidgetComponent";


import { SortingModesEnum, SortingOrdersEnum } from "@/util/rankingEnums";
import { RankingContext } from "@/store/rankingContext";
import { LastUpdateDataHeader } from "@/styled/main";
import { AnimatePresence } from "framer-motion";


type TeamType = {
  name: string;
  money: number;
  change: number;
}

export default function Home() {

  const context = useContext(RankingContext)
  const [currentSortingMode, setCurrentSortingMode] = useState<SortingModesEnum>(SortingModesEnum.Money);
  const [currentSortingOrder, setCurrentSortingOrder] = useState<SortingOrdersEnum>(SortingOrdersEnum.Descending);

  const teams:TeamType[] = [
    {
      name: "firstteam",
      money: 10000,
      change: 0.1
    },
    {
      name: "secondteam",
      money: 8000,
      change: -0.02
    },
    {
      name: "thirdteam",
      money: 10100,
      change: 0.01
    },
  ];

  const sortedTeams = [...teams];

  switch(currentSortingMode){
    case SortingModesEnum.Money:
      sortedTeams.sort((team1, team2) => currentSortingOrder === SortingOrdersEnum.Ascending 
      ?  team1.money - team2.money : team2.money - team1.money);
      break;
    case SortingModesEnum.Name:
      sortedTeams.sort((team1, team2) => currentSortingOrder === SortingOrdersEnum.Ascending ?
      team2.name.localeCompare(team1.name) : team1.name.localeCompare(team2.name));
      break;
    case SortingModesEnum.Change:
      sortedTeams.sort((team1, team2) => currentSortingOrder === SortingOrdersEnum.Ascending 
      ?  team1.change - team2.change : team2.change - team1.change);
      break;
    default:
        break;
  }

  let teamsRows:JSX.Element[] = sortedTeams.map((elem:TeamType, index:number) => 
  <RankingRowComponent 
    column1={elem.name}
    column2={elem.money}
    column3={(elem.change*100).toString()+"%"}
    inspectTeamCallback={() => context.setCurrentlyInspectedTeamID(context.currentlyInspectedTeamID === index ? -1 : index)}
    />);

  return (
    <>
      <LastUpdateDataHeader>
        Ostatnia aktualizacja: HH:MM
      </LastUpdateDataHeader>
      <AnimatePresence>
        <RankingWrapper layout initial={{transform: "scale(1.0)"}}
          animate={{
            transform: `scale(${context.currentlyInspectedTeamID === -1 ? "1.0" : "0.9"})`,
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
