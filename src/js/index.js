// entry point 
import {
  btnLogin,
  userEmail,
  userPassword,
  showLoginError,
  showApp,
  showLoginForm
} from './ui'

import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC3yOK_QL5QbJaKvjynXXzObl4uKsoJpTU",
  authDomain: "cmlproduction-1e86a.firebaseapp.com",
  projectId: "cmlproduction-1e86a",
  storageBucket: "cmlproduction-1e86a.appspot.com",
  messagingSenderId: "924402330611",
  appId: "1:924402330611:web:55155c0a5c5c6a7d4b8086"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const monitorAuthState = async () => {
  onAuthStateChanged(auth, user => {
    if (user != null) {
      sessionStorage.setItem('currUid', user.uid)
      
      showApp();
    } else {
      showLoginForm();
      console.log("monitor none")
    }
  }
  );
};
monitorAuthState();

const login = async () => {
  const email = "daniel@cml.com";
  const password = "daniel";
  //const email = `${userEmail.value}@cml.com`;
  //const password = userPassword.value;
  
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      initStorage(userCredential.user.uid);
    })
    .catch((error) => {
      showLoginError(error)
    });
};

const initStorage = (uid) => {
  if (localStorage.getItem('initTime') == null) localStorage.setItem('initTime',0);
  sessionStorage.setItem('currUid', uid)
  sessionStorage.setItem('region', 'st')
};

export const logout = async () => {
  const auth = getAuth();
  signOut(auth).then(() => {
    sessionStorage.removeItem('currUid')
  }).catch((error) => {
    console.log('error :>> ', error);
  });
};

try {
  btnLogin.addEventListener('click', login)
} catch {
}



