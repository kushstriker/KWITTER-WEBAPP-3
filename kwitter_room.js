
var firebaseConfig = {
      apiKey: "AIzaSyAJIJHHAt1-6pslZ31USLAlZrbaJqkaR9A",
      authDomain: "kwitter-project-da0df.firebaseapp.com",
      databaseURL: "https://kwitter-project-da0df-default-rtdb.firebaseio.com",
      projectId: "kwitter-project-da0df",
      storageBucket: "kwitter-project-da0df.appspot.com",
      messagingSenderId: "972822540731",
      appId: "1:972822540731:web:b5e94184dce2b6f610d49e"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name")
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom()
  {
        room_name = document.getElementById("room_name").value;
  
        firebase.database().ref("/").child(room_name).update({
              purepose : "adding room name"
        });
  
              localStorage.setItem("room_name", room_name);
  
              window.location = "kwitter_page.html";
  
              
              function redirectToRomName(name)
              {
                    console.log(name);
                    localStorage.setItem("room_name", name);
                      window.location = "kwitter_room.html";
              }
  }