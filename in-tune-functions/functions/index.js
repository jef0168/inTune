const firebase = require('firebase');

//firebase config
var firebaseConfig = {
    apiKey: "AIzaSyD_pi6YMdKSPIdakY29Xt9kWDrbstcZXow",
    authDomain: "intune-b680b.firebaseapp.com",
    databaseURL: "https://intune-b680b.firebaseio.com",
    projectId: "intune-b680b",
    storageBucket: "intune-b680b.appspot.com",
    messagingSenderId: "191963914943",
    appId: "1:191963914943:web:4fce37d499060fa419dc0a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const functions = require('firebase-functions');
const admin = require('firebase-admin');
const app = require('express')();
admin.initializeApp();

 // Create and Deploy Your First Cloud Functions
 // https://firebase.google.com/docs/functions/write-firebase-functions

 //get user info
app.get('/Users', (req, res) =>{
    admin
        .firestore()
        .collection('Users')
        .orderBy('createdAt', 'desc')
        .get()
        .then((data) => {
            let users = [];
            data.forEach((doc) => {
                users.push({
                    userId: doc.id,
                    userName: doc.data().userName,
                    bio: doc.data().bio,
                    instPlay: doc.data().instPlay,
                    createdAt: doc.data().createdAt
                });
            });
            return res.json(users);
        })
        .catch((err) => console.error(err));
});


//User info 
app.post('/User', (req,res) => {

   const newProfile = {
       userName: req.body.userName,
       bio: req.body.bio,
       instPlay: req.body.instPlay,
       createdAt: new Date().toISOString()
   };

   admin
        .firestore()
        .collection('Users')
        .add(newProfile)
        .then((doc) => {
            res.json({ message: `Document ${doc.id} created successfully`});
            return null
        })
        .catch((err) => {
            res.status(500).json({error: 'Something went wrong'});
            console.error(err)
        });
});

//Signup route NOT WORKING
app.post('/signup', (req, res) => {
    const newUser = {
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,
        handle: req.body.handle,
    };
    //AUTOHORIZE USER TODO
    firebase.auth().createUserWithEmailAndPassword(newUser.email,newUser.password)
        .then((data) => {
            return res.status(201).json({message: `User ${data.user.uid} signed up successfully`});
        })
        .catch((err) =>{
            console.error(err);
            return res.status(500).json({error: err.code});
        });
});

 exports.api = functions.https.onRequest(app);
