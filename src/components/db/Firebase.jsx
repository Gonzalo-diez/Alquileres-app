import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"
import { getStorage } from "firebase/storage"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyD4GrBeYVuxos9g6Xna1U_n45YIESza8Sk",
  authDomain: "alquileres-b8625.firebaseapp.com",
  projectId: "alquileres-b8625",
  storageBucket: "alquileres-b8625.appspot.com",
  messagingSenderId: "836408196350",
  appId: "1:836408196350:web:65145a13da8c75df2b79af",
  databaseURL: "https://alquileres-b8625-default-rtdb.firebaseio.com"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)
export const storage = getStorage(app)
export const auth = getAuth(app)