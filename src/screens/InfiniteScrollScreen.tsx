import React, { useState } from 'react'
import { ActivityIndicator, Image, StyleSheet, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import HeaderTitle from '../components/HeaderTitle'

const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5])

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
      <Image
        source={{ uri: `https://picsum.photos/id/${item}/500/400` }}
        style={{ height: 400, width: '100%' }}
      />
    )
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={numbers}
        keyExtractor={item => item.toString()}
        ListHeaderComponent={<HeaderTitle title="Infinite scroll" />}
        ListFooterComponent={
          <View
            style={{
              alignItems: 'center',
              height: 150,
              justifyContent: 'center',
              width: '100%'
            }}
          >
            <ActivityIndicator color="#5856d6" size={25} />
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
