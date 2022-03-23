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

    $.ajax({
        url: URL+ "facebook/login",
        type: "post",
        dataType: "json",
        data: user.providerData[0],
        success: function(data){
            if(data.status == "success"){
                alert("inicio de sesión con éxito");
                window.location.replace(URL+"/dashboard");
            }else{
                alert("Ha ocurrido un error");
            }
        },
        error: function(error){
            alert("Ocurrió un error");
        }
    });
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
