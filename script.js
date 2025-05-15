
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
  cursor.style.top = `${e.clientY}px`;
  cursor.style.left = `${e.clientX}px`;
});

const galleryImgs = document.querySelectorAll('.gallery-img');
document.addEventListener('mousemove', (e) => {
  const { clientX, clientY } = e;
  galleryImgs.forEach(img => {
    const speed = 0.05;
    const x = (window.innerWidth / 2 - clientX) * speed;
    const y = (window.innerHeight / 2 - clientY) * speed;
    img.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
  });
});
