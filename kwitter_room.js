
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCmdy8Qs2kZAwZC2THHujgRyzcJOn2pwAQ",
      authDomain: "class-test-812cf.firebaseapp.com",
      databaseURL: "https://class-test-812cf-default-rtdb.firebaseio.com",
      projectId: "class-test-812cf",
      storageBucket: "class-test-812cf.appspot.com",
      messagingSenderId: "505034044854",
      appId: "1:505034044854:web:7f8a392b5025168f73fd17"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

   user_name=localStorage.getItem("user_name");
   document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
   
   function addRoom()
   {
         room_name=document.getElementById("room_name").value;
         firebase.database().ref("/").child(room_name).update({
               purpose: "adding room name"
         });
         localStorage.setItem("room_name",room_name);
         window.location="kwitter_page.html";
   }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name: "+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}