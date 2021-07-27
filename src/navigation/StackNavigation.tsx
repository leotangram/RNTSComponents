import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { ThemeContext } from '../context/themeContext/ThemeContext'
import AlertScreen from '../screens/AlertScreen'
import Animation101Screen from '../screens/Animation101Screen'
import Animation102Screen from '../screens/Animation102Screen'
import ChangeThemeScreen from '../screens/ChangeThemeScreen'
import HomeScreen from '../screens/HomeScreen'
import InfiniteScrollScreen from '../screens/InfiniteScrollScreen'
import ModalScreen from '../screens/ModalScreen'
import PullToRefreshScreen from '../screens/PullToRefreshScreen'
import SectionListScreen from '../screens/SectionListScreen'
import SlidesScreen from '../screens/SlidesScreen'
import SwitchScreen from '../screens/SwitchScreen'
import TextInputScreen from '../screens/TextInputScreen'

const Stack = createStackNavigator()

const StackNavigation = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {
            // backgroundColor: '#ffffff'
          }
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Animation101" component={Animation101Screen} />
        <Stack.Screen name="Animation102" component={Animation102Screen} />
        <Stack.Screen name="Switch" component={SwitchScreen} />
        <Stack.Screen name="Alert" component={AlertScreen} />
        <Stack.Screen name="TextInputs" component={TextInputScreen} />
        <Stack.Screen name="PullToRefresh" component={PullToRefreshScreen} />
        <Stack.Screen name="SectionList" component={SectionListScreen} />
        <Stack.Screen name="Modal" component={ModalScreen} />
        <Stack.Screen name="InfiniteScroll" component={InfiniteScrollScreen} />
        <Stack.Screen name="Slides" component={SlidesScreen} />
        <Stack.Screen name="ChangeTheme" component={ChangeThemeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigation
