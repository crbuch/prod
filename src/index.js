// entry point 
import {
  btnLogin,
  btnLogout,
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
      console.log("mon user");
      console.log(user);
      showApp();
    } else {
      showLoginForm();
      console.log("mon none")
    }
  }
  );
};
monitorAuthState();

console.log("current user:", sessionStorage.getItem('currUid'));
const login = async () => {
  //const email = "matt@tst.com";
  //const password = "123456";
  const email = userEmail.value
  const password = userPassword.value

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const uid = userCredential.user.uid;
      console.log('uid :>> ', uid);
      sessionStorage.setItem('currUid', uid)

      
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      showLoginError(errorMessage)
    });
};

const logout = async () => {
  console.log("in out");
  const auth = getAuth();
  signOut(auth).then(() => {
    console.log("out");
  }).catch((error) => {
    console.log('error :>> ', error);
  });
}

try {
  btnLogin.addEventListener('click', login)
} catch {
  console.log("wrong html");
}

export {logout}

