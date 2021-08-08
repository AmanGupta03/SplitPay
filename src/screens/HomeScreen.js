import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Title} from 'react-native-paper';
import FormButton from '../components/FormButton';
import Fab from '../components/Fab';

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Title>No Wallet Yet</Title>
      <FormButton
        modeValue="contained"
        title="Create Wallet"
        onPress={() => navigation.navigate('AddRoom')}
      />
      <Fab></Fab>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
