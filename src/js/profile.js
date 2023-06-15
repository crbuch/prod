import { monitorRegion } from './region'
import { logout, monitorAuthState, changePwd } from './index'
import { ref, getDatabase, onValue } from 'firebase/database';
import { legacyEcon, payout, moDataST, pl23_22 } from './data';
import { makeTrace, makeLayout, config } from './layout';
import { toggleInitScale, toggleInitTime } from './ui';
import { select } from 'd3';

monitorAuthState();
monitorRegion();

const fetchData = () => {
    let data = localStorage.getItem(uid);//cache
    if (data !== null && data !== "null") {
        data = JSON.parse(data);
        parseData(data);

    } else {//get from fb
        const deckRef = ref(db, 'users/' + uid + '/deck');

        onValue(deckRef, (snapshot) => {
            const data = snapshot.val();

            localStorage.setItem(uid, JSON.stringify(data));
            if (data) parseData(data);

        })
    }
}
const populateDropDown = (wells) => {
    let menu = select("#wellSelect");
    
    wells.forEach(well => {
        menu.append("option")
            .text(well)
            .property("Value", well);
    });
}

const parseData = (d) => {
    const data = {}
    Object.keys(d).forEach((key) => {
        data[key.toLowerCase()] = d[key];
    });
    const wells = Object.keys(data).map(well => well.toLowerCase());

    let well_list = Object.keys(d);
    well_list.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
    well_list.unshift("All Wells");
    initWellList(well_list);
    populateDropDown(well_list);

    let returns = {};
    let well_returns = {};
    let pl2223 = pl23_22[0]

    for (let [well, mos] of Object.entries(pl2223)) {
        for (let [mo, pl] of Object.entries(mos)) {
            well = well.replace('#', '').toLowerCase();
            if (!(mo in returns)) returns[mo] = 0;
            if (wells.includes(well)){
                const share = data[well];
                let wellMnthReturn = share * pl;

                if (!(well in well_returns)) well_returns[well] = [];
                well_returns[well].push({ "Well": well, "Date": mo, "Recent Mnth Return": wellMnthReturn, "Share": share })
                returns[mo] += wellMnthReturn
            }
        }
    }
    console.log('returns :>> ', returns);
    console.log('well_returns :>> ', well_returns);
    //for (let [_, mnthDict] of Object.entries(legacyEcon)) {
    //    let recMnthReturn = 0;
    //    let date;
    //    for (let [_, wellDict] of Object.entries(mnthDict)) {
    //        let well = wellDict["Well Name"]
    //        well = well.replace('#', '').toLowerCase();
    //        date = wellDict["Date"];
    //        if (wells.includes(well)) {
    //            const share = data[well];
    //            let wellMnthReturn = share * wellDict["Recent Month P&L"];
    //            recMnthReturn += wellMnthReturn;
    //            if (!(well in well_returns)) well_returns[well] = [];
    //            well_returns[well].push({ "Well": well, "Date": date, "Recent Mnth Return": wellMnthReturn, "Share": share })
    //        }
    //    }
    //    returns[date] = recMnthReturn;
    //}
    //const dates_pl = format(returns);
    const dates_pl = format1(returns)
    plotRev(dates_pl[0], dates_pl[1]);

    //mean payout
    const payouts_num = Object.entries(payout).map(
        ([_, value]) => wells.includes(value["Well Name"].replace("#", "").toLowerCase()) ? value["% Payout"] : null).filter(
            el => el !== null);
    document.getElementById('selected-well').textContent = "All Wells";
    document.getElementById('sum-pl').textContent = `$${dates_pl[1].reduce((runnin, curr) => runnin + curr).toFixed(2)}`;
    document.getElementById('payout-title').textContent = "% Mean Payout";
    document.getElementById('payout').textContent = `${(payouts_num.reduce((runnin, curr) => runnin + curr) * 100 / payouts_num.length).toFixed(0)}%`;

    //store data
    let shares = {}
    for (let [well, wellObj] of Object.entries(well_returns)) {
        let share = wellObj[0].Share;
        shares[well] = share
    }
    localStorage.setItem('shares', JSON.stringify(shares));
    localStorage.setItem('pl_data_wells', JSON.stringify(well_returns));

    let userProd = localStorage.userProd;
    if (userProd == null) parseProd();
    displayProd("All Wells");
}

const plotRev = (x, y, title="P&L (ST only)") => {
    const trace = makeTrace(x, y, 'P&L', "lines+markers", 'black',null);
    const layout = makeLayout(title)
    Plotly.newPlot("returnsCurve", [trace], layout, config);
}
const format1 = (obj) => {
    // Convert keys to Date objects for comparison
    const sortedKeys = Object.keys(obj)
    .sort((key1, key2) => {
    const [month1, year1] = key1.split(' ');
    const [month2, year2] = key2.split(' ');
    const date1 = new Date(`${month1} 01 ${year1}`);
    const date2 = new Date(`${month2} 01 ${year2}`);
    return date1 - date2;
    });

    // Create a new sorted dictionary
    const sortedDict = {};
    sortedKeys.forEach(key => {
    sortedDict[key] = obj[key];
    });

    const dates = Object.entries(sortedDict).map(([key, _]) => key);
    const pl = Object.entries(sortedDict).map(([_, value]) => value);

    return [dates,pl]
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
        li.style.cursor = "pointer";

        let a = document.createElement("a");
        a.classList.add("nav-link");

        let span = document.createElement("span");
        span.classList.add("menu-title");
        span.textContent = wells[i];

        a.appendChild(span);
        li.appendChild(a);

        li.onclick = function () {
            displayWell(this.textContent);
            displayProd(this.textContent);
        };

        ulWellList.appendChild(li);
    }
}
const mapPayout = {"cr 939h":"cr 939","bruce weaver 2": "bruce weaver 2 re"};

const displayWell = (selected) => {
    let data = localStorage.getItem('pl_data_wells');
    data = JSON.parse(data);
    if (selected == "All Wells") {
        data = localStorage.getItem(uid)
        parseData(JSON.parse(data));
        return;
    }
    console.log('data :>> ', data);

    let payoutName = selected.toLowerCase();
    if (Object.keys(mapPayout).includes(selected.toLowerCase())) payoutName = mapPayout[selected.toLowerCase()];

    let well_payout = Object.entries(payout).filter(
        val => val[1]["Well Name"].replace("#","").toLowerCase() == payoutName
    );

    console.log('well_payout :>> ', well_payout);
    if (well_payout.length == 0) {
        document.getElementById('payout').textContent = `no data`;
    }else{
        well_payout = well_payout[0][1]["% Payout"]
    };
    data = data[selected.toLowerCase()];
    console.log('data :>> ', data);
    let returns = {};

    for (let idx in data) {
        const mo = data[idx]["Date"];
        returns[mo] = data[idx]["Recent Mnth Return"];
    }
    const dates_pl = format1(returns);
    plotRev(dates_pl[0], dates_pl[1]);

    document.getElementById('selected-well').textContent = selected;
    document.getElementById('sum-pl').textContent = `$${dates_pl[1].reduce((runnin, curr) => runnin + curr).toFixed(2)}`
    document.getElementById('payout-title').textContent = "% Payout";
    document.getElementById('payout').textContent = `${(well_payout * 100).toFixed(0)}%`;
}

const parseProd = () => {
    let shares = JSON.parse(localStorage.shares);
    let wells = Object.keys(shares);
    let selected_data = moDataST.map(el => {
        let well = el[0].replace("#","").toLowerCase();
        if (wells.includes(well)){
            let share = shares[well]
            return [well,el[1]*share,el[2]*share,el[3]*share,el[6]];
        }
    }).filter(el => el !== undefined);
    localStorage.setItem("userProd",JSON.stringify(selected_data));
}

const displayProd = (selected) => {
    const edge = new Date("2021-12-01");
    let cnt = 0;
    let data = JSON.parse(localStorage.userProd);//[[well,oil,gas,water,date],...]
    if (selected !== "All Wells") data = data.filter(el => el[0] == selected.toLowerCase());
    
    let date = data.map(el => el[4]).filter(el => {
        let d = new Date(el)
        if (d > edge){
            return true;
        }else{
            cnt += 1
            return false;
        }
    }).map(dateString => {
        const dateObj = new Date(dateString);
        const options = { year: 'numeric', month: 'long' };
        return dateObj.toLocaleString('en-US', options);
    });

    let oil = data.map(el => el[1]).slice(0,cnt);
    let gas = data.map(el => el[2]).slice(0,cnt);
    
    date.pop();
    oil.pop();
    gas.pop();

    let title = "Oil & Gas Production";
    if (date.length == 0) title = "No production data for this time period";

    const traceOil = makeTrace(date,oil,"Oil [Bbls]","lines+markers","green",null)
    const traceGas = makeTrace(date,gas,"Gas [Cf]","lines+markers","red",null)
    const layout = {
        title: title,
        legend: {
            orientation: "h",
            y: 1.2,
        },
    };
    Plotly.newPlot("prodCurve", [traceOil,traceGas],layout);
}

//\\
const db = getDatabase()
const uid = localStorage.getItem('uid');
console.log('uid :>> ', uid);

document.getElementById("btnLogout").addEventListener('click', logout);

fetchData();

select("#wellSelect").on("change", () => {
    let selected = select("#wellSelect").node().value;
    displayWell(selected);
    displayProd(selected);
});

//search
const searchInput = document.getElementById('searchInput');
const wellList = document.getElementById('well-list').getElementsByTagName('li');

searchInput.addEventListener('input', function () {
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

document.getElementById("show_pwd_form_btn").addEventListener('click', () => {
    document.getElementById('change_pwd_form').style.display = "block";
})

document.getElementById("close_pwd_form").addEventListener('click', () => {
    document.getElementById('change_pwd_form').style.display = "none";
})

document.getElementById("change_pwd_btn").addEventListener('click', (e) => {
    let pwd = document.getElementById("new_pwd").value;
    let pwd_rpt = document.getElementById("new_pwd_rpt").value;
    if (pwd !== pwd_rpt) {
        e.preventDefault();
        document.getElementById('pwd_msg').textContent = "Passwords do not match";
        document.getElementById('change_pwd_form').style.display = "block";
        return;
    }
    changePwd(pwd, pwd_rpt);
})

window.onload = function () {
    const currTime = localStorage.getItem('initTime');
    let time = "30 Days";
    if (currTime == 0) time = "Inception";

    document.getElementById("init_scale").textContent = localStorage.getItem('initScale');
    document.getElementById("init_time").textContent = time;
}();

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