const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;
  const userData = {
    email: email.value.trim(),
    password: password.value.trim(),
  };

  if (!userData.email || !userData.password) {
    return alert('All form fields must be filled in');
  }

  console.log(userData);
  form.reset();
});
