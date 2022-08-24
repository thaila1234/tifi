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

  var nomeSala = localStorage.getItem("nomeSala");
  var username = localStorage.getItem("userName")

  function getData(){
    firebase.database().ref("/"+nomeSala).on('value', function(snapshot){
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot){
            childKey  = childSnapshot.key; childData = childSnapshot.val();
            if(childKey != "purpose"){
                firebaseMessageId = childKey;
                messageData = childData;
            }
        });
    });
}
getData();

function enviar(){
    msg = document.getElementById("txtMensagem").value;
    firebase.database().ref(nomeSala).push({
        name: username, 
        mensage: msg, 
        like: 0
    })
    document.getElementById("txtMensagem").value = " ";
}

function logout(){
    localStorage.removeItem("user")
    localStorage.removeItem("nomeSala")
    window.location = "index.html";
  }