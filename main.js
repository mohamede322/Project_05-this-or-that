let thisAPI = "https://dog.ceo/api/breeds/image/random";
let thatAPI = "https://dog.ceo/api/breeds/image/random";
let thisDog = document.querySelector(".this");
let thatDog = document.querySelector(".that");

let btnS = document.querySelectorAll("button");

btnS.forEach((btn) => {
  btn.addEventListener("click", () => {
    location.reload();
  });
});

async function getRandomDog() {
  let thisRes = await fetch(thisAPI);
  let thisData = await thisRes.json();

  let thatRes = await fetch(thatAPI);
  let thatData = await thatRes.json();

  thisDog.src = thisData.message;
  thatDog.src = thatData.message;
}
getRandomDog();
