import React, { useContext } from 'react'
import { Animated, Button, StyleSheet, View } from 'react-native'
import { ThemeContext } from '../context/themeContext/ThemeContext'
import useAnimation from '../hooks/useAnimation'

const Animation101Screen = () => {
  const { fadeIn, fadeOut, opacity, position, startMovingPosition } =
    useAnimation()

  const {
    theme: { colors }
  } = useContext(ThemeContext)

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.purpleBox,
          backgroundColor: colors.primary,
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
        color={colors.primary}
        onPress={() => {
          fadeIn()
          startMovingPosition(100)
        }}
        title="Fade in"
      />
      <Button color={colors.primary} onPress={fadeOut} title="Fade out" />
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
    height: 150,
    width: 150
  }
})
