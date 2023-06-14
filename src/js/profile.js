import { monitorRegion } from './region'
import { logout, monitorAuthState, changePwd } from './index'
import { ref, getDatabase, onValue } from 'firebase/database';
import { legacyEcon, payout, MoDataST } from './data';
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
    let res_wells = {};
    let returns = {};
    const wells = Object.keys(data).map(well => well.toLowerCase());

    let well_list = Object.keys(d);
    well_list.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
    well_list.unshift("All Wells");
    initWellList(well_list);
    populateDropDown(well_list);

    for (let [_, mnthDict] of Object.entries(legacyEcon)) {
        let recMnthReturn = 0;
        let date;
        for (let [_, wellDict] of Object.entries(mnthDict)) {
            let well = wellDict["Well Name"]
            well = well.replace('#', '').toLowerCase();
            date = wellDict["Date"];
            if (wells.includes(well)) {
                let wellMnthReturn = (data[well]["ORRI"] + data[well]["WINRI"]) * wellDict["Recent Month P&L"];
                recMnthReturn += wellMnthReturn;
                if (!(well in res_wells)) res_wells[well] = [];
                res_wells[well].push({ "Well": well, "Date": date, "Recent Mnth Return": wellMnthReturn })
            }
        }
        returns[date] = recMnthReturn;
    }
    const dates_pl = format(returns);
    plotRev(dates_pl[0], dates_pl[1]);

    localStorage.setItem('pl_data_wells', JSON.stringify(res_wells));

    //mean payout
    const payouts_num = Object.entries(payout).map(
        ([_, value]) => wells.includes(value["Well Name"].replace("#", "").toLowerCase()) ? value["% Payout"] : null).filter(
            el => el !== null);
    document.getElementById('selected-well').textContent = "All Wells";
    document.getElementById('sum-pl').textContent = `$${dates_pl[1].reduce((runnin, curr) => runnin + curr).toFixed(2)}`;
    document.getElementById('payout-title').textContent = "% Mean Payout";
    document.getElementById('payout').textContent = `${(payouts_num.reduce((runnin, curr) => runnin + curr) * 100 / payouts_num.length).toFixed(0)}%`;
}

const plotRev = (x, y, title="P&L (ST only)") => {
    const trace = makeTrace(x, y, 'P&L', null, 'black', null);
    const layout = makeLayout(title)
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
        };

        ulWellList.appendChild(li);
    }
}

const displayWell = (selected) => {
    let data = localStorage.getItem('pl_data_wells');
    data = JSON.parse(data);
    if (selected == "All Wells") {
        data = localStorage.getItem(uid)
        parseData(JSON.parse(data));
        return;
    }
    let well_payout = Object.entries(payout).filter(
        val => val[1]["Well Name"].replace("#","").toLowerCase() == selected.toLowerCase()
    );
    if (well_payout.length == 0) {
        plotRev([],[],`No economic data for ${selected}`);
        document.getElementById('selected-well').textContent = selected;
        document.getElementById('payout').textContent = `no data`;
        document.getElementById('sum-pl').textContent = `no data`;
        return;
    };
    well_payout = well_payout[0][1]["% Payout"]
    data = data[selected.toLowerCase()];
    let returns = {};

    for (let idx in data) {
        const mo = data[idx]["Date"];
        returns[mo] = data[idx]["Recent Mnth Return"];
    }

    const dates_pl = format(returns);
    plotRev(dates_pl[0], dates_pl[1]);

    document.getElementById('selected-well').textContent = selected;
    document.getElementById('sum-pl').textContent = `$${dates_pl[1].reduce((runnin, curr) => runnin + curr).toFixed(2)}`
    document.getElementById('payout-title').textContent = "% Payout";
    document.getElementById('payout').textContent = `${(well_payout * 100).toFixed(0)}%`;
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

console.log('wdiv :>> ', document.getElementById("plotDiv").clientWidth);
console.log('wgraph :>> ', document.getElementById("returnsCurve").clientWidth);
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