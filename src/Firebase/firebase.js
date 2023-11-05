import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getStorage, ref, uploadBytes, getDownloadURL} from "firebase/storage"
import {v4} from "uuid";


const firebaseConfig = {
  apiKey: "AIzaSyCM9qLnhu8chCeulM2L1ASy6rJo8akM3qc",
  authDomain: "emdmodels-c4f25.firebaseapp.com",
  databaseURL: "https://emdmodels-c4f25-default-rtdb.firebaseio.com",
  projectId: "emdmodels-c4f25",
  storageBucket: "emdmodels-c4f25.appspot.com",
  messagingSenderId: "773693823375",
  appId: "1:773693823375:web:4de942b4130132119493fa",
  measurementId: "G-W57PKGBJ7S"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Servicio de Autentificacion
export const auth = getAuth(app)
// Servicio de Storage
export const storage = getStorage(app)
// funcion para guardar la imagen en Storage
export function uploadFile(file) {
  const storageRef= ref(storage, v4())
  return uploadBytes(storageRef , file).then(snapshot =>{
    return snapshot;
  })
}
// funcion para traer la imagen
export function getFile(file) {
  const storageRef= ref(storage, `/${file}`)
  return getDownloadURL( storageRef).then(snapshot =>{
    // console.log(snapshot);
    return snapshot;
  })
  
}