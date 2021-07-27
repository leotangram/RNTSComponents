import React, { FC, useContext, useState } from 'react'
import {
  ActivityIndicator,
  Animated,
  ImageStyle,
  StyleProp,
  View
} from 'react-native'
import useAnimation from '../hooks/useAnimation'
import { ThemeContext } from '../context/themeContext/ThemeContext'
interface FadeInImageProps {
  style?: StyleProp<ImageStyle>
  uri: string
}

const FadeInImage: FC<FadeInImageProps> = ({ style, uri }) => {
  const { fadeIn, opacity } = useAnimation()
  const {
    theme: { colors }
  } = useContext(ThemeContext)

  const [isLoading, setIsLoading] = useState(true)

  const finishLoading = () => {
    setIsLoading(false)
    fadeIn()
  }

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      {isLoading && (
        <ActivityIndicator
          color={colors.primary}
          size={30}
          style={{ position: 'absolute' }}
        />
      )}
      <Animated.Image
        onLoadEnd={finishLoading}
        source={{ uri }}
        style={{ ...(style as any), opacity }}
      />
    </View>
  )
}

export default FadeInImage
