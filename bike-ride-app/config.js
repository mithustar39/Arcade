import firebase from "firebase";


var firebaseConfig = {
  apiKey: "AIzaSyC-SxxQwdIg0BScOQDHlx3cjRBMavzsjYQ",
  authDomain: "e-ride-app-bad2b.firebaseapp.com",
  databaseURL: "https://e-ride-app-bad2b-default-rtdb.firebaseio.com",
  projectId: "e-ride-app-bad2b",
  storageBucket: "e-ride-app-bad2b.appspot.com",
  messagingSenderId: "623900190097",
  appId: "1:623900190097:web:7acc49c230b788116ea630"
};
if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}
export default firebase.firestore();
