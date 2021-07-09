import React, { useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import HeaderTitle from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'

const TextInputScreen = () => {
  const [form, setForm] = useState({
    email: '',
    name: '',
    phone: ''
  })

  const { email, name, phone } = form

  const onChange = (value: string, field: string) =>
    setForm({
      ...form,
      [field]: value
    })

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="TextInputs" />
      <TextInput
        autoCapitalize="words"
        autoCorrect={false}
        onChangeText={value => onChange(value, 'name')}
        placeholder="Add your name"
        style={stylesTextInput.inputStyle}
      />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        keyboardAppearance="dark"
        keyboardType="email-address"
        onChangeText={value => onChange(value, 'email')}
        placeholder="Add your email"
        style={stylesTextInput.inputStyle}
      />
      <TextInput
        keyboardType="phone-pad"
        onChangeText={value => onChange(value, 'phone')}
        placeholder="Add your phone"
        style={stylesTextInput.inputStyle}
      />
      <HeaderTitle title={JSON.stringify(form, null, 3)} />
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
    marginVertical: 10,
    paddingHorizontal: 10
  }
})
