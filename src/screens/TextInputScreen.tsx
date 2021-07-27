import React, { useContext } from 'react'
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View
} from 'react-native'
import HeaderTitle from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'
import { useForm } from '../hooks/useForm'
import CustomSwitch from '../components/CustomSwitch'
import { ThemeContext } from '../context/themeContext/ThemeContext'

const TextInputScreen = () => {
  const { form, isSubscribed, onChange } = useForm({
    email: '',
    isSubscribed: false,
    name: '',
    phone: ''
  })

  const {
    theme: { colors, dividerColor }
  } = useContext(ThemeContext)

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.globalMargin}>
            <HeaderTitle title="TextInputs" />
            <TextInput
              autoCapitalize="words"
              autoCorrect={false}
              onChangeText={value => onChange(value, 'name')}
              placeholder="Add your name"
              placeholderTextColor={dividerColor}
              style={{
                ...stylesTextInput.inputStyle,
                borderColor: colors.text,
                color: colors.text
              }}
            />
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              keyboardAppearance="dark"
              keyboardType="email-address"
              onChangeText={value => onChange(value, 'email')}
              placeholder="Add your email"
              placeholderTextColor={dividerColor}
              style={{
                ...stylesTextInput.inputStyle,
                borderColor: colors.text,
                color: colors.text
              }}
            />
            <Text>Suscribirme</Text>
            <View style={stylesTextInput.switchRow}>
              <Text style={stylesTextInput.switchText}>isSubscribed</Text>
              <CustomSwitch
                isOn={isSubscribed}
                onChange={value => onChange(value, 'isSubscribed')}
              />
            </View>
            <HeaderTitle title={JSON.stringify(form, null, 3)} />
            <HeaderTitle title={JSON.stringify(form, null, 3)} />
            <TextInput
              keyboardType="phone-pad"
              onChangeText={value => onChange(value, 'phone')}
              placeholder="Add your phone"
              placeholderTextColor={dividerColor}
              style={{
                ...stylesTextInput.inputStyle,
                borderColor: colors.text,
                color: colors.text
              }}
            />
            <View style={{ height: 100 }} />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default TextInputScreen

const stylesTextInput = StyleSheet.create({
  inputStyle: {
    borderRadius: 10,
    borderWidth: 1,
    height: 50,
    marginVertical: 10,
    paddingHorizontal: 10
  },
  switchRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10
  },
  switchText: {
    fontSize: 25
  }
})
