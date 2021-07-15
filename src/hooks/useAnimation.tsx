import { useRef } from 'react'
import { Animated } from 'react-native'

const useAnimation = () => {
  const opacity = useRef(new Animated.Value(0)).current
  const position = useRef(new Animated.Value(0)).current

  const fadeIn = (duration: number = 300) =>
    Animated.timing(opacity, {
      toValue: 1,
      duration,
      useNativeDriver: true
    }).start()

  const fadeOut = () =>
    Animated.timing(opacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true
    }).start()

  const startMovingPosition = (
    initPosition: number = -100,
    duration: number = 300
  ) => {
    position.setValue(initPosition)

    Animated.timing(position, {
      toValue: 0,
      duration,
      // easing: Easing.bounce,
      useNativeDriver: true
    }).start()
  }

  return { fadeIn, fadeOut, opacity, position, startMovingPosition }
}

export default useAnimation
