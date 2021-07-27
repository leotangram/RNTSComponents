import React, { useContext, useState } from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import HeaderTitle from '../components/HeaderTitle'
import FadeInImage from '../components/FadeInImage'
import { ThemeContext } from '../context/themeContext/ThemeContext'

const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5])

  const {
    theme: { colors }
  } = useContext(ThemeContext)

  const loadMore = () => {
    const newArray: number[] = []
    for (let index = 0; index < 5; index++) {
      newArray[index] = numbers.length + index
    }
    setTimeout(() => {
      setNumbers([...numbers, ...newArray])
    }, 1500)
  }

  const renderItem = (item: number) => {
    return (
      <FadeInImage
        style={{ height: 400, width: '100%' }}
        uri={`https://picsum.photos/id/${item}/500/400`}
      />
    )
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={numbers}
        keyExtractor={item => item.toString()}
        ListHeaderComponent={
          <View style={{ marginHorizontal: 20 }}>
            <HeaderTitle title="Infinite scroll" />
          </View>
        }
        ListFooterComponent={
          <View
            style={{
              alignItems: 'center',
              height: 150,
              justifyContent: 'center',
              width: '100%'
            }}
          >
            <ActivityIndicator color={colors.primary} size={25} />
          </View>
        }
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        renderItem={({ item }) => renderItem(item)}
      />
    </View>
  )
}

export default InfiniteScrollScreen

const stylesInfiniteScroll = StyleSheet.create({
  textItem: {
    backgroundColor: 'green',
    height: 150
  }
})
