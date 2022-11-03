import { refs } from './refs';
import { ERROR_CODES} from './erorr';
import { initializeApp } from 'firebase/app';
import Notiflix from 'notiflix';

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDRjTFbmRann_cr3ckzqO-WJzrN46pmMNY',
  authDomain: 'ultimate-choir-311114.firebaseapp.com',
  projectId: 'ultimate-choir-311114',
  storageBucket: 'ultimate-choir-311114.appspot.com',
  messagingSenderId: '747352375066',
  appId: '1:747352375066:web:bfd52aa1c7f0703dcff6a3',
  measurementId: 'G-XPVPECFXHK',
};
 function getKeyByValue(value) {

  for(let err  in ERROR_CODES) {

      if(ERROR_CODES.hasOwnProperty(err)) {
           if(ERROR_CODES[err] === value){
               return err;
              }
      }
  }
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const provider1 = new FacebookAuthProvider();
function closeModal() {
  refs.bckDrop.classList.add('is-hidden');
}
function openModal() {
  refs.bckDrop.classList.remove('is-hidden');
}
function setParameter(value) {
  refs.signBtn.innerText = value;
  refs.inputEmail.value = '';
  refs.inputPass.value = '';
  refs.signBtn.classList.add('nohover');
  refs.signBtn.setAttribute('disabled', 'disabled');
  refs.signOutBtn.classList.toggle('is-hidden');
  Notiflix.Notify.success('Login is complete')
  closeModal();
}


function createInSystem(event) {
  event.preventDefault();
  const inEmail = refs.inputEmail.value;
  const inPass = refs.inputPass.value;
  createUserWithEmailAndPassword(auth, inEmail, inPass)
    .then(userCredential => {
      // Signed in
      const user = userCredential.user;
      setParameter(user.email);
      return user;
    })
    .catch(error => {
      Notiflix.Notify.failure( getKeyByValue(error.code));

    });
}
function sigInSystem(event) {
  event.preventDefault();
  const inEmail = refs.inputEmail.value;
  const inPass = refs.inputPass.value;
  signInWithEmailAndPassword(auth, inEmail, inPass)
    .then(userCredential => {

      const user = userCredential.user;
      setParameter(user.email);

    })
    .catch(error => {

      Notiflix.Notify.failure( getKeyByValue(error.code));
  

    });
}
function signOutSystems() {
  signOut(auth)
    .then(() => {
      refs.signBtn.innerText = 'Sign In';
      refs.signBtn.removeAttribute('disabled');
      refs.signOutBtn.classList.toggle('is-hidden');
      refs.signBtn.classList.remove('nohover');
    })
    .catch(error => {
      Notiflix.Notify.failure( getKeyByValue(error.code));
  
    });
}
function signGoogleSystems(event) {
  event.preventDefault();

  signInWithPopup(auth, provider)
    .then(result => {
      const user = result.user;
      setParameter(user.displayName);
    })
    .catch(error => {
      Notiflix.Notify.failure( getKeyByValue(error.code));
    });
}
function signFaceSystems(event) {
  event.preventDefault();
  signInWithPopup(auth, provider1)
    .then(result => {
      const user = result.user;
      setParameter(user.displayName);
    })
    .catch(error => {
      Notiflix.Notify.failure( getKeyByValue(error.code));
    });
}

refs.signBtn.addEventListener('click', openModal);
refs.closeBtn.addEventListener('click', closeModal);
refs.signInBtn.addEventListener('click', sigInSystem);
refs.signUpBtn.addEventListener('click', createInSystem);
refs.signOutBtn.addEventListener('click', signOutSystems);
refs.googleBtn.addEventListener('click', signGoogleSystems);
refs.faseBtn.addEventListener('click', signFaceSystems);
