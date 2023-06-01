import {} from './region'
import { logout, monitorAuthState } from './index'
import { ref,getDatabase,onValue } from 'firebase/database';
import { json } from 'd3';

monitorAuthState();

const fetchData = () => {
    let data = localStorage.getItem(uid);//cache

    if (data){
        data = JSON.parse(data)
        revenueCurve(data)

    }else {//get from fb
        const deckRef = ref(db, 'users/' + uid + '/deck');

        onValue(deckRef, (snapshot) => {
            const data = snapshot.val();

            localStorage.setItem(uid, JSON.stringify(data))
            revenueCurve(data);
        })
    }
};



const revenueCurve = (data) => {
    console.log('data :>> ', data);

};



const db = getDatabase()
const uid = sessionStorage.getItem('currUid');
console.log('uid :>> ', uid);

document.getElementById("btnLogout").addEventListener('click', logout);


fetchData();