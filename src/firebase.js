import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyD3FU23owj-kPZp34dlCxZiWrln0HYj6iA",
  authDomain: "certificate-generator-da71d.firebaseapp.com",
  databaseURL: "https://certificate-generator-da71d-default-rtdb.firebaseio.com",
  projectId: "certificate-generator-da71d",
  storageBucket: "certificate-generator-da71d.appspot.com",
  messagingSenderId: "841677889485",
  appId: "1:841677889485:web:31289fecb81b2ed3eb2e84",
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export {db}