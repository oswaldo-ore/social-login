 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAsOjD0DI4OV0x4mHljOlJ602rV-hXCock",
    authDomain: "prueba-login-ccbbd.firebaseapp.com",
    projectId: "prueba-login-ccbbd",
    storageBucket: "prueba-login-ccbbd.appspot.com",
    messagingSenderId: "1029670223335",
    appId: "1:1029670223335:web:4961e9d2ee81a5ccfd1142"
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  // Initialize Firebase
  //firebase.initializeApp(firebaseConfig);
  var URL = $('meta[name="baseURL"]').attr('content');

  console.log("Firebase started.");

  var facebookProvider = new firebase.auth.FacebookAuthProvider();
  var googleProvider = new firebase.auth.GoogleAuthProvider();

