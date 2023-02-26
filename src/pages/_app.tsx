import type {AppProps} from 'next/app'
import {ThemeProvider as NextThemesProvider} from "next-themes";
import {createTheme, NextUIProvider} from "@nextui-org/react";
import {darkTheme, lightTheme} from "@/themes/shared";


export default function App({Component, pageProps}: AppProps) {

    return (

        <NextThemesProvider
            attribute="class"
            defaultTheme="system"
            value={{
                light: lightTheme.className,
                dark: darkTheme.className,
            }}
        >
            <NextUIProvider >
                <Component {...pageProps} />
            </NextUIProvider>
        </NextThemesProvider>

    )
}


