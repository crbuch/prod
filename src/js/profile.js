import { monitorRegion } from './region'
import { logout, monitorAuthState } from './index'
import { ref,getDatabase,onValue } from 'firebase/database';
import { legacyEcon } from './data';
import { makeTrace, makeLayout, config } from './layout';

monitorAuthState();
monitorRegion();

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
    console.log('legacyEcon :>> ', legacyEcon);
    const wells = [];
    let returns = {};
    for (let key in data){
        wells.push(key);
    }
    let res = {};
    for (let obj in legacyEcon) {
        let temp = {};
        let recMoReturn = 0;
        let date;
        for (let idx in obj){
            let well = legacyEcon[obj][idx]['Well Name'];
            date = legacyEcon[obj][idx]['Date'];
            well = well.replace('#','');
            if (wells.includes(well)){
                let fin = legacyEcon[obj][idx];
                fin.share = data[well]["ORRI"] + data[well]["WINRI"];
                recMoReturn += fin["Recent Month P&L"]*fin.share;
                temp[well] = fin;
            }
        }
        temp.recMoReturn = recMoReturn;
        returns[date] = recMoReturn;
        res[date] = temp;
    }
    console.log('res :>> ', res);
    //graph
    console.log('returns :>> ', returns);
    localStorage.setItem(uid, JSON.stringify(data))
    
    const sortedArray = Object.entries(returns).sort((a, b) => {
        const dateA = new Date(a[0]);
        const dateB = new Date(b[0]);
        return dateA - dateB;
    });
      
    const sortedObj = Object.fromEntries(sortedArray);
    const dates = Object.entries(sortedObj).map(([key, _]) => key);
    const pl = Object.entries(sortedObj).map(([_, value]) => value);
    console.log('dates :>> ', dates);
    console.log('pl :>> ', pl);

    const trace = makeTrace(dates,pl,'P&L',null,'black',null);
    const layout = makeLayout("P&L")
    Plotly.newPlot("returnsCurve", [trace], layout, config).then(() => {
        document.getElementById("btnLogout").style.display = "block";
    });
    

};


const db = getDatabase()
const uid = sessionStorage.getItem('currUid');
console.log('uid :>> ', uid);

document.getElementById("btnLogout").addEventListener('click', logout);


fetchData();