import { monitorRegion } from './region'
import { logout, monitorAuthState } from './index'
import { ref,getDatabase,onValue } from 'firebase/database';
import { legacyEcon, payout } from './data';
import { makeTrace, makeLayout, config } from './layout';
import { toggleInitScale, toggleInitTime } from './ui';

monitorAuthState();
monitorRegion();

const fetchData = () => {
    let data = localStorage.getItem(uid);//cache

    if (data){
        data = JSON.parse(data);
        parseData(data);

    }else {//get from fb
        const deckRef = ref(db, 'users/' + uid + '/deck');

        onValue(deckRef, (snapshot) => {
            const data = snapshot.val();

            localStorage.setItem(uid, JSON.stringify(data));
            parseData(data);
        })
    }
};


const parseData = (data) => {
    let res = {};
    let res_wells = {};
    const wells = Object.keys(data);
    let returns = {};

    for (let obj in legacyEcon) {
        let temp = {};
        let recMoReturn = 0;
        let date;
        console.log('obj :>> ', obj);
        for (let idx in obj){
            let well = legacyEcon[obj][idx]['Well Name'];
            date = legacyEcon[obj][idx]['Date'];
            well = well.replace('#','');

            if (wells.includes(well)){
                let fin = legacyEcon[obj][idx];
                fin.share = data[well]["ORRI"] + data[well]["WINRI"];
                recMoReturn += fin["Recent Month P&L"]*fin.share;
                temp[well] = fin;

                if (!(well in res_wells)) res_wells[well] = [];
                fin.recMoReturn = fin["Recent Month P&L"]*fin.share;
                res_wells[well].push(fin)

                //dict by well
                //res_wells[well] = temp;
            }
        }
        temp.recMoReturn = recMoReturn;
        returns[date] = recMoReturn;
        res[date] = temp;
    }
    let well_list = Object.keys(res_wells);
    well_list.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
    well_list.unshift("All Wells")
    initWellList(well_list);
    localStorage.setItem('pl_data_wells',JSON.stringify(res_wells));
    
    
    const dates_pl = format(returns);
    plotRev(dates_pl[0],dates_pl[1]);

    //mean payout
    let payouts = {};
    for (let idx in payout) {
        const well = payout[idx]["Well Name"].replace('#',"");
        if (well_list.includes(well)) {
            payouts[well] = payout[idx]["% Payout"];
        }
    }
    console.log('payouts :>> ', payouts);
    const payouts_num = Object.entries(payouts).map(([_, value]) => value);

    document.getElementById('selected-well').textContent = "All Wells";
    document.getElementById('sum-pl').textContent = `$${dates_pl[1].reduce((runnin,curr) => runnin + curr).toFixed(2)}`;
    document.getElementById('payout-title').textContent = "% Mean Payout";
    document.getElementById('payout').textContent = `${(payouts_num.reduce((runnin,curr) => runnin + curr)*100/payouts_num.length).toFixed(0)}%`;

    localStorage.setItem('payouts',JSON.stringify(payouts));
    //localStorage.setItem('dates',dates);
    //localStorage.setItem('pl',pl);
    return res;
};

const plotRev = (x,y) => {
    const trace = makeTrace(x,y,'P&L',null,'black',null);
    const layout = makeLayout("P&L (ST only)")
    Plotly.newPlot("returnsCurve", [trace], layout, config).then(() => {
        document.getElementById("btnLogout").style.display = "block";
    });
}


const format = (obj) => {
    const sortedArray = Object.entries(obj).sort((a, b) => {
        const dateA = new Date(a[0]);
        const dateB = new Date(b[0]);
        return dateA - dateB;
    });

    const sortedObj = Object.fromEntries(sortedArray);
    const dates = Object.entries(sortedObj).map(([key, _]) => key);
    const pl = Object.entries(sortedObj).map(([_, value]) => value);

    return [dates, pl]
}

const initWellList = (wells) => {
    let ulWellList = document.getElementById("well-list");
    for (let i = 0; i < wells.length; i++) {
        let li = document.createElement("li");
        li.classList.add("nav-item", "active");
  
        let a = document.createElement("a");
        a.classList.add("nav-link");
  
        let span = document.createElement("span");
        span.classList.add("menu-title");
        span.textContent = wells[i];
  
        a.appendChild(span);
        li.appendChild(a);

        li.onclick = function() {
            console.log("Clicked: " + this.textContent);
            displayWell(this.textContent);
          };

        ulWellList.appendChild(li);
    }
}

const displayWell = (selected) => {
    let data = localStorage.getItem('pl_data_wells');
    let payouts = localStorage.getItem('payouts');
    let well_payout = 0;
    if (payouts){
        payouts = JSON.parse(payouts);
        well_payout = payouts[selected]; 
    }
    //if (!data) data = fetchData();//check
    data = JSON.parse(data);
    if (selected == "All Wells") {
        data = localStorage.getItem(uid)
        parseData(JSON.parse(data));
        return;
    }
    data = data[selected];
    let returns = {};

    for (let idx in data) {
        const mo = data[idx]["Date"];
        returns[mo] = data[idx]["recMoReturn"];
    }
    const dates_pl = format(returns);
    plotRev(dates_pl[0],dates_pl[1]);

    document.getElementById('selected-well').textContent = selected;
    document.getElementById('sum-pl').textContent = `$${dates_pl[1].reduce((runnin,curr) => runnin + curr).toFixed(2)}`


    document.getElementById('payout-title').textContent = "% Payout";
    document.getElementById('payout').textContent = `${(well_payout*100).toFixed(0)}%`;
}

//\\
const db = getDatabase()
const uid = localStorage.getItem('uid');
console.log('uid :>> ', uid);

document.getElementById("btnLogout").addEventListener('click', logout);

fetchData();
//search
const searchInput = document.getElementById('searchInput');
const wellList = document.getElementById('well-list').getElementsByTagName('li');

searchInput.addEventListener('input', function() {
  const searchTerm = searchInput.value.toLowerCase();

  for (let i = 0; i < wellList.length; i++) {
    const wellName = wellList[i].getElementsByTagName('span')[0].textContent.toLowerCase();

    if (wellName.includes(searchTerm)) {
      wellList[i].style.display = 'block';
    } else {
      wellList[i].style.display = 'none';
    }
  }
});

document.getElementById("init_scale").addEventListener('click', () => {
    toggleInitScale();
})

document.getElementById("init_time").addEventListener('click', () => {
    toggleInitTime();
})

//let pl_str = localStorage.getItem('pl');
//let dates_str = localStorage.getItem('dates');
//if (pl_str & dates_str){
//    dates_str = dates_str.split(',');
//    pl_str = pl_str.split(',');
//    pl_str = pl_str.map(el => parseFloat(el));
//    plotRev(pl_str,dates_str);
//} else {
//    fetchData();
//}