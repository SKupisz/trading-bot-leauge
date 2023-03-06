import { NextPage } from "next";
import React from "react";

import { ErrorContainer, ErrorContent, ErrorHeader } from "@/styled/error404";

const Error404:NextPage = () => {
    return <ErrorContainer>
        <ErrorHeader>
            Ups!
        </ErrorHeader>
        <ErrorContent>
            Wygląda na to, że niestety nie mamy tego, czego szukasz 😕. Sprawdź adres URL lub przyjdź tutaj później
        </ErrorContent>
    </ErrorContainer>
};

export default Error404;