import React, { useState } from 'react'
import { Button, Modal, Text, View } from 'react-native'
import HeaderTitle from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'

const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Modal" />
      <Button onPress={() => setIsVisible(true)} title="Open modal" />
      <Modal animationType="fade" transparent visible={isVisible}>
        <View
          style={{
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            flex: 1,
            justifyContent: 'center'
          }}
        >
          <View
            style={{
              alignItems: 'center',
              backgroundColor: '#ffffff',
              borderRadius: 5,
              elevation: 10,
              height: 200,
              justifyContent: 'center',
              shadowOffset: {
                height: 10,
                width: 0
              },
              shadowOpacity: 0.25,
              width: 200
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Modal</Text>
            <Text style={{ fontSize: 16, fontWeight: '300', marginBottom: 20 }}>
              Cuerpo modal
            </Text>
            <Button onPress={() => setIsVisible(false)} title="Cerrar" />
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default ModalScreen
