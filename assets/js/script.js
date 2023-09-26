const img1 =
  "https://hips.hearstapps.com/hmg-prod/images/good-morning-quotes-1674144479.jpg";
const img2 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV6_yMwNUh0l4_uyXRKfD2eHyjYoF5_TlmJg&usqp=CAU";
const img3 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmy-pignA0d_uUut_WIlhXyD6W2BNJ04F7Aw&usqp=CAU";
const img4 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREpbUwxZYSa3S5Z7jqFEJ1g09IFss0PZXQ7Q&usqp=CAU";
const img5 =
  "https://images2.minutemediacdn.com/image/upload/c_crop,w_3840,h_2160,x_0,y_0/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/images/voltaxMediaLibrary/mmsport/mentalfloss/01gw0bst2k1bt9nz1g6k.jpg";
const img6 =
  "https://d1v7g7y4y70yfq.cloudfront.net/02-Blog/Main-Blog-Illustrations/blog-2020-04-07-how_to_say_thank_you_in_business.png";
const docRef = db.collection("images");

const query = docRef
  .where("img1", "==", img1)
  .where("img2", "==", img2)
  .where("img3", "==", img3)
  .where("img4", "==", img4)
  .where("img5", "==", img5)
  .where("img6", "==", img6);

query
  .get()
  .then((querySnapshot) => {
    if (querySnapshot.empty) {
      db.collection("images").add({
        img1: img1,
        img2: img2,
        img3: img3,
        img4: img4,
        img5: img5,
        img6: img6,
      });
    } else {
      return;
    }
  })
  .catch((error) => {
    console.log("error", error);
  });

const createPost = document.querySelector(".create-post");

const sign = document.querySelector(".sign");
const mainPage = document.querySelector(".containr");

const userIcon = document.querySelector(".user-icon");
const userIconCreatePost = document.querySelector(".user");
sign.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "./assets/sign up/index.html";
});
db.collection("profileInformation").onSnapshot((doc) => {
  doc.forEach((element) => {
    const docRef = db.collection("profileInformation");

    const query = docRef;

    query
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.empty) {
          return;
        } else {
          const data = element.data();

          userIcon.innerHTML = `
  <a href="./assets/Settings/index.html">
    <img src="${data.ImgUrl}" class="img-rounded dropdown">
 </a>
 <ul class="dropdown-content">
   <li>${data.name}</li>
   <li>${data.email}</li>
   <li>Log out</li>
 </ul>
               
          `;
          userIconCreatePost.innerHTML = `
          <img src="${data.ImgUrl}" class="img-rounded">
          `;
          return;
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  });
});
const createPostInput = document.querySelector("#create-post");

const addImg = document.querySelector(".add-img");
const faceBookPosts = document.querySelector(".facebook-posts");
addImg.addEventListener("click", () => {
  window.location.href = "./assets/posts/index.html";
});

db.collection("posts").onSnapshot((doc) => {
  doc.forEach((element) => {
    const docRef = db.collection("posts");

    const query = docRef;

    query.get().then((querySnapshot) => {
      if (querySnapshot.empty) {
        return;
      } else {
        const data = element.data();

        faceBookPosts.innerHTML += `

<div class="facebook-posts__post">

           
           <div class="profile">
             <div class="profile-information">
               <img class="profile-img" src="${data.userImg}">
               <div>
                 <h4 class="sender-name">${data.userName}</h4>
               </div>
             </div>
             <div class="dropdown">
               <div class="more">
               <i class="ri-more-fill"></i>
               </div>
               <ul class="dropdown-content">
                  <li onclick="updateAccount(this, '${element.id}')">edit</li>
                  <li onclick="deleteAccount(this, '${element.id}')">delete</li>

               </ul>
             </div>

           </div>

           <p class="post-text">
             ${data.posttextinput}
           </p>
           <img src="${data.postimg}" alt="" class="post-img" />

         </div>
   
`;
      }
    });
  });
});
function deleteAccount(btn, docId) {
  const parent = btn.parentElement.parentElement;

  db.collection("posts")
    .doc(docId)
    .delete()
    .then(() => {
      alert("doc deleted successfully");
    })
    .catch((error) => {
      alert("error in delete", error);
    });
}

function updateAccount(item, docId) {
  const p =
    item.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector(
      "p",
    );
  p.innerHTML = `<input type="text" class="updatedValue"/> <button class="save">save</button>`;

  const saveBtn = p.querySelector(".save");

  saveBtn.addEventListener("click", () => {
    const updateInput = p.querySelector(".updatedValue");
    const updatedValue = updateInput.value;

    db.collection("posts")
      .doc(docId)
      .update({
        posttextinput: updatedValue,
      })
      .then(() => {
        p.innerHTML = updatedValue;
        alert("post edited");
      })
      .catch((error) => {
        alert("error in delete", error);
      });
  });
}
const menuIcon = document.querySelector(".menu");
const homeIcon = document.querySelector(".home");
const mobileSwimSlide = document.querySelector(".mobile-swim-slide");

db.collection("profileInformation").onSnapshot((doc) => {
  doc.forEach((element) => {
    const docRef = db.collection("profileInformation");

    const query = docRef;
    query.get().then((querySnapshot) => {
      if (querySnapshot.empty) {
        return;
      } else {
        const data = element.data();
        mobileSwimSlide.innerHTML += `
        <div class="profile-box">

          <div class="user-img-name-arrow">
            <div class="user-img-name">
              <img src="${data.ImgUrl}" class="profile-box__img">
              <div>
                <p class="profile-box__name">${data.name}
                </p>
              </div>
            </div>

            <div class="arrow-div">
              <i class="ri-arrow-down-s-line "></i>
            </div>
          </div>
          <hr>
          <div class="create-account">
            <div class="plus-icon">
              <i class="ri-add-fill"></i>
            </div>
            <p>create new account</p>
          </div>
        </div>

        <div class="shortcuts">
          <div class="shortcuts__shortcut">
            <i class="ri-article-fill"></i>
            <p>news</p>
          </div>
          <div class="shortcuts__shortcut">            
            <i class="ri-account-circle-fill"></i>
            <p>search for friend</p>
          </div>
          <div class="shortcuts__shortcut">
            <i class="ri-group-2-fill"></i>
            <p>groups</p>
          </div>
          <div class="shortcuts__shortcut">
            <i class="ri-store-2-fill"></i>
            <p>market place</p>
          </div>
          <div class="shortcuts__shortcut">
            <i class="ri-history-line"></i>
            <p>memories</p>
          </div>
          <div class="shortcuts__shortcut">
            <i class="ri-movie-fill"></i>
            <p>video</p>
          </div>
          <div class="shortcuts__shortcut">
            <i class="ri-flag-fill"></i>
            <p>pages</p>
          </div>
          <div class="shortcuts__shortcut">
            <i class="ri-bookmark-fill"></i>
            <p>saved items</p>
          </div>
          <div class="shortcuts__shortcut">
            <i class="ri-calendar-event-fill"></i>
            <p>events</p>
          </div>
          <div class="shortcuts__shortcut">
            <i class="ri-clapperboard-fill"></i>
            <p>reels</p>
          </div>
          <div class="shortcuts__shortcut">
            <i class="ri-game-fill"></i>
            <p>legendry games</p>
          </div>
          <div class="shortcuts__shortcut">
            <i class="ri-gamepad-fill"></i>
            <p>games</p>
          </div>
          <div class="shortcuts__shortcut">
            <i class="ri-messenger-fill"></i>
            <p>messenger kids</p>
          </div>
          <div class="shortcuts__shortcut">
            <i class="ri-paint-fill"></i>
            <p>avatar painting</p>
          </div>
        </div>
        <div class="more-settings">
          <div class="more-settings__setting">
          <i class="ri-question-fill"></i>
          <p>help and support</p>
          </div>
          <div class="more-settings__setting">
          <i class="ri-settings-4-fill"></i>
          <p>settings and privacy</p>
          </div>
        </div>
        `;
        const shortcuts = document.querySelector(".shortcuts");
        const profileBox = document.querySelector(".profile-box");

        menuIcon.onclick = () => {
          homeIcon.classList.remove("active");
          menuIcon.classList.add("active");
          mobileSwimSlide.style.transition = "all .2s";
          mobileSwimSlide.style.maxWidth = "200vw";
          profileBox.style.transition = "all .5s";
          profileBox.style.opacity = "100%";
          profileBox.style.width = "69%";
          profileBox.style.justifyContent = "space-between";

          shortcuts.style.transition = "all .5s";
          shortcuts.style.opacity = "100%";
        };
        homeIcon.onclick = () => {
          menuIcon.classList.remove("active");
          homeIcon.classList.add("active");

          mobileSwimSlide.style.transition = "all .2s";
          mobileSwimSlide.style.maxWidth = "0";
          profileBox.style.transition = "all .5s";
          profileBox.style.opacity = "0";

          shortcuts.style.transition = "all .5s";

          shortcuts.style.opacity = "0";
        };
      }
    });
  });
});

const hq = document.querySelector(".logo-img");
db.collection("test").onSnapshot((doc) => {
  doc.forEach((item) => {
    const itemData = item.data();
    hq.src = `${itemData.testName}`;
  });
});
