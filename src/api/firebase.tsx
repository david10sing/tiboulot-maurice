import firebase from 'firebase/app';
import { API_KEY, AUTH_DOMAIN, PROJECT_ID, APP_ID } from 'react-native-dotenv';

// Optionally import the services that you want to use
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
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
const firestore = firebase.firestore();
const storage = firebase.storage();

// if (process.env.NODE_ENV === 'development') {
// }
auth.useEmulator('http://localhost:9099');
firestore.useEmulator('localhost', 8080);
storage.useEmulator('localhost', 9199);

export { auth, firestore };
