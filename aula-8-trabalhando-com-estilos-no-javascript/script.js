function useLightTheme() {
  document.body.classList.add('is-light');
  document.body.classList.remove('is-dark');
}

function useDarkTheme() {
  document.body.classList.add('is-dark');
  document.body.classList.remove('is-light');
}

function switchTheme() {
  document.body.classList.toggle('is-light');
  document.body.classList.toggle('is-dark');
}

document.getElementById('lightBtn').addEventListener('click', useLightTheme);
document.getElementById('darkBtn').addEventListener('click', useDarkTheme);
document.getElementById('switchBtn').addEventListener('click', switchTheme);



