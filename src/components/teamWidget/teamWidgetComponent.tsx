import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AnimatePresence } from "framer-motion";
import { useMediaQuery } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

import { TeamWidgetClosingBtn, TeamWidgetErrorHeader, TeamWidgetHeader, TeamWidgetInfoContainer, TeamWidgetWrapper } from "@/styled/teamWidget";
import { RankingContext } from "@/store/rankingContext";

type transactionDataType = {
    open_price: number;
    close_price: number;
    open_timeString: string | Date;
    close_timString: string | Date;
    profit: number;
    symbol: string;
};

const TeamWidgetComponent:React.FC = () => {

    const isBiggerThanLaptop = useMediaQuery("(min-width: 1024px)");
    const isBiggerThanTablet = useMediaQuery("(min-width: 768px)");
    const isBiggerThanPhone = useMediaQuery("(min-width: 425px)");
    const isBiggerThanSmallPhone = useMediaQuery("(min-width: 375px)");

    const context = useContext(RankingContext);

    const isOpened = context.currentlyInspectedTeamID !== "";

    const [transactionData, setTransactionData] = useState<transactionDataType[]>([]);
    const [isError, toggleIsError] = useState<boolean>(false);

    useEffect(() => {
        toggleIsError(false);
        const getTeamDataCallback = async() =>{
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_ADDRESS}/get-trades/${context.currentlyInspectedTeamID}`);
                const data:transactionDataType[] = response.data;
                setTransactionData(data);
            } catch (error) {
                setTransactionData([]);
                toggleIsError(true);
            }
        };

        if(isOpened) getTeamDataCallback();
        else {
            setTransactionData([]);
        }

    }, [isOpened]);

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
                {isOpened ? "Test team" : null}
            </TeamWidgetHeader>
            <TeamWidgetInfoContainer>
                {isOpened ? isError ? <TeamWidgetErrorHeader>
                    Błąd sieciowy. Spróbuj ponownie
                </TeamWidgetErrorHeader> : <>

                </> : null}
            </TeamWidgetInfoContainer>
        </TeamWidgetWrapper>
    </AnimatePresence>
};

export default TeamWidgetComponent;