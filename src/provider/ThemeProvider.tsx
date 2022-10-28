import { ReactNode, useState } from 'react'
import { Theme } from '../context/ThemeContext'
import { ThemeContext } from '../context/ThemeContext'
import { ChangeCssRootVariables } from '../model/ChangeCssRootVariables'

interface Props {
    children: ReactNode
}

export const ThemeProvider = ({children, ...props}: Props) => {
    const [theme, setTheme] = useState<Theme>(Theme.LIGHT)
    
    function changeTheme(theme: Theme) {
        setTheme(theme)
        ChangeCssRootVariables(theme)
    }

    return (
        <ThemeContext.Provider 
            value={{
                theme,
                changeTheme,
            }}
            {...props}
        >
            {children}
        </ThemeContext.Provider>
    )
}