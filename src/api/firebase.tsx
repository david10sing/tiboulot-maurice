import firebase from 'firebase/app';
import { API_KEY, AUTH_DOMAIN, PROJECT_ID, APP_ID } from 'react-native-dotenv';

// Optionally import the services that you want to use
import 'firebase/auth';
// import * as firebaseui from 'firebaseui';

// Initialize Firebase
export const firebaseConfig = {
  apiKey: API_KEY,
  projectId: PROJECT_ID,
  appId: APP_ID,
  authDomain: AUTH_DOMAIN,
  //   databaseURL: 'https://project-id.firebaseio.com',
  //   storageBucket: 'project-id.appspot.com',
  //   messagingSenderId: 'sender-id',
  //   measurementId: 'G-measurement-id',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();

auth.useEmulator('http://192.168.100.239:9099');

export { auth };
