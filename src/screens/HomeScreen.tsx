import React from 'react'
import { FlatList, View } from 'react-native'
import { styles } from '../theme/appTheme'
import FlatListMenuItem from '../components/FlatListMenuItem'
import { menuItems } from '../data/menuItems'
import HeaderTitle from '../components/HeaderTitle'
import ItemSeparator from '../components/ItemSeparator'

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, ...styles.globalMargin }}>
      <FlatList
        data={menuItems}
        ItemSeparatorComponent={() => <ItemSeparator />}
        keyExtractor={item => item.name}
        ListHeaderComponent={() => <HeaderTitle title="Menu options" />}
        renderItem={({ item }) => <FlatListMenuItem {...item} />}
      />
    </View>
  )
}

export default HomeScreen
