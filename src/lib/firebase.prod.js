import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//if you uncomment this and refresh it will create duplicate data in firebase 
// import { seedDatabase } from '../seed';


const config = {
    apiKey: "AIzaSyBuvOrKt1RBKqXqqHiuZReISd1UBR3uB6I",
    authDomain: "netflix-clone-frontend-20ec2.firebaseapp.com",
    projectId: "netflix-clone-frontend-20ec2",
    storageBucket: "netflix-clone-frontend-20ec2.appspot.com",
    messagingSenderId: "254819867488",
    appId: "1:254819867488:web:6367039145a0540b955c05"
};

const firebase = Firebase.initializeApp(config);

//if you uncomment this and refresh it will create duplicate data in firebase 
// seedDatabase(firebase);

export { firebase };