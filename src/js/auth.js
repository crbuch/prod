import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updatePassword,updateProfile } from 'firebase/auth';

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


const onAuthStateChangedFb = () => {
    auth.onAuthStateChanged((user) => {
        if (user) {
            console.log('user mon :>> ', user);
            //if (user.displayName == null) update();
        } else {
            console.log("none");
            window.location.replace('index.html');
            const currentState = window.history.state;
            window.history.replaceState(currentState, '', window.location.href);
            window.onpopstate = function () {
            window.history.replaceState(currentState, '', window.location.href);
            };
        }
    });
};

const up = () => {
    console.log("in up");
    updateProfile(auth.currentUser, {
        displayName: ''
      }).then(() => {
        console.log('userCredential.user.displayName :>> ', auth.currentUser.displayName);
      }).catch((error) => {
        console.log('error :>> ', error);
      });
};

const loginFb = (email, password) => {
    return signInWithEmailAndPassword(auth,email,password)
};

const logoutFb = () => {
    return signOut(auth);
};

const updatePasswordFb = (newPassword) => {
    const user = auth.currentUser;
    if (user) {
        return updatePassword(user,newPassword);
    }
    return Promise.reject(new Error('No user is currently signed in.'));
};

export { auth, onAuthStateChangedFb, loginFb, logoutFb, updatePasswordFb };
