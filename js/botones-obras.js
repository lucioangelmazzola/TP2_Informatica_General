// Selecciona los botones y el audio
const footerButtons = document.querySelectorAll('.footer-btn');
const hoverSound = document.getElementById('hoverSound');

footerButtons.forEach(button => {
  // Efecto sonido al pasar el mouse
  button.addEventListener('mouseenter', () => {
    hoverSound.currentTime = 0; // Reinicia el sonido
    hoverSound.play().catch(() => {}); // Evita errores por autoplay bloqueado
  });

  // Redirección al hacer clic
  button.addEventListener('click', () => {
    const link = button.getAttribute('data-link');
    window.location.href = link;
  });
});