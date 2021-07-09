import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import HeaderTitle from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'

const TextInputScreen = () => {
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="TextInputs" />
      <TextInput style={stylesTextInput.inputStyle} />
    </View>
  )
}

export default TextInputScreen

const stylesTextInput = StyleSheet.create({
  inputStyle: {
    borderColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 10,
    borderWidth: 1,
    height: 50,
    paddingHorizontal: 10
  }
})
