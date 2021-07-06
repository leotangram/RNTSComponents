import React from 'react'
import { FlatList, Text, View } from 'react-native'

interface MenuItem {
  component: string
  icon: string
  name: string
}

const menuItems: MenuItem[] = [
  {
    component: 'Animation101',
    icon: 'cube-outline',
    name: 'Animation 101'
  }
]

const HomeScreen = () => {
  const renderMenuItem = (menuItem: MenuItem) => {
    return (
      <View>
        <Text>
          {menuItem.name} - {menuItem.icon}
        </Text>
      </View>
    )
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={menuItems}
        keyExtractor={item => item.name}
        renderItem={({ item }) => renderMenuItem(item)}
      />
    </View>
  )
}

export default HomeScreen
