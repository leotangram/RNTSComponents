import React, { FC, useContext } from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { styles } from '../theme/appTheme'
import { ThemeContext } from '../context/themeContext/ThemeContext'

interface HeaderTitleProps {
  title: string
}

const HeaderTitle: FC<HeaderTitleProps> = ({ title }) => {
  const { top } = useSafeAreaInsets()
  const {
    theme: { colors }
  } = useContext(ThemeContext)

  return (
    <View style={{ marginBottom: 20, marginTop: top + 20 }}>
      <Text style={{ ...styles.title, color: colors.text }}>{title}</Text>
    </View>
  )
}

export default HeaderTitle
