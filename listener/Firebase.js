const Firebase = require("firebase/app");
require("firebase/database");
// you have install the required libraries
// how to install ????
// follow ===> https://docs.npmjs.com/cli/v7/commands/npm-install

const config = {
    apiKey: "Your API Key",
    authDomain: "Your Auth Domain",
    projectId: "Your Project Id",
    storageBucket: "Your Storage Bucket",
    messagingSenderId: "Your Messaging Sender Id",
    appId: "Your App ID",
    measurementId: "Your Measurement ID"
    // where do you get this info ????
    // follow ===>  https://firebase.google.com/docs/web/setup
}

const firebase = Firebase.initializeApp(config);

module.exports = firebase;

// by NK