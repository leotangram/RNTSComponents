import React, { FC } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { MenuItem } from '../interfaces/interfaces'

const FlatListMenuItem: FC<MenuItem> = ({ icon, name }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.container}>
      <Icon name={icon} size={23} />
      <Text style={styles.itemText}>{name}</Text>
      <View style={{ flex: 1 }} />
      <Icon name="chevron-forward-outline" size={23} />
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
