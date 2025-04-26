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

// Get a reference to the group chat section
const groupChatSection = document.getElementById('group-chat');

// Function to send a message to the group chat
function sendMessage() {
    // Get the message text from the input box
    const messageText = messageInput.value;
    // Create a new message object with the text and a timestamp
    const newMessage = {
        text: messageText,
        timestamp: firebase.database.ServerValue.TIMESTAMP
    };
    // Push the new message to the 'messages' node in the Realtime Database
    rtdb.ref('messages').push(newMessage);
    // Clear the input box
    messageInput.value = '';
    console.log("Send button clicked");
}

// Listen for new messages added to the 'messages' node
rtdb.ref('messages').on('child_added', (snapshot) => {
    // Get the message data from the snapshot
    const message = snapshot.val();
    // Create a new div element for the message
    const messageDiv = document.createElement('div');
    // Set the text content of the div to the message text
    messageDiv.textContent = message.text;
    // Append the message div to the group chat section
    groupChatSection.appendChild(messageDiv);
});





// Add an event listener to the Send button
sendButton.addEventListener('click', sendMessage);

