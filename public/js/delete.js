const deleteHandler = async (e) => {

  const element = e.target;
  if (element.matches("button")) {
    const id = element.dataset.id;
    console.log(id);
    // const response = await fetch(`/${id}`, {
    //   method: "DELETE",
    //   headers: { "Content-Type": "application/json" },
    // });
  
    // if (response.ok) {
    //   return location.reload();
    // }
  }
};

document
  .getElementById("deleteCharacter")
  .addEventListener("click", deleteHandler);