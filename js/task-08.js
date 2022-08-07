const form = document.querySelector('.login-form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const {
    target: {
      elements: { email, password },
    },
  } = event;

  if (!email.value || !password.value) {
    alert('Все поля должны быть заполнены!!!');
    return;
  }

  console.log({
    [email.name]: email.value,
    [password.name]: password.value,
  });

  form.reset();
});
