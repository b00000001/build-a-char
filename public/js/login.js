const loginHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector("#email").value.trim().toLowerCase();
  const password = document.querySelector("#password").value.trim();

  if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/list");
    } else {
      alert("Your email or password was incorrect, please try again.");
    }
  }
};

const signupHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#signUpName").value.trim();
  const email = document.querySelector("#signUpEmail").value.trim().toLowerCase();
  const password = document.querySelector("#signUpPassword").value.trim();

  if (name && email && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/list");
    } else {
      alert("Failed to sign up, please try again.");
    }
  }
};

document
.querySelector("#loginForm")
.addEventListener("click", loginHandler);

document
.querySelector("#signupForm")
.addEventListener("click", signupHandler);