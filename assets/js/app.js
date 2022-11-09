//FIRST CHALLENGE

const circleImage = document.querySelector("#circleImg");

circleImage.addEventListener("click", () => {
  circleImage.classList.toggle("border-red");
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

//THIRD CHALLENGE
const password1 = "911";
const password2 = "714";
const firstDigit = document.querySelector("#firstDigit");
const secondDigit = document.querySelector("#secondDigit");
const thirdDigit = document.querySelector("#thirdDigit");
const btnPassword = document.querySelector("#buttonPassword");
const passwordChecked = document.querySelector("#passwordChecked");

btnPassword.addEventListener("click", () => {
  const passwordEntered = firstDigit.value + secondDigit.value + thirdDigit.value;
  if (passwordEntered === password1) {
    passwordChecked.textContent = "Password 1 Correct";
  } else if (passwordEntered === password2) {
    passwordChecked.textContent = "Password 2 Correct";
  } else {
    passwordChecked.textContent = "The password is incorrect";
  }
});
