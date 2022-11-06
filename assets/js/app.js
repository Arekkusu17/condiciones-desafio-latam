//FIRST CHALLENGE

const circleImage = document.querySelector("#circleImg");

circleImage.addEventListener("click", () => {
  circleImage.classList.toggle("border-pink");
});

//SECOND CHALLENGE

const qtyFirstSticker = document.querySelector("#qtyFirstSticker");
const qtySecondSticker = document.querySelector("#qtySecondSticker");
const qtyThirdSticker = document.querySelector("#qtyThirdSticker");
const qtyTotalStickers = document.querySelector("#qtyTotalStickers");
const tooManyStickers = document.querySelector("#tooManyStickers");
const btnStickers = document.querySelector("#buttonStickers");

btnStickers.addEventListener("click", () => {
  const firstInput = parseInt(qtyFirstSticker.value);
  const secondInput = parseInt(qtySecondSticker.value);
  const thirdInput = parseInt(qtyThirdSticker.value);
  const inputSum = firstInput + secondInput + thirdInput;

  if (inputSum <= 10) {
    qtyTotalStickers.textContent = `Total of stickers selected: ${inputSum}`;
  } else {
    qtyTotalStickers.textContent = "You have too many stickers";
  }
});
