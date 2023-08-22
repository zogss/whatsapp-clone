import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCr6yD_5OB504C-QZT8TiW0AkIZWMZKnx8',
  authDomain: 'whatsapp-clone-433ef.firebaseapp.com',
  projectId: 'whatsapp-clone-433ef',
  storageBucket: 'whatsapp-clone-433ef.appspot.com',
  messagingSenderId: '1035734137443',
  appId: '1:1035734137443:web:8432f5425c81ef47919656',
  measurementId: 'G-KHKFXZ6GGV',
};

const app = initializeApp(firebaseConfig);
const firebaseAnalytics = getAnalytics(app);
const firebaseAuth = getAuth(app);

export { firebaseAnalytics, firebaseAuth };
