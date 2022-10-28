import { ReactNode, useState } from 'react'
import { Theme } from '../context/ThemeContext'
import { ThemeContext } from '../context/ThemeContext'
import { ChangeCssRootVariables } from '../model/ChangeCssRootVariables'
import { storage } from '../model/Storage'

interface Props {
    children: ReactNode
}

export const ThemeProvider = ({children, ...props}: Props) => {
    const [theme, setTheme] = useState<Theme>(storage.getItem('theme') || Theme.LIGHT)
    
    ChangeCssRootVariables(theme)
    function changeTheme(theme: Theme) {
        storage.setItem('theme', theme)
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