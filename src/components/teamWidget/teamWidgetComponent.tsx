import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AnimatePresence } from "framer-motion";
import { useMediaQuery } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

import { TeamWidgetClosingBtn, TeamWidgetErrorHeader, TeamWidgetHeader, TeamWidgetInfoContainer, TeamWidgetTeamInfo, TeamWidgetWrapper } from "@/styled/teamWidget";
import { RankingContext, TeamType } from "@/store/rankingContext";
import { BALANCE_INITIAL_DATA } from "@/util/rankingConstants";

type transactionDataType = {
    open_price: number;
    close_price: number | null;
    open_timeString: string | Date;
    close_timString: string | Date | null;
    profit: number;
    symbol: string;
};

type investingsCounterType = {
    symbol: string;
    occurances: number;
}

const TeamWidgetComponent:React.FC = () => {

    const isBiggerThanLaptop = useMediaQuery("(min-width: 1024px)");
    const isBiggerThanTablet = useMediaQuery("(min-width: 768px)");
    const isBiggerThanPhone = useMediaQuery("(min-width: 425px)");
    const isBiggerThanSmallPhone = useMediaQuery("(min-width: 375px)");

    const context = useContext(RankingContext);

    const isOpened = context.currentlyInspectedTeamID.localeCompare("") !== 0;
    const currentTeamPointer = context.teams.filter((elem: TeamType) => elem.id.localeCompare(context.currentlyInspectedTeamID) === 0);

    const [transactionData, setTransactionData] = useState<transactionDataType[]>([]);
    const [isError, toggleIsError] = useState<boolean>(false);
    const [isLoading, toggleIsLoading] = useState<boolean>(false);

    useEffect(() => {
        toggleIsError(false);
        const getTeamDataCallback = async() =>{
            toggleIsLoading(true);
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_ADDRESS}/get-trades/${context.currentlyInspectedTeamID}`);
                const data:transactionDataType[] = response.data;
                console.log(data);
                setTransactionData(data);
            } catch (error) {
                setTransactionData([]);
                toggleIsError(true);
            }
            toggleIsLoading(false);
        };

        if(isOpened) getTeamDataCallback();
        else {
            setTransactionData([]);
        }

    }, [context.currentlyInspectedTeamID]);

    const symbols:string[] = [...new Set<string>(transactionData.map((elem: transactionDataType) => elem.symbol))];
    const investingsCounter:investingsCounterType[] = [...symbols.map((elem: string, _) => {return {symbol: elem, occurances: 0}})];

    for(let i = 0; i < transactionData.length; i++){
        investingsCounter.filter((elem: investingsCounterType, _) => elem.symbol === transactionData[i].symbol)[0].occurances++;
    }

    const mostlyInvestedAssetsOperand:investingsCounterType[] = investingsCounter.sort((elem1: investingsCounterType, elem2: investingsCounterType) => elem2.occurances - elem1.occurances)

    const mostlyInvestedAssets:string[] = [];

    if(mostlyInvestedAssetsOperand.length > 0){
        let assetsInd = 0;
        while(assetsInd < mostlyInvestedAssetsOperand.length 
            && mostlyInvestedAssetsOperand[assetsInd].occurances === mostlyInvestedAssetsOperand[0].occurances){
                mostlyInvestedAssets.push(mostlyInvestedAssetsOperand[assetsInd].symbol);
                assetsInd++;
        }
    }

    const avgProfit:number = transactionData.reduce((sum:number, currentTransaction:transactionDataType) => sum + currentTransaction.profit, 0)/transactionData.length;
    
    return <AnimatePresence>
        <TeamWidgetWrapper layout initial={{
            left: "105%"
        }} animate={{
            left: isOpened ? isBiggerThanLaptop ? "55%" : isBiggerThanTablet ? "40%" : isBiggerThanPhone ? "20%" : isBiggerThanSmallPhone ? "10%" : "1%" : "105%"
        }} transition={{
            duration: 0.4,
            delay: 0.1
        }}>
            <TeamWidgetClosingBtn type="button">
                <CloseIcon style={{color: "inherit", fontSize: "inherit"}} 
                    onClick={() => context.setCurrentlyInspectedTeamID("")}/>
            </TeamWidgetClosingBtn>
            <TeamWidgetHeader>
                {isOpened ? currentTeamPointer[0].teamName : null}
            </TeamWidgetHeader>
            <TeamWidgetInfoContainer>
                {isOpened ? <>
                    <TeamWidgetTeamInfo>
                        Wartość początkowa: {BALANCE_INITIAL_DATA}PLN
                    </TeamWidgetTeamInfo>
                    <TeamWidgetTeamInfo>
                        Wartość obecna: {currentTeamPointer[0].returnData.equity}PLN
                    </TeamWidgetTeamInfo>
                    <TeamWidgetTeamInfo>
                        Zmiana od początku gry: {((currentTeamPointer[0].returnData.equity-BALANCE_INITIAL_DATA) /BALANCE_INITIAL_DATA).toFixed(3)}%
                    </TeamWidgetTeamInfo>
                </> : null}
            </TeamWidgetInfoContainer>
            <TeamWidgetInfoContainer>
                <TeamWidgetErrorHeader>
                    {isError ? "Błąd połączenia. Spróbuj ponownie" : "Historia transakcji"}
                </TeamWidgetErrorHeader>
                {isOpened && !isError ? isLoading 
                ? <TeamWidgetTeamInfo>
                    Ładowanie...
                </TeamWidgetTeamInfo>
                : transactionData.length === 0 
                    ? <TeamWidgetTeamInfo>
                        Brak danych
                    </TeamWidgetTeamInfo> 
                    : <>
                        <TeamWidgetTeamInfo>
                            Inwestycje: {symbols.join(", ")}
                        </TeamWidgetTeamInfo>
                        <TeamWidgetTeamInfo>
                            Najczęściej inwestują w: {mostlyInvestedAssets.join(", ")}
                        </TeamWidgetTeamInfo>
                        <TeamWidgetTeamInfo>
                            Średni profit: {avgProfit.toFixed(3)}
                        </TeamWidgetTeamInfo>
                </> : null}
            </TeamWidgetInfoContainer>
        </TeamWidgetWrapper>
    </AnimatePresence>
};

export default TeamWidgetComponent;