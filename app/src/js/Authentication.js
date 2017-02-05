
export function googleAuth () {
    console.log('googleAuth');
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then(function(result) {
            console.log('googleAuth OK');
            let token = result.credential.accessToken;
            let user = result.user;

            console.log(token);
            console.log(user);
            // ...
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
}

export function githubAuth () {
    console.log('githubAuth');
    const provider = new firebase.auth.GithubAuthProvider();
    provider.addScope('user');
    firebase.auth().signInWithPopup(provider)
        .then((result) => {
            console.log('githubAuth OK');
            let token = result.credential.accessToken;
            let user = result.user;

            console.log(token);
            console.log(user);

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
}