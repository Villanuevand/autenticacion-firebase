'use strict';

const firebaseConfig =  require('./config').firebase;
const google = require('./Authentication').googleAuth;
const github = require('./Authentication').githubAuth;


const googleBtn = document.getElementById('google');
const githubBtn = document.getElementById('github');

const initApp = () => {
    firebase.initializeApp(firebaseConfig);
};

// Initialize Firebase
initApp();

googleBtn.addEventListener('click', google ,false);
githubBtn.addEventListener('click', github, false);