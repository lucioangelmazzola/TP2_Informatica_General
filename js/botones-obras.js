document.addEventListener('DOMContentLoaded', () => {
  const sound = document.getElementById('clickSound');
  const buttons = document.querySelectorAll('.btn-sonido');

  let audioHabilitado = false;

  // Se activa el sonido apenas el usuario mueve el mouse o hace scroll
  const habilitarAudio = () => {
    if (!audioHabilitado) {
      audioHabilitado = true;
      console.log('Audio habilitado ✅');
    }
  };

  window.addEventListener('mousemove', habilitarAudio);
  window.addEventListener('click', habilitarAudio);
  window.addEventListener('scroll', habilitarAudio);

  // Reproduce el sonido al pasar el mouse por los botones
  buttons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      if (audioHabilitado) {
        sound.currentTime = 0;
        sound.play().catch(err => console.log('Error de audio:', err));
      }
    });
  });
});
