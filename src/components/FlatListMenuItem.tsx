import React, { FC } from 'react'
import { useNavigation, useTheme } from '@react-navigation/native'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { MenuItem } from '../interfaces/interfaces'

const FlatListMenuItem: FC<MenuItem> = ({ component, icon, name }) => {
  const { navigate } = useNavigation()
  // const { colors } = useTheme()

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigate(component)}
      style={styles.container}
    >
      <Icon color="#5856d6" name={icon} size={23} />
      <Text style={styles.itemText}>{name}</Text>
      <View style={{ flex: 1 }} />
      <Icon color="#5856d6" name="chevron-forward-outline" size={23} />
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
