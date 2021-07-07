import React from 'react'
import { StyleSheet, View } from 'react-native'

const Animation102Screen = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.purpleBox} />
    </View>
  )
}

export default Animation102Screen

const styles = StyleSheet.create({
  purpleBox: {
    backgroundColor: 'orange',
    height: 150,
    width: 150
  }
})
