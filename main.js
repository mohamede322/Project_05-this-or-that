let thisAPI = "https://dog.ceo/api/breeds/image/random";
let thatAPI = "https://dog.ceo/api/breeds/image/random";
let thisDog = document.querySelector(".this");
let thatDog = document.querySelector(".that");
let btnS = document.querySelectorAll("button");

btnS.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.className === "this") {
      getThisRandomDog();
    } else if (btn.className === "that") {
      getThatRandomDog();
    }
  });
});

async function getThisRandomDog() {
  let thisRes = await fetch(thisAPI);
  let thisData = await thisRes.json();

  thisDog.src = thisData.message;
}
async function getThatRandomDog() {
  let thatRes = await fetch(thatAPI);
  let thatData = await thatRes.json();

  thatDog.src = thatData.message;
}
getThisRandomDog();
getThatRandomDog();
