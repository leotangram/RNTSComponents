import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { styles } from '../theme/appTheme'
import FlatListMenuItem from '../components/FlatListMenuItem'
import { menuItems } from '../data/menuItems'

const HomeScreen = () => {
  const { top } = useSafeAreaInsets()

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
        renderItem={({ item }) => <FlatListMenuItem {...item} />}
      />
    </View>
  )
}

export default HomeScreen
