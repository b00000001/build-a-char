const createCharacterHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#CharaName").value.trim();
  const race = document.querySelector("#CharaRace").value.trim();
  const gender = document.querySelector("#CharaGender").value.trim();

  if (name && race && gender) {
    const response = await fetch("/", {
      method: "POST",
      body: JSON.stringify({ name, race, gender }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/list");
    } else {
      alert("Your Character was not created!");
    }
  };

  document
    .querySelector("#createCharacter")
    .addEventListener("click", createCharacterHandler);