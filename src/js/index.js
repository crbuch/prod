// entry point 
import {
  userName,
  userPassword,
  btnLogin,
  form,
  formUpdate,
  newPwd,
  newPwdRpt,
  btnChangePwd,
  backBtn,
  showLoginError,
  showApp,
  showLoginForm,
  hidePwdErr,
  hideLoginError,
  showPwdErr
} from './ui'

import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updatePassword } from 'firebase/auth';
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
      localStorage.setItem('uid', user.uid);
      localStorage.setItem('email', user.email);
      console.log('user.uid :>> ', user.uid);
      //showApp();
    } else {
      console.log('user :>> ', user);
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
  });
};

const changePwd = async () => {
  if (newPassword !== newPwdRpt){
    showPwdErr('Passwords do not match');
    return;
  }
  const auth = getAuth();
  const user = auth.currentUser;

  updatePassword(user, newPwdRpt.value).then(() => {
    console.log('s :>> ');
    sessionStorage.changePwd = false;
  }).catch((error) => {
    console.log('update pwd error :>> ', error);
  });
}


const currPage = window.location.pathname.split("/").pop();

if (currPage == 'index.html'){
  if (sessionStorage.changePwd == "true"){
    formUpdate.style.display = 'block';
    form.style.display = 'none';
  }else {
    formUpdate.style.display = 'none';
    form.style.display = 'block';
  }

  btnLogin.addEventListener('click', login);
  btnChangePwd.addEventListener('click',changePwd);
  backBtn.addEventListener('click', () => {
    window.location.href = './profile.html';
    sessionStorage.changePwd = false;
  })
  
  form.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      btnLogin.click();
    }
  });
  
  formUpdate.addEventListener("keydown", function(event) {
    if (event.key == "Enter") {
      event.preventDefault();
      btnChangePwd.click();
      
    }
  })
  monitorAuthState();

  window.onload = function () {
    hidePwdErr();
    hideLoginError();
  }();
}

