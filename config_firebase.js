// config_firebase.js
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyBCnNAV6gRDxbkBhYkYMxP-e6EXQrc--KY",
  authDomain: "proyecto-ecad.firebaseapp.com",
  projectId: "proyecto-ecad",
  storageBucket: "proyecto-ecad.appspot.com",
  messagingSenderId: "435404159386",
  appId: "1:435404159386:web:132088824d16417288e223",
  measurementId: "G-9T01JZGRMD",
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

// Initialize Firebase Auth with AsyncStorage for persistence
const auth = initializeAuth(appFirebase, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export { auth, appFirebase }; // Exporta auth y appFirebase