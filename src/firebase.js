import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { functions } from "firebase";

/*
const firebaseConfig = {
  apiKey: "AIzaSyA9WZB5N6ekNxyN3yGaUwjuBilvXItUv38",
  authDomain: "fir-auth-article.firebaseapp.com",
  databaseURL: "https://fir-auth-article.firebaseio.com",
  projectId: "fir-auth-article",
  storageBucket: "fir-auth-article.appspot.com",
  messagingSenderId: "774252759419",
  appId: "1:774252759419:web:e014ddfa3553a4832a15de",
  measurementId: "G-77Z5WJ0SET"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

*/
//////////////////////////////////////////////////////////



  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAqlcMf3fxzreAVhmHK8gdSTqwHBqsVVMg",
    authDomain: "proyectoagendareact.firebaseapp.com",
    projectId: "proyectoagendareact",
    storageBucket: "proyectoagendareact.appspot.com",
    messagingSenderId: "1001408691106",
    appId: "1:1001408691106:web:a1330275e5da4282f590fb"
  };
  
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);





/////////////////////////////////////////////////////////

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { email, displayName, photoURL } = user;
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        ...additionalData
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};

const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();

    return {
      uid,
      ...userDocument.data()
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};
