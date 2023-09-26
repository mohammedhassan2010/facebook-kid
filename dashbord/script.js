const images = document.querySelectorAll(".images");
const addLogoDiv = document.querySelector(".add-logo-div");

images.forEach((img) => {
  img.onclick = () => {
    const src = img.src;
    db.collection("test")
      .add({
        testName: src,
      })
      .then(() => {
        alert("logo added");
      })
      .catch((error) => {
        alert(error);
      });
  };
});
addLogoDiv.innerHTML += `

<button
id="myBtn"
class="h-[3rem] bg-blue-600 hover:bg-blue-800 text-white py-[.835rem] px-[.835rem] rounded-md"
>
Add logo
</button>`;
db.collection("test").onSnapshot((doc) => {
  doc.forEach((element) => {
    const item = element.data();
    addLogoDiv.innerHTML += `
    <img src="${item.testName}" class="w-[6rem] h-[6rem] bg-gray-200 rounded-full">

`;
  });
});
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.querySelector("#myBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
