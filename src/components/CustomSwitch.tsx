import React, { FC, useState } from 'react'
import { Platform, Switch } from 'react-native'

interface CustomSwitchProps {
  isOn: boolean
  onChange: (isEnabled: boolean) => void
}

const CustomSwitch: FC<CustomSwitchProps> = ({ isOn, onChange }) => {
  const [isEnabled, setIsEnabled] = useState(isOn)

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled)
    onChange(!isEnabled)
  }

  return (
    <Switch
      trackColor={{ false: '#d9d9db', true: '#5856d6' }}
      thumbColor={Platform.OS === 'android' ? '#5856d6' : ''}
      // ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  )
}

export default CustomSwitch
