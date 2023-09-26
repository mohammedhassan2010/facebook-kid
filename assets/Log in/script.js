const sign = document.querySelector("button");
const form = document.querySelector(".div");
const formData = form.childNodes;

const input2 = formData[3];
const input3 = formData[5];
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import {
  getDatabase,
  ref,
  update,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBjb-p24wduE9m83tnhJjyD4715WXRtKho",

  authDomain: "final-project-c02f0.firebaseapp.com",

  projectId: "final-project-c02f0",

  storageBucket: "final-project-c02f0.appspot.com",

  messagingSenderId: "133002812",

  appId: "1:133002812:web:344e7928aaa5e9aadff539",

  measurementId: "G-3VW4T8C73B",
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);
const auth = getAuth();
sign.addEventListener("click", (e) => {
  const email = input2.value;
  const password = input3.value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      const dt = new Date();
      update(ref(database, "users/" + user.uid), {
        last_login: dt,
      });
      alert("user Logged in");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
});
