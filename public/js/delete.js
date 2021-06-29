const deleteHandler = async () => {
    const response = await fetch("/api/users/delete", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
    });
    if(response.ok){
        document.location.delete();
    }
    return
};

document
    .querySelector("#deleteCharacter")
    .addEventListener("click", deleteHandler);