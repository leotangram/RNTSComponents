import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import HeaderTitle from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'

const ChangeThemeScreen = () => {
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Theme" />
      <TouchableOpacity
        activeOpacity={0.8}
        style={{
          backgroundColor: '#5856d6',
          borderRadius: 20,
          height: 50,
          justifyContent: 'center',
          width: 150
        }}
      >
        <Text style={{ color: '#ffffff', fontSize: 22, textAlign: 'center' }}>
          Light / Dark
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default ChangeThemeScreen
