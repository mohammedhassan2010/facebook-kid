const sign = document.querySelector("button");
const form = document.querySelector(".div");
const formData = form.childNodes;
const input4 = formData[7];
const input1 = formData[1];
const input2 = formData[3];
const input3 = formData[5];
sign.addEventListener("click", () => {
  const name = input1.value;
  const email = input2.value;
  const password = input3.value;
  const imgUrl = input4.value;
  const docRef = db.collection("profileInformation");

  const query = docRef
    .where("name", "==", name)
    .where("email", "==", email)
    .where("password", "==", password)
    .where("ImgUrl", "==", imgUrl);

  query
    .get()
    .then((querySnapshot) => {
      if (querySnapshot.empty) {
        db.collection("profileInformation").add({
          name: name,
          email: email,
          password: password,
          ImgUrl: imgUrl,
        });
      } else {
        return;
      }
    })
    .catch((error) => {
      console.log("error", error);
    });
});

// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
// import {
//   getDatabase,
//   set,
//   ref,
// } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
// } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

// const firebaseConfig = {
//   apiKey: "AIzaSyBjb-p24wduE9m83tnhJjyD4715WXRtKho",

//   authDomain: "final-project-c02f0.firebaseapp.com",

//   projectId: "final-project-c02f0",

//   storageBucket: "final-project-c02f0.appspot.com",

//   messagingSenderId: "133002812",

//   appId: "1:133002812:web:344e7928aaa5e9aadff539",

//   measurementId: "G-3VW4T8C73B",
// };

// const app = initializeApp(firebaseConfig);

// const database = getDatabase(app);
// const auth = getAuth();
// sign.addEventListener("click", (e) => {
//   const name = input1.value;
//   const email = input2.value;
//   const password = input3.value;

//   createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       // Signed in
//       const user = userCredential.user;
//       set(ref(database, "users/" + user.uid), {
//         name: name,
//         email: email,
//       });
//       alert("account created");

//       //  ...
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       alert(errorMessage);
//       // ..
//     });
// });
