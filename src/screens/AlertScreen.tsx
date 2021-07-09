import React from 'react'
import { Alert, Button, View } from 'react-native'
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

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Alerts" />
      <Button onPress={showAlert} title="Show alert" />
    </View>
  )
}

export default AlertScreen
