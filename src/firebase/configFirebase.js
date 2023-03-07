import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getDatabase, ref, onValue } from 'firebase/database';
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/database';
// Your web app's Firebase configuration
export const firebaseConfig = {
    apiKey: 'AIzaSyDpnegMawmDgVbtvlemlpfAqbsjLuXHmBc',
    authDomain: 'online-shop-9201c.firebaseapp.com',
    projectId: 'online-shop-9201c',
    storageBucket: 'online-shop-9201c.appspot.com',
    messagingSenderId: '398788957556',
    appId: '1:398788957556:web:9d1c20a2eaf8616485c821',
    databaseURL: 'https://online-shop.firebaseio.com',
};
// firebase.initializeApp(firebaseConfig);
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;

// export const database = getDatabase();
