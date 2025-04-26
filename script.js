// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBruQDC-dKc5-Gg96STUqJ3S-UwlwkuGPs",
    authDomain: "ripple-accountablity.firebaseapp.com",
    projectId: "ripple-accountablity",
    storageBucket: "ripple-accountablity.firebasestorage.app",
    messagingSenderId: "225754412486",
    appId: "1:225754412486:web:62b34aaf23fdee7b6f6ec7",
    measurementId: "G-1GMYBWFBYM"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Get a reference to Firestore
const db = firebase.firestore(app);

// Get a reference to Realtime Database
const rtdb = firebase.database(app);

// Get references to DOM elements
const sendButton = document.getElementById('send-button');
const messageInput = document.getElementById('message-input');

// Send message function
sendButton.addEventListener('click', () => {
    console.log('Send button clicked!');
});
