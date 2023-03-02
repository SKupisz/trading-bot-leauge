import { RankingWrapper, RankingRow, RankingRowElem } from "@/styled/ranking"

export default function Home() {
  return (
    <>
      <RankingWrapper>
        <RankingRow isHeader>
          <RankingRowElem>
            Pozycja
          </RankingRowElem>
          <RankingRowElem>
            Nazwa
          </RankingRowElem>
          <RankingRowElem>
            Stan konta
          </RankingRowElem>
          <RankingRowElem>
            Zmiana
          </RankingRowElem>
        </RankingRow>
      </RankingWrapper>
    </>
  )
}
