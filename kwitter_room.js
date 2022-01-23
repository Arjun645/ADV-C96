var firebaseConfig = {
  apiKey: "AIzaSyDSWhwJacAvIGVUFJA49ksOzZEHTVarAtc",
  authDomain: "kwitter-5f1ef.firebaseapp.com",
  databaseURL: "https://kwitter-5f1ef-default-rtdb.firebaseio.com",
  projectId: "kwitter-5f1ef",
  storageBucket: "kwitter-5f1ef.appspot.com",
  messagingSenderId: "77253852101",
  appId: "1:77253852101:web:62439196186fc7048329ac"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
  

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

  function addRoom(){

    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
      purpose :"adding room name"
    });
    localStorage.setItem("room_name" , room_name);
    window.location="kwitter_page.html";
  }
   function redirectToRoomName(name)
   {
     console.log(name);
     localStorage.setItem("room_name",name);
     window.location="kwitter_page.html";
     
   }

  function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
  }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
    console.log("room name - "+Room_names);
    row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names+"</div><hr>";
    document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();
