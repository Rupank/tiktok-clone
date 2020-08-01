import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCiYRZfFoub59W_BD3Ds5aL5pAaRRq32QE",
    authDomain: "tiktok-clone-rb.firebaseapp.com",
    databaseURL: "https://tiktok-clone-rb.firebaseio.com",
    projectId: "tiktok-clone-rb",
    storageBucket: "tiktok-clone-rb.appspot.com",
    messagingSenderId: "317780197094",
    appId: "1:317780197094:web:81b531b6b91fefaf524527",
    measurementId: "G-7YS5Z8ZZ73"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  export default db;