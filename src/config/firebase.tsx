// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAt88Mwy53iMzhSu6WQtxsfE0pUtN0v6hM',
  authDomain: 'kevinistakingpictures-ca.firebaseapp.com',
  projectId: 'kevinistakingpictures-ca',
  storageBucket: 'kevinistakingpictures-ca.appspot.com',
  messagingSenderId: '345899431856',
  appId: '1:345899431856:web:57cb775aaad48ca7b5c875',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const providerGoogle = new GoogleAuthProvider();