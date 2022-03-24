$('#facebookLogin').click(async function(event){

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
    $.ajaxSetup({
        headers : {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
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
        firebase.auth().fetchProvidersForEmail(email)
        .then(providers =>{
            googleProvider.setCustomParameters({login_hint:email});
            result = await firebase.auth().signInWithPopup(googleProvider);
            console.log(result.user,result.credential);
            firebase.auth().signInWithCredential(result.credential).then(user=> {
                user.linkWithCredential(error.credential);
            }).catch(error => log(error));

        }).catch();
    }
  });

});
