import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import HeaderTitle from '../components/HeaderTitle'
import CustomSwitch from '../components/CustomSwitch'

const SwitchScreen = () => {
  const [state, setstate] = useState({
    isActive: true,
    isHappy: true,
    isHungry: false
  })

  const { isActive, isHappy, isHungry } = state

  const onChange = (value: boolean, field: string) => {
    setstate({
      ...state,
      [field]: value
    })
  }

  return (
    <View style={{ marginHorizontal: 20 }}>
      <HeaderTitle title="Switches" />
      <View style={styles.switchRow}>
        <Text style={styles.switchText}>isActive</Text>
        <CustomSwitch
          isOn={isActive}
          onChange={value => onChange(value, 'isActive')}
        />
      </View>
      <View style={styles.switchRow}>
        <Text style={styles.switchText}>isHappy</Text>
        <CustomSwitch
          isOn={isHappy}
          onChange={value => onChange(value, 'isHappy')}
        />
      </View>
      <View style={styles.switchRow}>
        <Text style={styles.switchText}>isHungry</Text>
        <CustomSwitch
          isOn={isHungry}
          onChange={value => onChange(value, 'isHungry')}
        />
      </View>
      <Text style={styles.switchText}>{JSON.stringify(state, null, 5)}</Text>
    </View>
  )
}

export default SwitchScreen

const styles = StyleSheet.create({
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
