import React, { useContext } from 'react'
import { useState } from 'react'
import { RefreshControl, ScrollView, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import HeaderTitle from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'
import { ThemeContext } from '../context/themeContext/ThemeContext'

const PullToRefreshScreen = () => {
  const { top } = useSafeAreaInsets()

  const [refreshing, setRefreshing] = useState(false)
  const [data, setData] = useState<string>('')

  const {
    theme: { colors, dark, dividerColor }
  } = useContext(ThemeContext)

  const onRefresh = () => {
    setRefreshing(true)
    setTimeout(() => {
      console.log('Terminamos')
      setRefreshing(false)
      setData('Holi')
    }, 1500)
  }

  return (
    <ScrollView
      style={{ marginTop: refreshing ? top : 0 }}
      refreshControl={
        <RefreshControl
          colors={[colors.text]}
          onRefresh={onRefresh}
          progressBackgroundColor={dividerColor}
          progressViewOffset={10}
          refreshing={refreshing}
          style={{ backgroundColor: '#5856d6' }}
          tintColor="#ffffff"
          title="refreshing"
          titleColor={dark ? '#ffffff' : '#000000'}
        />
      }
    >
      <View style={styles.globalMargin}>
        <HeaderTitle title="PullToRefresh" />
        <HeaderTitle title={data} />
      </View>
    </ScrollView>
  )
}

export default PullToRefreshScreen
