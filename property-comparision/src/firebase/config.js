import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBD2_3XzbUHWMciOHifitjfcREm9mCknCs",
  authDomain: "property-comparison-63f23.firebaseapp.com",
  projectId: "property-comparison-63f23",
  storageBucket: "property-comparison-63f23.firebasestorage.app",
  messagingSenderId: "329182776285",
  appId: "1:329182776285:web:d0995abb54803b0f014434",
  measurementId: "G-WTJPZJ6YC1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
