import React, { ReactNode } from "react";
//import * as React from 'react';
import { Language, LanguageContextType } from "@/@types/language"; 

export const LanguageContext = React.createContext<LanguageContextType | null>(null)

interface Props {
    children: ReactNode;
}

const LanguageProvider = ({children}: Props) => {
    const [language, setLanguage] = React.useState<Language>('eng')

    return (
        <LanguageContext.Provider value = {{language: language, changeLanguage: setLanguage}}>
            {children}
        </LanguageContext.Provider>
    )
}

export default LanguageProvider