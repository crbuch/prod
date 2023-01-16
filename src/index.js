// entry point 
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

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

function fetchUser() {
    onAuthStateChanged(auth, user => {
        if (user != null) {
            console.log(user)
        } else {
            console.log("na")
        }
    }
    );
}
fetchUser();