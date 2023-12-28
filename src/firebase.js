import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCPsG9zexwSJhq2owWi1LfZEkswr5xf8Ds",
    authDomain: "linkedin-clone-d873d.firebaseapp.com",
    projectId: "linkedin-clone-d873d",
    storageBucket: "linkedin-clone-d873d.appspot.com",
    messagingSenderId: "474369294841",
    appId: "1:474369294841:web:761b56a7deec52f677fd28"
  };


  const firebaseApp = firebase .initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db , auth }