import React, { FC, useContext, useState } from 'react'
import { Platform, Switch } from 'react-native'
import { ThemeContext } from '../context/themeContext/ThemeContext'

interface CustomSwitchProps {
  isOn: boolean
  onChange: (isEnabled: boolean) => void
}

const CustomSwitch: FC<CustomSwitchProps> = ({ isOn, onChange }) => {
  const [isEnabled, setIsEnabled] = useState(isOn)
  const {
    theme: { colors }
  } = useContext(ThemeContext)

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled)
    onChange(!isEnabled)
  }

  return (
    <Switch
      trackColor={{ false: '#d9d9db', true: colors.primary }}
      thumbColor={Platform.OS === 'android' ? colors.primary : ''}
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  )
}

export default CustomSwitch
