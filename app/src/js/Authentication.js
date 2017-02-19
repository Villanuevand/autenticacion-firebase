
const userLayer = document.getElementById('active-user'),
    loginLayer = document.getElementById('login'),
    userName = document.getElementById('userName'),
    userEmail = document.getElementById('userEmail'),
    userImage = document.getElementById('userImage');


export function googleAuth () {
    "use strict";
    if(!firebase.auth().currentUser) {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(function(result) {
                console.log('googleAuth OK');
                let token = result.credential.accessToken;
                let user = result.user;
                showUserData('google',user,token);
            }).catch(function(error) {
            console.log('googleAuth Fail');
            // Handle Errors here.
            let errorCode = error.code;
            let errorMessage = error.message;
            // The email of the user's account used.
            let email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            let credential = error.credential;
            // ...
        });
    } else {
        console.log('something is wrong');
        signOut();
    }


}

export function githubAuth () {
    "use strict";
    if (!firebase.auth().currentUser) {
        const provider = new firebase.auth.GithubAuthProvider();
        provider.addScope('user');
        firebase.auth().signInWithPopup(provider)
            .then((result) => {
                console.log('githubAuth OK');
                let token = result.credential.accessToken;
                let user = result.user;
                showUserData('github',user,token);

            })
            .catch((error) => {
                console.log('githubAuth Fail');
                // Handle Errors here.
                let errorCode = error.code;
                let errorMessage = error.message;
                // The email of the user's account used.
                let email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                let credential = error.credential;

                console.log('errorCode ',errorCode );
                console.log('errorMessage ',errorMessage );
                console.log('email ',email );
                console.log('credential ',credential );
                // ...
            });

    } else {
        console.log('something is wrong');
        signOut();
    }

}

export function twitterAuth () {
    "use strict";
    if (!firebase.auth().currentUser) {
        const provider = new firebase.auth.TwitterAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then((result) => {
                console.log('twitterAuth OK');
                let token = result.credential.accessToken;
                let user = result.user;
                showUserData('twitter',user,token);
            })
            .catch((error) => {
                console.log('twitterAuth Fail');
                // Handle Errors here.
                let errorCode = error.code;
                let errorMessage = error.message;
                // The email of the user's account used.
                let email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                let credential = error.credential;

                console.log('errorCode ',errorCode );
                console.log('errorMessage ',errorMessage );
                console.log('email ',email );
                console.log('credential ',credential );
                // ...
            });
    } else {
        console.log('something is wrong');
        signOut();
    }

}

function showUserData (platform,user,token) {
    "use strict";
    console.log('Platform', platform);
    console.log('Token: ',token);
    console.dir(user);

    if (user) {
        userLayer.style.display = 'block';
        loginLayer.style.display = 'none';
        userName.innerHTML = user.displayName;
        userEmail.innerHTML = user.email;
        userImage.setAttribute('src',user.photoURL);
    }
}


export function signOut () {
    "use strict";
    firebase.auth().signOut().then(function() {
        console.log('Signed Out');
        userLayer.style.display = 'none';
        loginLayer.style.display = 'block';
    }, function(error) {
        console.error('Sign Out Error', error);
    });
}