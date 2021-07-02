const createCharacterHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#CharaName").value.trim();
  const race = document.querySelector("#CharaRace").value.trim();
  const gender = document.querySelector("#CharaGender").value.trim();
  const charaClass = document.querySelector("#CharaClass").value;
  console.log(name, race, charaClass);
  if (name && race && gender && charaClass) {
    const response = await fetch("/api/characters", {
      method: "POST",
      body: JSON.stringify({ name, race, gender, charaClass }),
      headers: { "Content-Type": "application/json" }
    });
    if (response.ok) {
      document.location.replace("/list");
    } else {
      alert("Your Character was not created!");
    }
  }
};

document
  .querySelector("#createCharacter")
  .addEventListener("click", createCharacterHandler);
