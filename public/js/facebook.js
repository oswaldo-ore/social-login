$('#facebookLogin').click(function(event){

    firebase
  .auth()
  .signInWithPopup(facebookProvider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    console.log("connect" , result);
    var credential = result.credential;

    // The signed-in user info.
    var user = result.user;

    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var accessToken = credential.accessToken;

    console.log(user);
    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    console.log(error);
    // ...
  });

});
