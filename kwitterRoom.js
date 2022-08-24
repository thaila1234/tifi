
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
 
userName = localStorage.getItem("userName");

document.getElementById("userName").innerHTML = "Bem-vindo(a), " + userName + "!";

function addRoom(){
  nomeSala = document.getElementById("roomName").value;
  firebase.database().ref("/").child(nomeSala).update({
    purpose:"Adicionar nome da sala"
  });
  localStorage.setItem("nomeSala", nomeSala);
  window.location = "KwitterPage.html"
}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(
      function (childSnapshot) {
        childKey = childSnapshot.key;
        roomNames = childKey;
        //Início do código
        console.log(childKey)
        row = "<div class='roomName' id=" + roomNames + " onclick='redirectToRoomName(this.id)' >#" +
        roomNames + "</div><hr>";
      document.getElementById("output").innerHTML += row;
        //Fim do código
      });
  });
}
function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("roomName", name);
  window.location = "kwitterPage.html";
}

getData();


function logout(){
  localStorage.removeItem("user")
  localStorage.removeItem("nomeSala")
  window.location = "index.html";
}

