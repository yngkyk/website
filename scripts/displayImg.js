const spans = document.querySelectorAll("#bio span");

spans.forEach(span => {
  const imgId = span.dataset.img;
  const img = document.getElementById(imgId);

  span.addEventListener("mouseenter", () => {
    const rect = img.getBoundingClientRect();

    const maxX = window.innerWidth - rect.width*2;
    const maxY = window.innerHeight - rect.height*2;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    img.style.left = `${x}px`;
    img.style.top = `${y}px`;
    img.style.opacity = "60%";
  });

  span.addEventListener("mouseleave", () => {
    img.style.opacity = "0%";
  });
});