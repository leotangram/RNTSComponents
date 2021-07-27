import React, { useContext } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import HeaderTitle from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'
import { ThemeContext } from '../context/themeContext/ThemeContext'

const ChangeThemeScreen = () => {
  const {
    setDarkTheme,
    setLightTheme,
    theme: { colors }
  } = useContext(ThemeContext)

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Theme" />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={setLightTheme}
          style={{
            backgroundColor: colors.primary,
            borderRadius: 20,
            height: 50,
            justifyContent: 'center',
            width: 150
          }}
        >
          <Text style={{ color: '#ffffff', fontSize: 22, textAlign: 'center' }}>
            Light
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={setDarkTheme}
          style={{
            backgroundColor: colors.primary,
            borderRadius: 20,
            height: 50,
            justifyContent: 'center',
            width: 150
          }}
        >
          <Text style={{ color: '#ffffff', fontSize: 22, textAlign: 'center' }}>
            Dark
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ChangeThemeScreen
