import React, { useRef } from 'react'
import { Animated, Button, StyleSheet, View } from 'react-native'

const Animation101Screen = () => {
  const opacity = useRef(new Animated.Value(0)).current

  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true
    }).start()
  }

  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true
    }).start()
  }

  return (
    <View style={styles.container}>
      <Animated.View
        style={{ ...styles.purpleBox, marginBottom: 20, opacity }}
      />
      <Button onPress={fadeIn} title="Fade in" />
      <Button onPress={fadeOut} title="Fade out" />
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
