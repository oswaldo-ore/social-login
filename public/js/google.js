$('#googleLogin').click(function(){
    firebase.auth()
  .signInWithPopup(googleProvider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log(user);

    $.ajaxSetup({
        headers : {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    $.ajax({
        url: URL + "/google/login",
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
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
    console.log(error);
  });
});



