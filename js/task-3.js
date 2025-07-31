const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', (event) => {
  const trimmed = event.currentTarget.value.trim();
  output.textContent = trimmed !== '' ? trimmed : 'Anonymous';
});
