const characterHandler = async () => {
      document.location.replace("/character");
  };

document
  .querySelector("#createCharacter")
  .addEventListener("click", characterHandler);