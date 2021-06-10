import React, { ReactElement, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import './src/api/firebase.tsx';
import firebase from 'firebase/app';
import 'firebase/auth';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App(): ReactElement {
  useEffect(() => {
    firebase
      .auth()
      .createUserWithEmailAndPassword('user@example.com', 'test123!')
      .then((userRecord) => {
        // See the UserRecord reference doc for the contents of userRecord.
        console.log('Successfully created new user:', userRecord.user);
      })
      .catch((error) => {
        console.log('Error creating new user:', error);
      });
  }, []);
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
}
