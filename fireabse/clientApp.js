import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-zzxu5-mybEjmWWo3__oVJYtvTdZ9v6I",
  authDomain: "mihan-1d50f.firebaseapp.com",
  projectId: "mihan-1d50f",
  storageBucket: "mihan-1d50f.appspot.com",
  messagingSenderId: "525209437903",
  appId: "1:525209437903:web:027365710a3adbc7dd19ba",
  measurementId: "G-T289CM7NYX"
};

// if(!firebase?.getApps?.length){
//     firebase.initializeApp(firebaseConfig)
// }

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// export default firebase
export const authApp=app