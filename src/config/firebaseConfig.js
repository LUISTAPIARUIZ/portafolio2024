// Importar las funciones necesarias desde Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDGBcB3n5n-IoQsOfU-vnIAnUXD8JzqzzI",
  authDomain: "portafolioltr.firebaseapp.com",
  projectId: "portafolioltr",
  storageBucket: "portafolioltr.appspot.com",
  messagingSenderId: "426614456820",
  appId: "1:426614456820:web:f018ac2d66fe0fb515b9a1",
  measurementId: "G-TSMDSBZ5R0"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Firestore
const db = getFirestore(app);

export { app, db};