// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUR-XivQ2_gnMJ-2mzX-zFvF60ROv_N4s",
  authDomain: "kwitter-d63ef.firebaseapp.com",
  databaseURL: "https://kwitter-d63ef-default-rtdb.firebaseio.com",
  projectId: "kwitter-d63ef",
  storageBucket: "kwitter-d63ef.appspot.com",
  messagingSenderId: "66124173686",
  appId: "1:66124173686:web:df90875a0e5fe54bff6a57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML="welcome"+user_name+"!"

function addRoom()
{
      Room_names = document.getElementById("room_names").value
      firebase.database() . ref("/").child(room_names).update({
            purporse : "adding room name"
});
localStorage.setItem("room_name" , room_names)
window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room_Names - "+Room_names);
row="<div class='room_names' id="+Room_names+" onclick='redirectToName(This.id)'>#"+Room_names+"</div><hr>"
      //End code
      });});}
getData();
function redirectToName(name)
{
      console.log(name);
      localStorage.setItem("room_names" , name);
      window.location = "kwitter_page.html";
}