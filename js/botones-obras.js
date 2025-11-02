document.addEventListener('DOMContentLoaded', () => {
  const sound = document.getElementById('clickSound');
  const buttons = document.querySelectorAll('.botones-obras');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      sound.currentTime = 0; // reinicia el audio cada vez
      sound.play();
    });
  });
});
