// entry point 
import {
  userName,
  userPassword,
  btnLogin,
  form,
  showLoginError,
  showApp,
  showLoginForm
} from './ui'

import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import {getDatabase, ref, set} from 'firebase/database';

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
const db = getDatabase();

function writedb(name,data,uid){
  const reference = ref(db,'users/' + uid);

  set(reference, {
    user: name,
    deck: data,
  })
}


export const monitorAuthState = async () => {
  onAuthStateChanged(auth, user => {
    if (user != null) {
      console.log('user :>> ', user);
      localStorage.setItem('uid', user.uid);
      localStorage.setItem('email', user.email);
      showApp();
    } else {
      showLoginForm();
    }
  }
  );
};


const login = async () => {
  let cleanUid = userName.value.replace(/\s/g,"");
  const password = userPassword.value;

  if (cleanUid.substring(cleanUid.length - 8) != '@cml.com'){
    cleanUid = `${cleanUid}@cml.com`;
  }
  
  signInWithEmailAndPassword(auth, cleanUid, password)
    .then((userCredential) => {
      initStorage(userCredential.user);
      showApp();
    })
    .catch((error) => {
      console.log('error :>> ', error);
      showLoginError(error);
    });
};

const initStorage = (userCreds) => {
  if (localStorage.getItem('initTime') == null) localStorage.setItem('initTime',0);
  if (localStorage.getItem('initScale') == null) localStorage.setItem('initScale','linear');
  localStorage.setItem('uid', userCreds.uid);
  localStorage.setItem('email', userCreds.email);
  sessionStorage.setItem('region', 'st');
};

export const logout = async () => {
  const auth = getAuth();
  signOut(auth).then(() => {
    localStorage.removeItem('currUid')
  }).catch((error) => {
    console.log('error :>> ', error);
  });
};


const currPage = window.location.pathname.split("/").pop();

if (currPage == 'index.html' || currPage == 'index.html?'){
  btnLogin.addEventListener('click', login);
  
  form.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      btnLogin.click();
    }
  });

  monitorAuthState();
}
