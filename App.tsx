import React from 'react';
import { StyleSheet, View } from 'react-native';
import {Calendario} from './src/components/Calendar';
import {Calendario2} from './src/components/Calendario2';


export default function App() {
  return (
    <View style={styles.container}>
      <Calendario2 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#166088',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
