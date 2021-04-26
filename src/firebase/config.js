import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD1fXuXgMcsfoYFO7rf369N49uD207j2vc',
  authDomain: 'i-attendance-iium.firebaseapp.com',
  databaseURL: 'https://i-attendance-iium-default-rtdb.firebaseio.com/',
  projectId: 'i-attendance-iium',
  storageBucket: 'i-attendance-iium.appspot.com',
  messagingSenderId: '660966729827',
  appId: '1:660966729827:android:88a09c79bbaf58ffdd7056',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };