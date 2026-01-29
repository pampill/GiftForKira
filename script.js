const lid = document.getElementById("lid");
const box = document.getElementById("box");
const content = document.getElementById("content");
const btn = document.getElementById("downloadBtn");
const status = document.getElementById("status");

// тап по крышке
lid.addEventListener("click", () => {
  lid.style.transform = "rotateX(120deg) translateY(-10px)";
  content.style.display = "block";
});

btn.addEventListener("click", () => {
  // пока заглушка
  const link = document.createElement("a");
  link.href = "IMG_0182.JPEG"; // сюда потом вставишь реальный PDF
  link.download = "IMG_0182.JPEG";
  link.click();

  localStorage.setItem("giftDownloaded", "true");
  btn.disabled = true;
  status.textContent = "💛 Сертификат сохранён";
});
