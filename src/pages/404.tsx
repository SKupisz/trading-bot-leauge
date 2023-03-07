import React from "react";
import { NextPage } from "next";
import Head from "next/head";

import { ErrorContainer, ErrorContent, ErrorHeader } from "@/styled/error404";

const Error404:NextPage = () => {
    return <>
        <Head>
            <title>Error 404 - Trading Bot Leauge</title>
        </Head>
        <ErrorContainer>
            <ErrorHeader>
                Ups!
            </ErrorHeader>
            <ErrorContent>
                Wygląda na to, że niestety nie mamy tego, czego szukasz 😕. Sprawdź adres URL lub przyjdź tutaj później
            </ErrorContent>
        </ErrorContainer>
    </>
};

export default Error404;