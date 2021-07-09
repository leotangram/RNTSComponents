import React from 'react'
import { Alert, Button, View } from 'react-native'
import prompt from 'react-native-prompt-android'
import HeaderTitle from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'

const AlertScreen = () => {
  const showAlert = () =>
    Alert.alert(
      'Title',
      'Alert body',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'destructive'
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') }
      ],
      {
        cancelable: true,
        onDismiss: () => console.log('onDismiss')
      }
    )

  const showPrompt = () =>
    // Alert.prompt(
    //   'Are you sure?',
    //   'This actions in not reversible',
    //   (value: string) => console.log('info: ', value),
    //   'plain-text',
    //   'Hi!',
    //   'number-pad'
    // )
    prompt(
      'Enter password',
      'Enter your password to claim your $1.5B in lottery winnings',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        {
          text: 'OK',
          onPress: password => console.log('OK Pressed, password: ' + password)
        }
      ],
      {
        type: 'secure-text',
        cancelable: false,
        defaultValue: 'test',
        placeholder: 'placeholder'
      }
    )

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Alerts" />
      <Button onPress={showAlert} title="Show alert" />
      <View style={{ height: 10 }} />
      <Button onPress={showPrompt} title="Show prompt" />
    </View>
  )
}

export default AlertScreen
