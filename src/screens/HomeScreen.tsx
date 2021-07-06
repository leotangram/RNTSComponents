import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { styles } from '../theme/appTheme'

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
  },
  {
    component: 'Animation102',
    icon: 'albums-outline',
    name: 'Animation 102'
  }
]

const HomeScreen = () => {
  const { top } = useSafeAreaInsets()

  const renderMenuItem = (menuItem: MenuItem) => {
    return (
      <View>
        <Text>
          {menuItem.name} - {menuItem.icon}
        </Text>
      </View>
    )
  }

  const renderListHeader = () => {
    return (
      <View style={{ marginBottom: 20, marginTop: top + 20 }}>
        <Text style={styles.title}>Menu options</Text>
      </View>
    )
  }

  const itemSeparator = () => {
    return (
      <View style={{ borderBottomWidth: 1, marginVertical: 8, opacity: 0.4 }} />
    )
  }

  return (
    <View style={{ flex: 1, ...styles.globalMargin }}>
      <FlatList
        data={menuItems}
        ItemSeparatorComponent={itemSeparator}
        keyExtractor={item => item.name}
        ListHeaderComponent={renderListHeader}
        renderItem={({ item }) => renderMenuItem(item)}
      />
    </View>
  )
}

export default HomeScreen
