import {useTheme as useNextTheme} from 'next-themes'
import {Switch, SwitchProps, useTheme} from '@nextui-org/react'
import React from "react";



export const ThemeToggleSwitch: React.FC = () => {

    const {setTheme} = useNextTheme();
    const {isDark, type} = useTheme();

    return (
        <Switch
            checked={isDark}
            onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
        />
    )
}
