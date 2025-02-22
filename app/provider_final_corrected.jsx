"use client"
import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { MessagesProvider } from './context/MessagesContext'; // Correct import

function Provider({children}) {
    return (
        <MessagesProvider>
            <NextThemesProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
                storageKey="theme"
            >
                {children}
            </NextThemesProvider>
        </MessagesProvider>
    )
}

export default Provider;
