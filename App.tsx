import 'react-native-gesture-handler'
import React from 'react'
import { ThemeProvider } from './src/context/themeContext/ThemeContext'
import StackNavigation from './src/navigation/StackNavigation'

const App = () => {
  return (
    <ThemeProvider>
      <StackNavigation />
    </ThemeProvider>
  )
}

export default App
