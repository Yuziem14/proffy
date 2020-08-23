const button = document.getElementById('access-list');

button.addEventListener('click', e => {
  const { subject, weekday, time } = button.dataset;
  const query = `?subject=${subject}&weekday=${weekday}&time=${time}`;
  window.location.href = `http://127.0.0.1:5500/study${query}`;
});

setTimeout(() => {
  button.click();
}, 2000);
