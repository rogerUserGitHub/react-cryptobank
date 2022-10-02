import React, {createContext, useState} from 'react';

const DarkModeContext = createContext();

function DarkModeProvider(props) {

    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = (mode) => {
        if (mode === 'light') {
            setDarkMode(false)
        }
        if (mode === 'dark')
        setDarkMode(true)
    }
    
    return (
        <div>
            <DarkModeContext.Provider value={{darkMode, setDarkMode, toggleDarkMode}}>
                {props.children}
            </DarkModeContext.Provider>
        </div>
    )
}

export {DarkModeContext, DarkModeProvider}