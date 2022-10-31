import { refs } from './refs';
import { initializeApp } from 'firebase/app';

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
  refs.signBtn.setAttribute('disabled', 'disabled');
  refs.signOutBtn.classList.toggle('is-hidden');
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
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      // ..
    });
}
function sigInSystem(event) {
  event.preventDefault();
  const inEmail = refs.inputEmail.value;
  const inPass = refs.inputPass.value;
  signInWithEmailAndPassword(auth, inEmail, inPass)
    .then(userCredential => {
      // Signed in
      const user = userCredential.user;
      setParameter(user);
      // ...
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}
function signOutSystems() {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      refs.signBtn.innerText = 'Sign In';
      refs.signBtn.removeAttribute('disabled');
      refs.signOutBtn.classList.toggle('is-hidden');
    })
    .catch(error => {
      // An error happened.
    });
}
function signGoogleSystems(event) {
  event.preventDefault;

  signInWithPopup(auth, provider)
    .then(result => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      /*   const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken; */
      // The signed-in user info.
      const user = result.user;

      setParameter(user.displayName);
      // ...
    })
    .catch(error => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
}
function signFaceSystems() {
  event.preventDefault;
  signInWithPopup(auth, provider1)
    .then(result => {
      // The signed-in user info.
      const user = result.user;
      setParameter(user.displayName);
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      /*   const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;
 */
      // ...
    })
    .catch(error => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = FacebookAuthProvider.credentialFromError(error);

      // ...
    });
}
console.log(refs.googleBtn);

refs.signBtn.addEventListener('click', openModal);
refs.closeBtn.addEventListener('click', closeModal);
refs.signInBtn.addEventListener('click', sigInSystem);
refs.signUpBtn.addEventListener('click', createInSystem);
refs.signOutBtn.addEventListener('click', signOutSystems);
refs.googleBtn.addEventListener('click', signGoogleSystems);
refs.faseBtn.addEventListener('click', signFaceSystems);
//
