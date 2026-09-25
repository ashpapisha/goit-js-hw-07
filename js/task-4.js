const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const data = {};

  formData.forEach((value, key) => {
    data[key] = value.trim();
  });

  if (!data.email || !data.password) {
    alert("All form fields must be filled in");
    return;
  }

  console.log(data);
  event.currentTarget.reset();
});
