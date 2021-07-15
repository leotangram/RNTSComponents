import React, { FC, useState } from 'react'
import { ActivityIndicator, Animated, View } from 'react-native'
import useAnimation from '../hooks/useAnimation'

interface FadeInImageProps {
  uri: string
}

const FadeInImage: FC<FadeInImageProps> = ({ uri }) => {
  const { fadeIn, opacity } = useAnimation()

  const [isLoading, setIsLoading] = useState(true)

  const finishLoading = () => {
    setIsLoading(false)
    fadeIn()
  }

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      {isLoading && (
        <ActivityIndicator
          color="5856d6"
          size={30}
          style={{ position: 'absolute' }}
        />
      )}
      <Animated.Image
        onLoadEnd={finishLoading}
        source={{ uri }}
        style={{ height: 400, opacity, width: '100%' }}
      />
    </View>
  )
}

export default FadeInImage
