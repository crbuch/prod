import { AuthErrorCodes } from 'firebase/auth';

export const userName = document.querySelector('#userEmail');
export const userPassword = document.querySelector('#userPassword');

export const btnLogin = document.querySelector('#btnLogin');
export const btnLogout = document.querySelector('#btnLogout');
export const form = document.getElementById('login');

export const divLoginError = document.querySelector('#divLoginError');
export const lblLoginErrorMessage = document.querySelector('#lblLoginErrorMessage');


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

export const setActiveView = (view) => {
  let elems = document.querySelectorAll(".active");
  [].forEach.call(elems, (el) => {
    if (!el.id.includes("Days")) {
      el.classList.remove("active");
    }
  });
  document.getElementById(view).className += "active";
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

export const toggleInitScale = () => {
  const currScale = localStorage.getItem('initScale');
  if (currScale == 'linear') {
    $('#initScale').text('Init: Logarithmic')
    localStorage.setItem('initScale','logarithmic')
  }else {
    $('#initScale').text('Init: Linear')
    localStorage.setItem('initScale','linear')
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



try{
  hideLoginError();
} catch {
}