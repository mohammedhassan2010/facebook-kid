const userIcon = document.querySelector(".user-icon");
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

          return;
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  });
});

const menuIcon = document.querySelector(".menu");
const homeIcon = document.querySelector(".home", ".video");

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

const select = document.querySelector("select");
const postsDiv = document.querySelector(".facebook-posts");
select.addEventListener("change", () => {
  const selectValue = select.value;

  if (selectValue == "all") {
    postsDiv.innerHTML = ``;
    postsDiv.innerHTML = `

<div class="facebook-posts__post">
                <div class="profile">
                  <div class="profile-information">
                    <a href="/password.html"><img
                      class="profile-img"
                      src="https://vcap.vn/public/admin/img/avatar.png"
                    /></a>
                    <div>
                      <h4 class="sender-name">admin</h4>
                    </div>
                  </div>
                </div>

                <p class="post-text">حمدون الحلقة الخامسة</p>
                <iframe
                  class="post-img"
                  width="991"
                  height="559"
                  src="https://www.youtube.com/embed/Uuq-vjpS0wM"
                  title="كرتون حمدون حلقة 5"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <div class="facebook-posts__post">
                <div class="profile">
                  <div class="profile-information">
                    <a href="/password.html"><img
                      class="profile-img"
                      src="https://vcap.vn/public/admin/img/avatar.png"
                    /></a>
                    <div>
                      <h4 class="sender-name">admin</h4>
                    </div>
                  </div>
                </div>

                <p class="post-text">كرتون كسلان - حقيقة مرض كسلان</p>
                <iframe
                  class="post-img"
                  width="994"
                  height="559"
                  src="https://www.youtube.com/embed/Ma0DfX-Bs60"
                  title="كرتون كسلان - حقيقة مرض كسلان - قناة ماجد Majid Kids TV"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <div class="facebook-posts__post">
                <div class="profile">
                  <div class="profile-information">
                    <a href="/password.html"><img
                      class="profile-img"
                      src="https://vcap.vn/public/admin/img/avatar.png"
                    /></a>
                    <div>
                      <h4 class="sender-name">admin</h4>
                    </div>
                  </div>
                </div>

                <p class="post-text">كرتون كسلان- مخلوق الكهف ج2</p>
                <iframe
                  width="994"
                  height="559"
                  class="post-img"
                  src="https://www.youtube.com/embed/BPr9DbiRFxE"
                  title="كرتون كسلان- مخلوق الكهف ج2- قناة ماجد Majid Kids TV"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <div class="facebook-posts__post">
                <div class="profile">
                  <div class="profile-information">
                    <a href="/password.html"><img
                      class="profile-img"
                      src="https://vcap.vn/public/admin/img/avatar.png"
                    /></a>
                    <div>
                      <h4 class="sender-name">admin</h4>
                    </div>
                  </div>
                </div>

                <p class="post-text">مسلسل منصور | البحث عن غول الجليد</p>
                <iframe
                  class="post-img"
                  width="994"
                  height="559"
                  src="https://www.youtube.com/embed/TSKSqwezec4"
                  title="S2 E7 مسلسل منصور | البحث عن غول الجليد | Mansour Cartoon | Yeti Hunters"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <div class="facebook-posts__post">
                <div class="profile">
                  <div class="profile-information">
                    <a href="/password.html"><img
                      class="profile-img"
                      src="https://vcap.vn/public/admin/img/avatar.png"
                    /></a>
                    <div>
                      <h4 class="sender-name">admin</h4>
                    </div>
                  </div>
                </div>

                <p class="post-text">كرتون أمونة - الكذب ج1</p>
                <iframe
                  class="post-img"
                  width="994"
                  height="559"
                  src="https://www.youtube.com/embed/RxT6EF7GaVw"
                  title="كرتون أمونة - الكذب ج1 - قناة ماجد  Majid Kids TV"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <div class="facebook-posts__post">
                <div class="profile">
                  <div class="profile-information">
                    <a href="/password.html"><img
                      class="profile-img"
                      src="https://vcap.vn/public/admin/img/avatar.png"
                    /></a>
                    <div>
                      <h4 class="sender-name">admin</h4>
                    </div>
                  </div>
                </div>

                <p class="post-text">امونة المزيونة سلحفاتي</p>
                <iframe
                  class="post-img"
                  width="994"
                  height="559"
                  src="https://www.youtube.com/embed/dMu0IaaL-tA"
                  title="امونة المزيونة    سلحفاتي"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <div class="facebook-posts__post">
                <div class="profile">
                  <div class="profile-information">
                    <a href="/password.html"><img
                      class="profile-img"
                      src="https://vcap.vn/public/admin/img/avatar.png"
                    /></a>
                    <div>
                      <h4 class="sender-name">admin</h4>
                    </div>
                  </div>
                </div>

                <p class="post-text">
                  كرتون اطفال: مسلسل مغامرات الشاب حمدون الحلقة 7
                </p>
                <iframe
                  width="994"
                  height="559"
                  class="post-img"
                  src="https://www.youtube.com/embed/LCOTJ0VaxBY"
                  title="كرتون اطفال: مسلسل مغامرات الشاب حمدون الحلقة 7"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <div class="facebook-posts__post">
                <div class="profile">
                  <div class="profile-information">
                    <a href="/password.html"><img
                      class="profile-img"
                      src="https://vcap.vn/public/admin/img/avatar.png"
                    /></a>
                    <div>
                      <h4 class="sender-name">admin</h4>
                    </div>
                  </div>
                </div>

                <p class="post-text">النقيب خلفان ملخص حلقه🦂العقرب🦂</p>
                <iframe
                  width="994"
                  height="559"
                  src="https://www.youtube.com/embed/mU3MtghdFTc"
                  title="النقيب خلفان ملخص حلقه🦂العقرب🦂"
                  class="post-img"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <div class="facebook-posts__post">
                <div class="profile">
                  <div class="profile-information">
                    <a href="/password.html"><img
                      class="profile-img"
                      src="https://vcap.vn/public/admin/img/avatar.png"
                    /></a>
                    <div>
                      <h4 class="sender-name">admin</h4>
                    </div>
                  </div>
                </div>

                <p class="post-text">مغامرات منصور | حلقات منصور وعبيد</p>
                <iframe
                  width="994"
                  height="559"
                  class="post-img"
                  src="https://www.youtube.com/embed/xL-auwbp71g"
                  title="مغامرات منصور | حلقات منصور وعبيد l | Mansour&#39;s Adventures | Mansour &amp; Obaid"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <div class="facebook-posts__post">
                <div class="profile">
                  <div class="profile-information">
                    <a href="/password.html"><img
                      class="profile-img"
                      src="https://vcap.vn/public/admin/img/avatar.png"
                    /></a>
                    <div>
                      <h4 class="sender-name">admin</h4>
                    </div>
                  </div>
                </div>

                <p class="post-text">كرتون كسلان: كسلان والبولينغ</p>
                <iframe
                  width="994"
                  height="559"
                  class="post-img"
                  src="https://www.youtube.com/embed/8ymoLHoFn_s"
                  title="كرتون كسلان: كسلان والبولينغ | رسوم متحركة للأطفال"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <div class="facebook-posts__post">
                <div class="profile">
                  <div class="profile-information">
                    <a href="/password.html"><img
                      class="profile-img"
                      src="https://vcap.vn/public/admin/img/avatar.png"
                    /></a>
                    <div>
                      <h4 class="sender-name">admin</h4>
                    </div>
                  </div>
                </div>

                <p class="post-text">النقيب خلفان ٣ - الحلقة ١ - لغز الحفل</p>
                <iframe
                  width="994"
                  height="559"
                  src="https://www.youtube.com/embed/lTlLKs3mEtA"
                  title="النقيب خلفان ٣ - الحلقة ١ - لغز الحفل - مدبلج فصحى 1080p (حصرياً)"
                  class="post-img"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
    
    <div class="facebook-posts__post">
                <div class="profile">
                  <div class="profile-information">
                    <a href="/password.html"><img
                      class="profile-img"
                      src="https://vcap.vn/public/admin/img/avatar.png"
                    /></a>
                    <div>
                      <h4 class="sender-name">admin</h4>
                    </div>
                  </div>
                </div>

                <p class="post-text">Dragon Ball Z: Kakarot - Opening Movie Trailer |PS4</p>
                <iframe width="994" 
                height="559" 
                class="post-img"
                src="https://www.youtube.com/embed/rk-wIgg9fNk" 
                title="Dragon Ball Z: Kakarot - Opening Movie Trailer |PS4" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen
                >
            </iframe>
              </div>

              <div class="facebook-posts__post">
                <div class="profile">
                  <div class="profile-information">
                    <a href="/password.html"><img
                      class="profile-img"
                      src="https://vcap.vn/public/admin/img/avatar.png"
                    /></a>
                    <div>
                      <h4 class="sender-name">admin</h4>
                    </div>
                  </div>
                </div>

                <p class="post-text">Dragon Ball FighterZ - Launch Trailer | PS4</p>
                <iframe width="994" height="559" class="post-img" src="https://www.youtube.com/embed/LwdLKPumEaU" title="Dragon Ball FighterZ - Launch Trailer | PS4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>

              <div class="facebook-posts__post">
                <div class="profile">
                  <div class="profile-information">
                    <a href="/password.html"><img
                      class="profile-img"
                      src="https://vcap.vn/public/admin/img/avatar.png"
                    /></a>
                    <div>
                      <h4 class="sender-name">admin</h4>
                    </div>
                  </div>
                </div>

                <p class="post-text">
                    Launch Trailer - Dragon Ball XENOVERSE 2 | PS4, X1, Steam

                </p>
                <iframe width="994" height="559" class="post-img" src="https://www.youtube.com/embed/JnUbg-9v_bE" title="Launch Trailer - Dragon Ball XENOVERSE 2 | PS4, X1, Steam" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>

              <div class="facebook-posts__post">
                <div class="profile">
                  <div class="profile-information">
                    <a href="/password.html"><img
                      class="profile-img"
                      src="https://vcap.vn/public/admin/img/avatar.png"
                    /></a>
                    <div>
                      <h4 class="sender-name">admin</h4>
                    </div>
                  </div>
                </div>

                <p class="post-text">Gameplay Reveal Trailer | Call of Duty: Modern Warfare III</p>
                <iframe width="994" height="559" class="post-img" src="https://www.youtube.com/embed/mHDEDDrGYvo" title="Gameplay Reveal Trailer | Call of Duty: Modern Warfare III" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>

              <div class="facebook-posts__post">
                <div class="profile">
                  <div class="profile-information">
                    <a href="/password.html"><img
                      class="profile-img"
                      src="https://vcap.vn/public/admin/img/avatar.png"
                    /></a>
                    <div>
                      <h4 class="sender-name">admin</h4>
                    </div>
                  </div>
                </div>

                <p class="post-text">SpongeBob SquarePants: The Cosmic Shake - Release Trailer | PS4 Games</p>
                <iframe width="994" height="559" class="post-img" src="https://www.youtube.com/embed/3vqy9NmiWAE" title="SpongeBob SquarePants: The Cosmic Shake - Release Trailer | PS4 Games" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>

              <div class="facebook-posts__post">
                <div class="profile">
                  <div class="profile-information">
                    <a href="/password.html"><img
                      class="profile-img"
                      src="https://vcap.vn/public/admin/img/avatar.png"
                    /></a>
                    <div>
                      <h4 class="sender-name">admin</h4>
                    </div>
                  </div>
                </div>

                <p class="post-text">Poppy Playtime: Chapter 3 - Teaser Trailer</p>
                <iframe width="994" height="559" class="post-img" src="https://www.youtube.com/embed/eQ35V-wxHqY" title="Poppy Playtime: Chapter 3 - Teaser Trailer #2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
    `;
  }
  if (selectValue == "cartoon") {
    postsDiv.innerHTML = ``;
    postsDiv.innerHTML = `
    
              <div class="facebook-posts__post">
                <div class="profile">
                  <div class="profile-information">
                    <a href="/password.html"><img
                      class="profile-img"
                      src="https://vcap.vn/public/admin/img/avatar.png"
                    /></a>
                    <div>
                      <h4 class="sender-name">admin</h4>
                    </div>
                  </div>
                </div>

                <p class="post-text">حمدون الحلقة الخامسة</p>
                <iframe
                  class="post-img"
                  width="991"
                  height="559"
                  src="https://www.youtube.com/embed/Uuq-vjpS0wM"
                  title="كرتون حمدون حلقة 5"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <div class="facebook-posts__post">
                <div class="profile">
                  <div class="profile-information">
                    <a href="/password.html"><img
                      class="profile-img"
                      src="https://vcap.vn/public/admin/img/avatar.png"
                    /></a>
                    <div>
                      <h4 class="sender-name">admin</h4>
                    </div>
                  </div>
                </div>

                <p class="post-text">كرتون كسلان - حقيقة مرض كسلان</p>
                <iframe
                  class="post-img"
                  width="994"
                  height="559"
                  src="https://www.youtube.com/embed/Ma0DfX-Bs60"
                  title="كرتون كسلان - حقيقة مرض كسلان - قناة ماجد Majid Kids TV"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <div class="facebook-posts__post">
                <div class="profile">
                  <div class="profile-information">
                    <a href="/password.html"><img
                      class="profile-img"
                      src="https://vcap.vn/public/admin/img/avatar.png"
                    /></a>
                    <div>
                      <h4 class="sender-name">admin</h4>
                    </div>
                  </div>
                </div>

                <p class="post-text">كرتون كسلان- مخلوق الكهف ج2</p>
                <iframe
                  width="994"
                  height="559"
                  class="post-img"
                  src="https://www.youtube.com/embed/BPr9DbiRFxE"
                  title="كرتون كسلان- مخلوق الكهف ج2- قناة ماجد Majid Kids TV"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <div class="facebook-posts__post">
                <div class="profile">
                  <div class="profile-information">
                    <a href="/password.html"><img
                      class="profile-img"
                      src="https://vcap.vn/public/admin/img/avatar.png"
                    /></a>
                    <div>
                      <h4 class="sender-name">admin</h4>
                    </div>
                  </div>
                </div>

                <p class="post-text">مسلسل منصور | البحث عن غول الجليد</p>
                <iframe
                  class="post-img"
                  width="994"
                  height="559"
                  src="https://www.youtube.com/embed/TSKSqwezec4"
                  title="S2 E7 مسلسل منصور | البحث عن غول الجليد | Mansour Cartoon | Yeti Hunters"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <div class="facebook-posts__post">
                <div class="profile">
                  <div class="profile-information">
                    <a href="/password.html"><img
                      class="profile-img"
                      src="https://vcap.vn/public/admin/img/avatar.png"
                    /></a>
                    <div>
                      <h4 class="sender-name">admin</h4>
                    </div>
                  </div>
                </div>

                <p class="post-text">كرتون أمونة - الكذب ج1</p>
                <iframe
                  class="post-img"
                  width="994"
                  height="559"
                  src="https://www.youtube.com/embed/RxT6EF7GaVw"
                  title="كرتون أمونة - الكذب ج1 - قناة ماجد  Majid Kids TV"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <div class="facebook-posts__post">
                <div class="profile">
                  <div class="profile-information">
                    <a href="/password.html"><img
                      class="profile-img"
                      src="https://vcap.vn/public/admin/img/avatar.png"
                    /></a>
                    <div>
                      <h4 class="sender-name">admin</h4>
                    </div>
                  </div>
                </div>

                <p class="post-text">امونة المزيونة سلحفاتي</p>
                <iframe
                  class="post-img"
                  width="994"
                  height="559"
                  src="https://www.youtube.com/embed/dMu0IaaL-tA"
                  title="امونة المزيونة    سلحفاتي"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <div class="facebook-posts__post">
                <div class="profile">
                  <div class="profile-information">
                    <a href="/password.html"><img
                      class="profile-img"
                      src="https://vcap.vn/public/admin/img/avatar.png"
                    /></a>
                    <div>
                      <h4 class="sender-name">admin</h4>
                    </div>
                  </div>
                </div>

                <p class="post-text">
                  كرتون اطفال: مسلسل مغامرات الشاب حمدون الحلقة 7
                </p>
                <iframe
                  width="994"
                  height="559"
                  class="post-img"
                  src="https://www.youtube.com/embed/LCOTJ0VaxBY"
                  title="كرتون اطفال: مسلسل مغامرات الشاب حمدون الحلقة 7"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <div class="facebook-posts__post">
                <div class="profile">
                  <div class="profile-information">
                    <a href="/password.html"><img
                      class="profile-img"
                      src="https://vcap.vn/public/admin/img/avatar.png"
                    /></a>
                    <div>
                      <h4 class="sender-name">admin</h4>
                    </div>
                  </div>
                </div>

                <p class="post-text">النقيب خلفان ملخص حلقه🦂العقرب🦂</p>
                <iframe
                  width="994"
                  height="559"
                  src="https://www.youtube.com/embed/mU3MtghdFTc"
                  title="النقيب خلفان ملخص حلقه🦂العقرب🦂"
                  class="post-img"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <div class="facebook-posts__post">
                <div class="profile">
                  <div class="profile-information">
                    <a href="/password.html"><img
                      class="profile-img"
                      src="https://vcap.vn/public/admin/img/avatar.png"
                    /></a>
                    <div>
                      <h4 class="sender-name">admin</h4>
                    </div>
                  </div>
                </div>

                <p class="post-text">مغامرات منصور | حلقات منصور وعبيد</p>
                <iframe
                  width="994"
                  height="559"
                  class="post-img"
                  src="https://www.youtube.com/embed/xL-auwbp71g"
                  title="مغامرات منصور | حلقات منصور وعبيد l | Mansour&#39;s Adventures | Mansour &amp; Obaid"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <div class="facebook-posts__post">
                <div class="profile">
                  <div class="profile-information">
                    <a href="/password.html"><img
                      class="profile-img"
                      src="https://vcap.vn/public/admin/img/avatar.png"
                    /></a>
                    <div>
                      <h4 class="sender-name">admin</h4>
                    </div>
                  </div>
                </div>

                <p class="post-text">كرتون كسلان: كسلان والبولينغ</p>
                <iframe
                  width="994"
                  height="559"
                  class="post-img"
                  src="https://www.youtube.com/embed/8ymoLHoFn_s"
                  title="كرتون كسلان: كسلان والبولينغ | رسوم متحركة للأطفال"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <div class="facebook-posts__post">
                <div class="profile">
                  <div class="profile-information">
                    <a href="/password.html"><img
                      class="profile-img"
                      src="https://vcap.vn/public/admin/img/avatar.png"
                    /></a>
                    <div>
                      <h4 class="sender-name">admin</h4>
                    </div>
                  </div>
                </div>

                <p class="post-text">النقيب خلفان ٣ - الحلقة ١ - لغز الحفل</p>
                <iframe
                  width="994"
                  height="559"
                  src="https://www.youtube.com/embed/lTlLKs3mEtA"
                  title="النقيب خلفان ٣ - الحلقة ١ - لغز الحفل - مدبلج فصحى 1080p (حصرياً)"
                  class="post-img"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
`;
  }
  if (selectValue == "gameTrailer") {
    postsDiv.innerHTML = ``;
    postsDiv.innerHTML = `
    <div class="facebook-posts__post">
                <div class="profile">
                  <div class="profile-information">
                    <a href="/password.html"><img
                      class="profile-img"
                      src="https://vcap.vn/public/admin/img/avatar.png"
                    /></a>
                    <div>
                      <h4 class="sender-name">admin</h4>
                    </div>
                  </div>
                </div>

                <p class="post-text">Dragon Ball Z: Kakarot - Opening Movie Trailer |PS4</p>
                <iframe width="994" 
                height="559" 
                class="post-img"
                src="https://www.youtube.com/embed/rk-wIgg9fNk" 
                title="Dragon Ball Z: Kakarot - Opening Movie Trailer |PS4" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen
                >
            </iframe>
              </div>

              <div class="facebook-posts__post">
                <div class="profile">
                  <div class="profile-information">
                    <a href="/password.html"><img
                      class="profile-img"
                      src="https://vcap.vn/public/admin/img/avatar.png"
                    /></a>
                    <div>
                      <h4 class="sender-name">admin</h4>
                    </div>
                  </div>
                </div>

                <p class="post-text">Dragon Ball FighterZ - Launch Trailer | PS4</p>
                <iframe width="994" height="559" class="post-img" src="https://www.youtube.com/embed/LwdLKPumEaU" title="Dragon Ball FighterZ - Launch Trailer | PS4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>

              <div class="facebook-posts__post">
                <div class="profile">
                  <div class="profile-information">
                    <a href="/password.html"><img
                      class="profile-img"
                      src="https://vcap.vn/public/admin/img/avatar.png"
                    /></a>
                    <div>
                      <h4 class="sender-name">admin</h4>
                    </div>
                  </div>
                </div>

                <p class="post-text">
                    Launch Trailer - Dragon Ball XENOVERSE 2 | PS4, X1, Steam

                </p>
                <iframe width="994" height="559" class="post-img" src="https://www.youtube.com/embed/JnUbg-9v_bE" title="Launch Trailer - Dragon Ball XENOVERSE 2 | PS4, X1, Steam" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>

              <div class="facebook-posts__post">
                <div class="profile">
                  <div class="profile-information">
                    <a href="/password.html"><img
                      class="profile-img"
                      src="https://vcap.vn/public/admin/img/avatar.png"
                    /></a>
                    <div>
                      <h4 class="sender-name">admin</h4>
                    </div>
                  </div>
                </div>

                <p class="post-text">Gameplay Reveal Trailer | Call of Duty: Modern Warfare III</p>
                <iframe width="994" height="559" class="post-img" src="https://www.youtube.com/embed/mHDEDDrGYvo" title="Gameplay Reveal Trailer | Call of Duty: Modern Warfare III" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>

              <div class="facebook-posts__post">
                <div class="profile">
                  <div class="profile-information">
                    <a href="/password.html"><img
                      class="profile-img"
                      src="https://vcap.vn/public/admin/img/avatar.png"
                    /></a>
                    <div>
                      <h4 class="sender-name">admin</h4>
                    </div>
                  </div>
                </div>

                <p class="post-text">SpongeBob SquarePants: The Cosmic Shake - Release Trailer | PS4 Games</p>
                <iframe width="994" height="559" class="post-img" src="https://www.youtube.com/embed/3vqy9NmiWAE" title="SpongeBob SquarePants: The Cosmic Shake - Release Trailer | PS4 Games" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>

              <div class="facebook-posts__post">
                <div class="profile">
                  <div class="profile-information">
                    <a href="/password.html"><img
                      class="profile-img"
                      src="https://vcap.vn/public/admin/img/avatar.png"
                    /></a>
                    <div>
                      <h4 class="sender-name">admin</h4>
                    </div>
                  </div>
                </div>

                <p class="post-text">Poppy Playtime: Chapter 3 - Teaser Trailer</p>
                <iframe width="994" height="559" class="post-img" src="https://www.youtube.com/embed/eQ35V-wxHqY" title="Poppy Playtime: Chapter 3 - Teaser Trailer #2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
    
    
    `;
  }
});
