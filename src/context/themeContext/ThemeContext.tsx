import React, { createContext, FC } from 'react'

interface ThemeContextProps {
  theme: any
  setDarkTheme: () => void
  setLightTheme: () => void
}

export const ThemeContext = createContext({} as ThemeContextProps)

export const ThemeProvider: FC = ({ children }) => {
  const theme = {}

  const setDarkTheme = () => {
    console.log('setDarkTheme')
  }

  const setLightTheme = () => {
    console.log('setLightTheme')
  }

  return (
    <ThemeContext.Provider value={{ theme, setDarkTheme, setLightTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
