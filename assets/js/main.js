document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.getElementById('dark-mode-toggle');
  toggleButton.addEventListener('click', function() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
  });
});

