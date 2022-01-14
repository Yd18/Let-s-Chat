var firebaseConfig = {
      apiKey: "AIzaSyCpKgneUvq-L--aouY24jQFtwTXGEJOyfw",
      authDomain: "kwitter-1f2f1.firebaseapp.com",
      databaseURL: "https://kwitter-1f2f1-default-rtdb.firebaseio.com",
      projectId: "kwitter-1f2f1",
      storageBucket: "kwitter-1f2f1.appspot.com",
      messagingSenderId: "99678887036",
      appId: "1:99678887036:web:8a018cdf683498558c3df9"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

user_name=localstorage.getitem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+ user_name +"!";


function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";

}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("room name-"+Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
document.getElementById("output").innerHTML +=row
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
  console.log(name);
  localstorage.setItem("room_name",name);
  window.location="kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
  window.location = "index.html";
}
 

