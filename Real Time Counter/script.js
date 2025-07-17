const textArea = document.getElementById("text-input");
const charCount = document.getElementById("char-count");
const maxLength = 50;

textArea.addEventListener("input", function () {
  // Enforce max length manually
  //by using this way, prevents using removeEventListener to avoid complex code, improve clear code
  //it let user type and then trimp
  if (textArea.value.length > maxLength) {
    textArea.value = textArea.value.slice(0, maxLength);
  }

  const currentLength = textArea.value.length;
  charCount.textContent = `Character Count: ${currentLength}/50`;

  if (currentLength === maxLength) {
    charCount.classList.add("redBorder");
  } else {

    charCount.classList.remove("redBorder");
  }
});
