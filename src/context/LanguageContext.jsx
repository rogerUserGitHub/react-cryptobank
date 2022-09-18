import React, {createContext, useState} from 'react';

const LanguageContext = createContext();

function LanguageProvider(props) {

    const { t } = props;

    const [language, setLanguage] = useState('English');

    const changeLanguage = (language) => {
        if (language === 'English') {
            setLanguage('English')
        }
        if (language === 'Dutch')
        setLanguage('Dutch')
    }
    
    return (
        <div>
            <LanguageContext.Provider value={{language, setLanguage, changeLanguage}}>
                {props.children}
            </LanguageContext.Provider>
        </div>
    )
}

export {LanguageContext, LanguageProvider}