import { useContext, useEffect, useState } from "react";
import { RankingWrapper } from "@/styled/ranking"

import RankingRowComponent from "@/components/RankingRowComponent"
import RankingHeaderRowComponent from "@/components/RankingHeaderRowComponent";

import { SortingEnum } from "@/util/rankingEnums";
import { RankingContext } from "@/store/rankingContext";


type TeamType = {
  name: string;
  money: number;
  change: number;
}

export default function Home() {

  const context = useContext(RankingContext)
  const [currentSortingMode, setCurrentSortingMode] = useState<SortingEnum>(SortingEnum.Position);

  const teams:TeamType[] = [
    {
      name: "Team 1",
      money: 10000,
      change: 0.1
    },
    {
      name: "Team 2",
      money: 8000,
      change: -0.02
    },
    {
      name: "Team 3",
      money: 10100,
      change: 0.01
    },
  ];

  const sortedTeams = [...teams];

  switch(currentSortingMode){
    case SortingEnum.Money:
      sortedTeams.sort((team1, team2) => team2.money - team1.money);
      break;
    case SortingEnum.Name:
      sortedTeams.sort((team1, team2) => {
        if(team1.name < team2.name) return -1;
        if(team1.name > team2.name) return 1;
        return 0;
      });
    case SortingEnum.Change:
      sortedTeams.sort((team1, team2) => team2.change - team1.change);
    default:
        break;
  }

  let teamsRows:JSX.Element[] = sortedTeams.map((elem:TeamType, index:number) => 
  <RankingRowComponent 
    column1={(index+1).toString()}
    column2={elem.name}
    column3={elem.money.toString()+"$"}
    column4={(elem.change*100).toString()+"%"}
    inspectTeamCallback={() => context.setCurrentlyInspectedTeamID(context.currentlyInspectedTeamID === index ? -1 : index)}
    />);

  return (
    <>
      <RankingWrapper>
        <RankingHeaderRowComponent changeSortingCallback={setCurrentSortingMode}/>
        {
          teamsRows
        }
      </RankingWrapper>
    </>
  )
}
