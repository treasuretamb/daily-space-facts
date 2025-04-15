const darkModeToggle = document.getElementById('darkModeToggle');

darkModeToggle.addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');
  // Optionally, save the theme choice to localStorage.
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

// Check localStorage on load.
document.addEventListener('DOMContentLoaded', function () {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
  }
});
