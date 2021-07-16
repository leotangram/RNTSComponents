import React, { FC, useRef, useState } from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import {
  Animated,
  Dimensions,
  Image,
  ImageSourcePropType,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import Icon from 'react-native-vector-icons/Ionicons'
import useAnimation from '../hooks/useAnimation'

const { width: screenWidth } = Dimensions.get('window')

interface Slide {
  title: string
  desc: string
  img: ImageSourcePropType
}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../assets/slide-1.png')
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../assets/slide-2.png')
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../assets/slide-3.png')
  }
]

interface SlidesScreen extends StackScreenProps<any, any> {}

const SlidesScreen: FC<SlidesScreen> = ({ navigation }) => {
  const { fadeIn, opacity } = useAnimation()
  const isVisible = useRef(false)

  const [activeIndex, setActiveIndex] = useState(0)

  const renderItem = (item: Slide) => {
    return (
      <View
        style={{
          backgroundColor: '#ffffff',
          borderRadius: 5,
          flex: 1,
          justifyContent: 'center',
          padding: 40
        }}
      >
        <Image
          source={item.img}
          style={{ height: 400, resizeMode: 'center', width: 350 }}
        />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subTitle}>{item.desc}</Text>
      </View>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 50 }}>
      <Carousel
        data={items}
        itemWidth={screenWidth}
        layout="default"
        onSnapToItem={index => {
          setActiveIndex(index)
          if (index === items.length - 1) {
            isVisible.current = true
            fadeIn()
          }
        }}
        renderItem={({ item }) => renderItem(item)}
        sliderWidth={screenWidth}
      />
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20
        }}
      >
        <Pagination
          activeDotIndex={activeIndex}
          dotsLength={items.length}
          dotStyle={{
            backgroundColor: '#5856d6',
            borderRadius: 10,
            height: 10,
            width: 10
          }}
        />
        <Animated.View style={{ opacity }}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              if (isVisible.current) {
                navigation.navigate('Home')
              }
            }}
            style={{
              alignItems: 'center',
              backgroundColor: '#5856d6',
              borderRadius: 10,
              flexDirection: 'row',
              height: 50,
              justifyContent: 'center',
              width: 140
            }}
          >
            <Text style={{ color: '#ffffff', fontSize: 25 }}>Enter</Text>
            <Icon color="#ffffff" name="chevron-forward-outline" size={30} />
          </TouchableOpacity>
        </Animated.View>
      </View>
    </SafeAreaView>
  )
}

export default SlidesScreen

const styles = StyleSheet.create({
  title: {
    color: '#5856d6',
    fontSize: 30,
    fontWeight: 'bold'
  },
  subTitle: {
    fontSize: 16
  }
})
