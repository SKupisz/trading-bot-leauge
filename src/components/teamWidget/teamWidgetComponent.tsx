import React, { useContext } from "react";
import { AnimatePresence } from "framer-motion";
import { useMediaQuery } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

import { TeamWidgetClosingBtn, TeamWidgetHeader, TeamWidgetInfoContainer, TeamWidgetWrapper } from "@/styled/teamWidget";

import { RankingContext } from "@/store/rankingContext";

const TeamWidgetComponent:React.FC = () => {

    const isBiggerThanLaptop = useMediaQuery("(min-width: 1024px)");
    const isBiggerThanTablet = useMediaQuery("(min-width: 768px)");
    const isBiggerThanPhone = useMediaQuery("(min-width: 425px)");
    const isBiggerThanSmallPhone = useMediaQuery("(min-width: 375px)");

    const context = useContext(RankingContext);

    const isOpened = context.currentlyInspectedTeamID !== -1;

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
                    onClick={() => context.setCurrentlyInspectedTeamID(-1)}/>
            </TeamWidgetClosingBtn>
            <TeamWidgetHeader>
                {isOpened ? "Test team" : null}
            </TeamWidgetHeader>
            <TeamWidgetInfoContainer>
                {isOpened ? <>
                </> : null}
            </TeamWidgetInfoContainer>
        </TeamWidgetWrapper>
    </AnimatePresence>
};

export default TeamWidgetComponent;