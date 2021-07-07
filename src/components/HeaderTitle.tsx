import React, { FC } from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { styles } from '../theme/appTheme'

interface HeaderTitleProps {
  title: string
}

const HeaderTitle: FC<HeaderTitleProps> = ({ title }) => {
  const { top } = useSafeAreaInsets()

  return (
    <View style={{ marginBottom: 20, marginTop: top + 20 }}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

export default HeaderTitle
