// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCPUG7FSwhjbm3aWbbNh0rNxVbLTIw9THk",
    authDomain: "note-tab-81e6c.firebaseapp.com",
    databaseURL: "https://note-tab-81e6c.firebaseio.com",
    projectId: "note-tab-81e6c",
    storageBucket: "note-tab-81e6c.appspot.com",
    messagingSenderId: "599321430700",
    appId: "1:599321430700:web:ea74f6d4276de36b5e6d09",
    measurementId: "G-YHZSBWD4MQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
 
  console.log(firebase);

  chrome.runtime.onMessage.addListener((msg, sender, response) => {
    if(msg.command == 'fetchNotes'){
        firebase.database().ref('/notes').once('value').then(function(snapshot){
            response({type: "result", status: "success", data: snapshot.val(), request: msg});
        });
        
    }
    return true;

  });