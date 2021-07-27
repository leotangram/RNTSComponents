import React, { FC, useContext } from 'react'
import { useNavigation, useTheme } from '@react-navigation/native'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { MenuItem } from '../interfaces/interfaces'
import { ThemeContext } from '../context/themeContext/ThemeContext'

const FlatListMenuItem: FC<MenuItem> = ({ component, icon, name }) => {
  const { navigate } = useNavigation()
  const {
    theme: { colors }
  } = useContext(ThemeContext)

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigate(component)}
      style={styles.container}
    >
      <Icon color={colors.primary} name={icon} size={23} />
      <Text style={styles.itemText}>{name}</Text>
      <View style={{ flex: 1 }} />
      <Icon color={colors.primary} name="chevron-forward-outline" size={23} />
    </TouchableOpacity>
  )
}

export default FlatListMenuItem

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  itemText: {
    fontSize: 19,
    marginLeft: 10
  }
})
