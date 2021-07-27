import { Theme } from '@react-navigation/native'

type ThemeAction = { type: 'set_light_theme' } | { type: 'set_dark_theme' }

export interface ThemeState extends Theme {
  currentTheme: 'light' | 'dark'
  dividerColor: string
}

export const lightTheme: ThemeState = {
  currentTheme: 'light',
  colors: {
    primary: '#084f6a',
    background: 'white',
    card: '#ffffff',
    text: '#000000',
    border: '#000000',
    notification: 'teal'
  },
  dark: false,
  dividerColor: 'rgba(0, 0, 0, 0.6)'
}

export const darkTheme: ThemeState = {
  currentTheme: 'dark',
  colors: {
    primary: '#75cecb',
    background: '#000000',
    card: '#000000',
    text: '#ffffff',
    border: '#000000',
    notification: 'teal'
  },
  dark: true,
  dividerColor: 'rgba(255, 255, 255, 0.6)'
}

export const themeReducer = (
  state: ThemeState,
  action: ThemeAction
): ThemeState => {
  switch (action.type) {
    case 'set_light_theme':
      return lightTheme
    case 'set_dark_theme':
      return darkTheme
    default:
      return state
  }
}
