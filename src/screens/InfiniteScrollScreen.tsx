import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import HeaderTitle from '../components/HeaderTitle'

const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5])

  const loadMore = () => {
    const newArray: number[] = []
    for (let index = 0; index < 5; index++) {
      newArray[index] = numbers.length + index
    }
    setNumbers([...numbers, ...newArray])
  }

  const renderItem = (item: number) => {
    return <Text style={stylesInfiniteScroll.textItem}>{item}</Text>
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={numbers}
        keyExtractor={item => item.toString()}
        ListHeaderComponent={<HeaderTitle title="Infinite scroll" />}
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
