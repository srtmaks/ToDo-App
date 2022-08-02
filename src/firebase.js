import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCVBEXEJwDiPtU-0AFhRqj9zLkp4YeI3p8",
  authDomain: "fir-app-1b3c5.firebaseapp.com",
  projectId: "fir-app-1b3c5",
  storageBucket: "fir-app-1b3c5.appspot.com",
  messagingSenderId: "1027212707817",
  appId: "1:1027212707817:web:26dae24d8e1a3c808b2d78",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
