document.querySelectorAll(".password-toggle").forEach((button) => {
  button.addEventListener("click", () => {
    const input = button.parentElement.querySelector("input");
    const isPassword = input.type === "password";
    input.type = isPassword ? "text" : "password";
    button.setAttribute("aria-label", isPassword ? "Hide password" : "Show password");
    button.innerHTML = `<i class="fa-solid ${isPassword ? "fa-eye-slash" : "fa-eye"}"></i>`;
  });
});

const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!loginForm.checkValidity()) {
      loginForm.reportValidity();
      return;
    }

    const message = document.getElementById("loginMessage");
    message.className = "alert alert-success mt-3 mb-0";
    message.textContent = "Login successful! Redirecting you to the home page...";
    window.setTimeout(() => {
      window.location.href = "index.html";
    }, 1200);
  });
}

const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!signupForm.checkValidity()) {
      signupForm.reportValidity();
      return;
    }

    const message = document.getElementById("signupMessage");
    message.className = "alert alert-success mt-3 mb-0";
    message.textContent = "Your account has been created successfully!";
    window.setTimeout(() => {
      window.location.href = "login.html";
    }, 1200);
  });
}
