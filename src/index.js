// entry point 
import { 
  hideLoginError, 
  showLoginState, 
  showLoginForm, 
  showApp, 
  showLoginError, 
  btnLogin,
  btnSignup,
  btnLogout,
  userEmail,
  userPassword
} from './ui'

import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';

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

onAuthStateChanged(auth, user => {
    if (user != null) {
        console.log(user)
    } else {
        console.log("na")
    }
}
);

const login = async () => {
  const email = "matt@tst.com";
  const password = "123456";
  //const email = userEmail.value
  //const password = userPassword.value

  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    console.log(email)
    const user = userCredential.user;
    
    window.location.replace("http://127.0.0.1:5503/../dist/curves.html")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
};

btnLogin.addEventListener('click',login)



