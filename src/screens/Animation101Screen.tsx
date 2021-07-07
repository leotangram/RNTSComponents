import React, { useRef } from 'react'
import { Animated, StyleSheet, View } from 'react-native'

const Animation101Screen = () => {
  const opacity = useRef(new Animated.Value(0.4)).current

  return (
    <View style={styles.container}>
      <Animated.View style={{ ...styles.purpleBox, opacity }} />
    </View>
  )
}

export default Animation101Screen

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  purpleBox: {
    backgroundColor: '#5856d6',
    height: 150,
    width: 150
  }
})
