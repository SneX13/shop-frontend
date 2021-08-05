/*// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import * as firebase from "firebase";
import "firebase/database";


let config = {

    apiKey: "AIzaSyDIcfrwNxfo2PB1c9Pdo8WVRx5GFXr-EVc",
    authDomain: "greatgames-demo.firebaseapp.com",
    databaseURL: "https://greatgames-demo-default-rtdb.firebaseio.com",
    projectId: "greatgames-demo",
    storageBucket: "greatgames-demo.appspot.com",
    messagingSenderId: "359630207437",
    appId: "1:359630207437:web:778e1303169c36774bec84",
    measurementId: "G-866YFGYDJ7"
}
firebase.initializeApp(config);
export default firebase.database();*/

import firebase from 'firebase/app'
import 'firebase/database';
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDIcfrwNxfo2PB1c9Pdo8WVRx5GFXr-EVc",
    authDomain: "greatgames-demo.firebaseapp.com",
    databaseURL: "https://greatgames-demo-default-rtdb.firebaseio.com",
    projectId: "greatgames-demo",
    storageBucket: "greatgames-demo.appspot.com",
    messagingSenderId: "359630207437",
    appId: "1:359630207437:web:778e1303169c36774bec84",
    measurementId: "G-866YFGYDJ7"
}

function initFirebase() {
    if(!firebase.apps.length) {
        firebase.initializeApp(config)
    }
}

initFirebase();
export {firebase}