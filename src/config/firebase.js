import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';


const firebaseConfig = {
  apiKey: "AIzaSyBICTsIvj4Qr8XFWylZ6FymMA_n1BXE0-Q",
  authDomain: "tiktok---jornada-74fe0.firebaseapp.com",
  projectId: "tiktok---jornada-74fe0",
  storageBucket: "tiktok---jornada-74fe0.appspot.com",
  messagingSenderId: "807192004841",
  appId: "1:807192004841:web:2be7c166d0fd131149c878"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;