import { AuthErrorCodes } from 'firebase/auth';
import {updateCurve, curveInfoUI} from './curves.js';

export const userEmail = document.querySelector('#userEmail')
export const userPassword = document.querySelector('#userPassword')

export const btnLogin = document.querySelector('#btnLogin')
export const btnLogout = document.querySelector('#btnLogout')

export const divLoginError = document.querySelector('#divLoginError')
export const lblLoginErrorMessage = document.querySelector('#lblLoginErrorMessage')


export const showLoginForm = () => {
  const currPage = window.location.pathname.split("/").pop();
  let dev;
  if (location.hostname === "localhost" || location.hostname === "127.0.0.1") dev = true;
    
  if (currPage != 'index.html'){
    if (dev === true){
      window.location.replace("http://127.0.0.1:5503/../dist/index.html");
      return;
    }
    window.location.replace("https://matthewplaisance.github.io/STprod/dist/index.html");
  }
}

export const showApp = () => {
  const currPage = window.location.pathname.split("/").pop();
  let dev;
  if (location.hostname === "localhost" || location.hostname === "127.0.0.1") dev = true;

  if (currPage == 'index.html'){
    if (dev === true){
      window.location.replace("http://127.0.0.1:5503/../dist/curves.html");
      return;
    }
    window.location.replace("https://matthewplaisance.github.io/STprod/dist/curves.html");
  }
  }

export const hideLoginError = () => {
  divLoginError.style.display = 'none'
  lblLoginErrorMessage.innerHTML = ''
}

export const showLoginError = (error) => {
  divLoginError.style.display = 'block'    
  if (error.code == AuthErrorCodes.INVALID_PASSWORD) {
    lblLoginErrorMessage.innerHTML = `Wrong password`
  }
  else {
    lblLoginErrorMessage.innerHTML = `Error: ${error.message}`      
  }
}

export const setActive = (view, time) => {
  let elems = document.querySelectorAll(".active");
  [].forEach.call(elems, (el) => {
    el.classList.remove("active");
  });
  document.getElementById(view).className += "active";
  document.getElementById(time).className += "active";
};

export const setActiveTime = (time) => {
  let elems = document.querySelectorAll(".active");
  [].forEach.call(elems, (el) => {
    if (el.id.includes("Days")) {
      el.classList.remove("active");
    }
  });
  document.getElementById(time).className += "active";
};

export const toggleInitTime = () => {
  const currInit = localStorage.getItem('initTime');
  if (currInit == 0) {
    $('#initTime').text('Init: 30 Days')
    localStorage.setItem('initTime',31)
  }else {
    $('#initTime').text('Init: Inception')
    localStorage.setItem('initTime',0)
  };
};

export const activeFromStorage = () => {
  const initTime = localStorage.getItem('initTime');
  let activeTime = 'DaysInception';
  if (initTime == 31) activeTime = 'Days30';
  setActiveTime(activeTime);
  return activeTime;
};

export const checkActive = (element) => {
  let flag = false;
  let elems = document.querySelectorAll(".active");
  [].forEach.call(elems, (el) => {
    if (el.id == element) flag = true;
  });
  return flag;
};

export const switchActives = (event) => {
  event.preventDefault();

  const target = event.target;
  const parent = document.getElementById(target.id).parentNode;
  const children = parent.querySelectorAll("*");
  
  children.forEach(child => {
    child.classList.remove("active");
  });
  target.className += "active";
  const activeView = document.getElementById("timeframes").querySelectorAll(".active")[0].id.substring(4);//gives the number from the active view id

  updateCurve(Number(activeView) + 1, curveInfoUI);
}

try{
  hideLoginError();
} catch {
}