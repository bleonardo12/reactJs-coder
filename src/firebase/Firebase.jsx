import firebase from "firebase/app";
import "@firebase/firestore";  

            const app = firebase.initializeApp( {
              apiKey: "AIzaSyBXC7qG1nwujiU7APkaq5zP-Ui49HSM47I",
              authDomain: "anaiak.firebaseapp.com",
              projectId: "anaiak",
              storageBucket: "anaiak.appspot.com",
              messagingSenderId: "754105562302",
              appId: "1:754105562302:web:e897d51bcf57d058115aef",
              measurementId: "G-GZXYDMGEWM"
            });
          
            // Initialize Firebase
            export function getFirebase() {
              return app;
            }

            export function getFirestore(){
              return firebase.firestore(app);
            }
          
          