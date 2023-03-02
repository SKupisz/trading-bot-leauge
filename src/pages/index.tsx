import { RankingWrapper } from "@/styled/ranking"
import RankingRowComponent from "../../components/RankingRowComponent"

export default function Home() {
  return (
    <>
      <RankingWrapper>
        <RankingRowComponent 
          isHeader 
          column1="Pozycja"
          column2="Nazwa"
          column3="Stan konta"
          column4="Zmiana"
          />
        <RankingRowComponent 
          column1="1"
          column2="test"
          column3="10.000$"
          column4="+10%"
          />
      </RankingWrapper>
    </>
  )
}
