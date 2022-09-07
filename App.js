import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Sq1 from './components/Sq1';
import Sq2 from './components/Sq2';
import Sq3 from './components/Sq3';

export default function App() {
  return (
    <View style={styles.container}>
      <Sq1 />
      <Sq2 />
      <Sq3 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  bg1: {
    backgroundColor: 'red'
  }
});
