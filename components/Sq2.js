import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Sq2() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>this is square</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width: 50, 
        height: 50, 
        alignItems:'center', 
        justifyContent: 'center',
        backgroundColor: 'blue'
    },
    title: {
        color: 'red',
    }
})