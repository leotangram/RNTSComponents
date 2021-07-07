import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import FlatListMenuItem from '../components/FlatListMenuItem'
import { menuItems } from '../data/menuItems'
import HeaderTitle from '../components/HeaderTitle'

const HomeScreen = () => {
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
        ListHeaderComponent={() => <HeaderTitle title="Menu options" />}
        renderItem={({ item }) => <FlatListMenuItem {...item} />}
      />
    </View>
  )
}

export default HomeScreen
