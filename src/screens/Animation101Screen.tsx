import React from 'react'
import { Animated, Button, StyleSheet, View } from 'react-native'
import useAnimation from '../hooks/useAnimation'

const Animation101Screen = () => {
  const { fadeIn, fadeOut, opacity, position, startMovingPosition } =
    useAnimation()

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.purpleBox,
          marginBottom: 20,
          opacity,
          transform: [
            {
              translateY: position
            }
          ]
        }}
      />
      <Button
        onPress={() => {
          fadeIn()
          startMovingPosition(100)
        }}
        title="Fade in"
      />
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
