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
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            flex: 1
          }}
        >
          <View style={{ backgroundColor: '#ffffff' }}>
            <HeaderTitle title="Modal" />
            <Text>Cuerpo modal</Text>
            <Button onPress={() => setIsVisible(false)} title="Cerrar" />
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default ModalScreen
