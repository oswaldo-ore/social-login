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

    console.log(user);
    /*console.log(credential);*/
    // ...

    $.ajax({
        url: URL+ "/facebook/login",
        type: "post",
        dataType: "json",
        data: user.providerData[0],
        success: function(data){

            if(data.status == "success"){
                alert("inicio de sesión con éxito");
                window.location.replace(URL+"/dashboard");
            }else{
                console.log(data.data);
                alert("Ha ocurrido un error");
            }
        },
        error: function(error){
            console.log(error);
            alert("Ocurrió un error");

        }
    });


    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var accessToken = credential.accessToken;


  })
  .catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    console.log("ocurrio un error");
    console.log(error);
    // ...


    if(error.code === 'auth/account-exists-with-different-credential'){
        var pendingCred = error.credential;
        var email = error.email;
        firebase.auth().fetchSignInMethodsForEmail(email).then(function(methods) {
            if (methods[0] === 'password') {
                var password = promptUserForPassword();
                firebase.auth().signInWithEmailAndPassword(email, password).then(function(result) {
                return result.user.linkWithCredential(pendingCred);
            }).then(function() {

                console.log("método 0");
            });
                return;
            }
            firebase.auth().signInWithPopup(facebookProvider).then(function(result) {
                result.user.linkAndRetrieveDataWithCredential(pendingCred).then(function(usercred) {
                // Facebook account successfully linked to the existing Firebase user.
                    console.log("logged", usercred);
                });
            });
        });
    }
  });

});
