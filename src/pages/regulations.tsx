import { NextPage } from "next";
import Head from "next/head";

import { RegulationsContainer, RegulationsHeader, RegulationsParagraph, RegulationsParagraphHeader } from "@/styled/regulations";

import { regulationsData, regulationsType } from "@/util/regulationsData";

const RegulaminPage:NextPage = () => {
    return <>
        <Head>
            <title>Regulamin - Trading Bot Leauge</title>
        </Head>
        <RegulationsHeader>
            Trading Bot Leauge - regulamin
        </RegulationsHeader>
        <RegulationsContainer>
            {
                regulationsData.map((elem: regulationsType, index:number) => <>
                    <RegulationsParagraphHeader>
                        {`§${index+1} ${elem.title}`}
                    </RegulationsParagraphHeader>
                    {
                        elem.points.map((point:(string | JSX.Element), pointIndex: number) => <RegulationsParagraph>
                            {`${index+1}.${pointIndex+1}`} {point}
                        </RegulationsParagraph>)
                    }
                </>)
            }
        </RegulationsContainer>
    </>
};

export default RegulaminPage;