const profileInformation = document.querySelector(".profile-information");
const modalBody = document.querySelector(".modal-body");
db.collection("profileInformation").onSnapshot((doc) => {
  doc.forEach((element) => {
    const docRef = db.collection("profileInformation");

    const query = docRef;

    query.get().then((querySnapshot) => {
      if (querySnapshot.empty) {
        return;
      } else {
        const data = element.data();
        profileInformation.innerHTML = `
          <img class="profile-img" src="${data.ImgUrl}" alt="yourImg" />
          <div>
            <p class="sender-name">${data.name}</p>
          </div>
       
        `;
      }
    });
  });
});

db.collection("images").onSnapshot((doc) => {
  doc.forEach((element) => {
    const data = element.data();

    modalBody.innerHTML += `
    <div class="post-img-div">
      <img class="select-img" onclick="selectPostImg(this)" src="${data.img1}" alt="yourImg" />
      <img class="select-img" onclick="selectPostImg(this)" src="${data.img2}" alt="yourImg" />
      <img class="select-img" onclick="selectPostImg(this)" src="${data.img3}" alt="yourImg" />
      <img class="select-img" onclick="selectPostImg(this)" src="${data.img4}" alt="yourImg" />
      <img class="select-img" onclick="selectPostImg(this)" src="${data.img5}" alt="yourImg" />
      <img class="select-img" onclick="selectPostImg(this)" src="${data.img6}" alt="yourImg" />
    </div>
        `;
  });
});
const parentImgAddDiv = document.querySelector(".parent-add-img-div");
function selectPostImg(img) {
  const src = img.src;
  parentImgAddDiv.innerHTML = `
  <img src="${src}" class="post-img">
  `;
  const postImg = document.querySelector(".post-img");
  console.log(parentImgAddDiv);
  const publish = document.querySelector(".publish");
  db.collection("profileInformation").onSnapshot((doc) => {
    doc.forEach((element) => {
      const data = element.data();
      const userId = data.userId;
      const userName = data.name;
      const userImg = data.ImgUrl;

      const postTextInput = document.querySelector(".post-text-input").value;
      publish.onclick = () => {
        db.collection("posts")
          .add({
            postimg: postImg.src,
            posttextinput: postTextInput,
            userName: userName,
            userImg: userImg,
          })
          .then(() => {})
          .catch((err) => {
            console.log(err);
          });
        setInterval(() => {
          window.location.href = "/index.html";
        }, 4000);
      };
    });
  });
}
