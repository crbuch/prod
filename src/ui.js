import { AuthErrorCodes } from 'firebase/auth';

export const userEmail = document.querySelector('#userEmail')
export const userPassword = document.querySelector('#userPassword')

export const btnLogin = document.querySelector('#btnLogin')
export const btnLogout = document.querySelector('#btnLogout')

export const divLoginError = document.querySelector('#divLoginError')
export const lblLoginErrorMessage = document.querySelector('#lblLoginErrorMessage')


export const showLoginForm = () => {
  const currPage = window.location.pathname.split("/").pop();
  if (currPage != 'index.html'){
    window.location.replace("http://127.0.0.1:5503/../dist/index.html");
    //window.location.replace("https://matthewplaisance.github.io/STprod/dist/index.html");
  }
}

export const showApp = () => {
  const currPage = window.location.pathname.split("/").pop();
  if (currPage == 'index.html'){
    window.location.replace("http://127.0.0.1:5503/../dist/curves.html");
    //window.location.replace("https://matthewplaisance.github.io/STprod/dist/curves.html");
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

try{
  hideLoginError();
} catch {
}