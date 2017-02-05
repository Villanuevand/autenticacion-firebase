'use strict';

const firebaseConfig =  require('./config').firebase;
const google = require('./Authentication').googleAuth;


const googleBtn = document.getElementById('google');

const initApp = () => {
    firebase.initializeApp(firebaseConfig);
};

// Initialize Firebase
initApp();

googleBtn.addEventListener('click', google ,false );