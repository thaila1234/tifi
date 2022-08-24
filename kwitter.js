

//ADICIONE SEUS LINKS FIREBASE 
const firebaseConfig = {
  apiKey: "AIzaSyBZeaDvaFOLZGMrtoRADlYaz6-ZIBV6TwI",
  authDomain: "rede-tifi.firebaseapp.com",
  databaseURL: "https://rede-tifi-default-rtdb.firebaseio.com",
  projectId: "rede-tifi",
  storageBucket: "rede-tifi.appspot.com",
  messagingSenderId: "597769609686",
  appId: "1:597769609686:web:bb5e7365856e2fb6b04477"
};

firebase.initializeApp(firebaseConfig);

function addUser(){
  user = document.getElementById("userName").value;
  //firebase.database().ref("/").child(user).update({
    //purpose:"Adicionar usuário"
    //});
  localStorage.setItem("userName", user)
  window.location = "kwitterRoom.html"
}