'use strict';

const firebaseConfig =  require('./config').firebase;
const google = require('./Authentication').googleAuth;
const github = require('./Authentication').githubAuth;
const twitter = require('./Authentication').twitterAuth;
const facebook = require('./Authentication').facebookAuth;
const logout = require('./Authentication').signOut;


const googleBtn = document.getElementById('google');
const githubBtn = document.getElementById('github');
const twitterBtn = document.getElementById('twitter');
const facebookBtn = document.getElementById('facebook');
const logoutBtn = document.getElementById('logout');

const initApp = () => {
    firebase.initializeApp(firebaseConfig);
};


// Initialize Firebase
initApp();

googleBtn.addEventListener('click', google ,false);
githubBtn.addEventListener('click', github, false);
twitterBtn.addEventListener('click', twitter, false);
facebookBtn.addEventListener('click', facebook, false);
logoutBtn.addEventListener('click', logout, false);
