'use strict';

const config =  require('./firebaseConfig').config;

const initApp = () => {
    firebase.initializeApp(config);
};

// Initialize Firebase
initApp();