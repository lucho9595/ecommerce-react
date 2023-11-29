import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";  // Importar desde "firebase/auth" en lugar de "firebase/analytics"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHG21UTBfyK5SL9W6xL3ibaqDSCslfU-8",
  authDomain: "tp-final-1e314.firebaseapp.com",
  projectId: "tp-final-1e314",
  storageBucket: "tp-final-1e314.appspot.com",
  messagingSenderId: "1000573864884",
  appId: "1:1000573864884:web:50d7ccdc5363924de780e1",
  measurementId: "G-K9NWCNSHH0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);  // Agregado: Obtener instancia de autenticación

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export { analytics, auth, googleProvider, githubProvider };  // Agregado: Exportar auth