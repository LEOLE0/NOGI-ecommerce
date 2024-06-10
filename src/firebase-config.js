// Importer les fonctions nécessaires depuis les SDKs requis
import { initializeApp } from "firebase/app";

// Importer les services supplémentaires que tu pourrais utiliser
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Configuration de l'application web Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAYp-fVxECbLpmLxfoA0ZRf43WQP7_f4Lo",
  authDomain: "nogi-ecommerce.firebaseapp.com",
  projectId: "nogi-ecommerce",
  storageBucket: "nogi-ecommerce.appspot.com",
  messagingSenderId: "431357063814",
  appId: "1:431357063814:web:2ff6e5bd9ed77995e2d707"
};

// Initialiser Firebase
const app = initializeApp(firebaseConfig);

// Initialiser les services Firebase
const db = getFirestore(app); // Service Firestore pour la base de données
const auth = getAuth(app);    // Service Auth pour l'authentification

// Exporter l'application Firebase et les services utilisés
export { app, db, auth };