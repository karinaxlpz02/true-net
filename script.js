const stage = document.querySelector('.visual-stage');

if (stage && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  stage.addEventListener('pointermove', ({ clientX, clientY }) => {
    const { left, top, width, height } = stage.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    stage.style.transform = `rotate(${x * 4}deg) translate(${x * 8}px, ${y * 8}px)`;
  });

  stage.addEventListener('pointerleave', () => {
    stage.style.transform = '';
  });
}
