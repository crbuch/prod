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
    let data = localStorage.shares;
    if (uid != localStorage.skey){
        data = null;
        localStorage.shares = null;
    }
    
    if (data !== null && data !== "null" && data != undefined) {
        data = JSON.parse(data);
        parseData(data);
    } else {//get from fb
        const deckRef = ref(db, 'users/' + uid + '/deck');

        onValue(deckRef, (snapshot) => {
            const data = snapshot.val();
            localStorage.setItem("shares", JSON.stringify(data));
            localStorage.setItem("skey",uid);
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
    let pl2223 = pl23_22

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
    
    const dates_pl = format(returns)
    plotRev(dates_pl[0], dates_pl[1]);

    //mean payout
    const payouts_num = Object.entries(payout).map(
        ([_, value]) => wells.includes(value["Well Name"].replace("#", "").toLowerCase()) ? value["% Payout"] : null).filter(
            el => el !== null);
    const money = formatMoney(dates_pl[1].reduce((runnin, curr) => runnin + curr).toFixed(2));

    document.getElementById('selected-well').textContent = "All Wells";
    document.getElementById('sum-pl').textContent = `$${money}`;
    document.getElementById('payout-title').textContent = "% Mean Payout";
    document.getElementById('payout').textContent = `${(payouts_num.reduce((runnin, curr) => runnin + curr) * 100 / payouts_num.length).toFixed(0)}%`;

    //store data
    localStorage.setItem('pl_data_wells', JSON.stringify(well_returns));

    displayProd("All Wells");
}

const plotRev = (x, y, title="P&L (ST only)") => {
    const trace = makeTrace(x, y, 'P&L', "lines+markers", 'black',null);
    const layout = {
        title:title,
        yaxis: {
          tickformat: '$',
          // Add other y-axis configuration properties if needed
        }
      };
    Plotly.newPlot("returnsCurve", [trace], layout, config);
}

const format = (obj) => {
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

const formatMoney = (amount) => {
    var parts = amount.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
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
        span.textContent = capitalizeWords(wells[i]);

        a.appendChild(span);
        li.appendChild(a);

        li.onclick = function () {
            displayWell(wells[i]);
            displayProd(wells[i]);
        };

        ulWellList.appendChild(li);
    }
}

const displayWell = (selected) => {
    let data = localStorage.getItem('pl_data_wells');
    data = JSON.parse(data);
    if (selected == "All Wells") {
        data = localStorage.getItem("shares")
        parseData(JSON.parse(data));
        return;
    }

    let payoutName = selected.toLowerCase();
    if (Object.keys(mapPayout).includes(selected.toLowerCase())) payoutName = mapPayout[selected.toLowerCase()];

    let well_payout = Object.entries(payout).filter(
        val => val[1]["Well Name"].replace("#","").toLowerCase() == payoutName
    );

    if (well_payout.length == 0) {
        document.getElementById('payout').textContent = `no data`;
    }else{
        well_payout = well_payout[0][1]["% Payout"]
    };
    data = data[selected.toLowerCase()];
    let returns = {};

    for (let idx in data) {
        const mo = data[idx]["Date"];
        returns[mo] = data[idx]["Recent Mnth Return"];
    }
    const dates_pl = format(returns);
    selected = capitalizeWords(selected);
    if (data === undefined){
        document.getElementById('payout').textContent = "no data";
        document.getElementById('sum-pl').textContent = "no data";
        document.getElementById('selected-well').textContent = selected;
        plotRev(dates_pl[0], dates_pl[1],`No Economic Data for ${selected}`);
        return;
    }
    plotRev(dates_pl[0], dates_pl[1]);
    const money = formatMoney(dates_pl[1].reduce((runnin, curr) => runnin + curr).toFixed(2));
    document.getElementById('selected-well').textContent = selected;
    document.getElementById('sum-pl').textContent = `$${money}`;
    document.getElementById('payout-title').textContent = "% Payout";
    document.getElementById('payout').textContent = `${(well_payout * 100).toFixed(0)}%`;
}

const displayProdAll = () => {
    const edge = new Date("2022-01-01");
    const shares = JSON.parse(localStorage.shares);
    let wells = Object.keys(shares);
    let prodwells = [];
    for (let i = 0; i < wells.length; i++){
        let well = wells[i];
        if (Object.keys(mapProd).includes(well)) well = mapProd[well];
        prodwells.push(well);
    }
    let data = moDataST.filter(sub => prodwells.includes(sub[0].replace("#","").toLowerCase()));
    
    let oil = {};
    let gas = {};
    data = data.map((sub) => {
        let date = new Date(sub[6]);
        if (date > edge ){
            let well = sub[0].replace("#","").toLowerCase();
            if (Object.keys(mapShares).includes(well)) well = mapShares[well];

            if (Object.keys(shares).includes(well)){
                date = date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
                if (!Object.keys(oil).includes(date)) oil[date] = 0;
                if (!Object.keys(gas).includes(date)) gas[date] = 0;

                
                oil[date] += sub[1]*shares[well];
                gas[date] += sub[2]*shares[well];
            }
            
        }
    })
    const date_oil = format(oil);
    const date_gas = format(gas);
    date_oil[0].pop();
    date_oil[1].pop();
    date_gas[1].pop();
    const dates = date_oil[0].map(el => {
        return el.substring(0, 3) + " " + el.substring(6,8);
    });

    plotProd(dates,date_oil[1],date_gas[1]);
}

const displayProd = (selected) => {
    const selectedMaster = selected.toLowerCase();
    const edge = new Date("2022-01-01");
    const shares = JSON.parse(localStorage.shares);
    let data = moDataST;
    if (Object.keys(mapProd).includes(selectedMaster)) selected = mapProd[selectedMaster]
    if (selected !== "All Wells") data = data.filter(el => el[0].replace("#","").toLowerCase() == selected.toLowerCase());
    if (selected == "All Wells"){
        displayProdAll();
        return;
    }
    data = data.map((el) => {
        let date = new Date(el[6]);
        if (date > edge){
            const oil = el[1]*shares[selectedMaster];
            const gas = el[2]*shares[selectedMaster];
            date = date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
            return [oil,gas,date];
        }
    }).filter((sub) => sub !== undefined).map((sub) => {
        return sub.filter((el) => el !== undefined);
    });

    let title = "Oil & Gas Production";
    if (data.length == 0) title = "No Production Data for this Time Period";
    const oil = data.map((sub) => sub[0]);
    const gas = data.map((sub) => sub[1]);
    const date = data.map((sub) => sub[2]);
    oil.pop();
    gas.pop();
    date.pop();

    plotProd(date,oil,gas,title);
    
}

const plotProd = (date,oil,gas,title="Oil & Gas Production") => {
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

function capitalizeWords(str) {
    return str.replace(/^(.)|\s+(.)/g, function(match) {
      return match.toUpperCase();
    });
}
//\\
const mapPayout = {"cr 939h":"cr 939","bruce weaver 2": "bruce weaver 2 re"};
const mapProd = {"bruce weaver 2": "bruce weaver 2 re","burns ranch 2 1": "burns ranch 2","cr 939h":"cr 939", "pfeiffer 2re": "pfeiffer 2"};
const mapShares = {"bruce weaver 2 re": "bruce weaver 2","burns ranch 2" : "burns ranch 2 1","cr 939" : "cr 939h", "pfeiffer 2": "pfeiffer 2re"};

const db = getDatabase()
const uid = localStorage.getItem('uid');
//console.log('uid :>> ', uid);

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
    sessionStorage.changePwd = "true";
    window.location.href = "./index.html";
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