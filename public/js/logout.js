const logoutHandler = async () => {
    const response = await fetch("/api/users/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
    });

    if(response.ok) {
        document.location.replace("/");
    } else {
        alert("ERROR: you have not been logged out");
    }
};

document
    .querySelector("#logout")
    .addEventListener("click", logoutHandler);