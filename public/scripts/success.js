const button = document.getElementById('access-list');

button.addEventListener('click', e => {
  const { baseUrl, subject, weekday, time } = button.dataset;
  const query = `?subject=${subject}&weekday=${weekday}&time=${time}`;
  window.location.href = `${baseUrl}${query}`;
});

setTimeout(() => {
  button.click();
}, 2000);
