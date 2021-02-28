import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './src/Main';
import { NativeRouter } from 'react-router-native';

export default function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <Main.Main />
      </View>
    </NativeRouter>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    height: '100%'

  },
});
