import { useState } from "react";
import { RankingWrapper } from "@/styled/ranking"
import RankingRowComponent from "@/components/RankingRowComponent"
import RankingHeaderRowComponent from "@/components/RankingHeaderRowComponent";
import { SortingEnum } from "@/util/rankingEnums";


type TeamType = {
  name: string;
  money: number;
  change: number;
}

export default function Home() {

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

  return (
    <>
      <RankingWrapper>
        <RankingHeaderRowComponent changeSortingCallback={setCurrentSortingMode}/>
        {
          teams.map((elem:TeamType, index:number) => 
            <RankingRowComponent 
              column1={(index+1).toString()}
              column2={elem.name}
              column3={elem.money.toString()+"$"}
              column4={(elem.change*100).toString()+"%"}
              />)
        }
      </RankingWrapper>
    </>
  )
}
