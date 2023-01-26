
//ADD YOUR FIREBASE LINK
var firebaseConfig = {
    apiKey: "AIzaSyAT3fZhIM4BnQaNkkqBLv5sR0-V4qD9MVY",
    authDomain: "class-test-b5f0e.firebaseapp.com",
    databaseURL: "https://class-test-b5f0e-default-rtdb.firebaseio.com",
    projectId: "class-test-b5f0e",
    storageBucket: "class-test-b5f0e.appspot.com",
    messagingSenderId: "917094650611",
    appId: "1:917094650611:web:15d36f42237670d94d1d86"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function addUser()
{
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    });
}