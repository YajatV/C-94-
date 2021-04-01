var firebaseConfig = {
      apiKey: "AIzaSyCLMuou29H0GI-UUCA7PXqkOZT2jnlTLgk",
      authDomain: "c-94-413fe.firebaseapp.com",
      databaseURL: "https://c-94-413fe-default-rtdb.firebaseio.com",
      projectId: "c-94-413fe",
      storageBucket: "c-94-413fe.appspot.com",
      messagingSenderId: "421183915003",
      appId: "1:421183915003:web:87051da3eff64cd06a015e",
      measurementId: "G-8SVMH595X9"
    };
 
    firebase.initializeApp(firebaseConfig);

  function addUser(){
      user_name=document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
      purpose:"adding user"    
      });
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;



      });});}
getData();