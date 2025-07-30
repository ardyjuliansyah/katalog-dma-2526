const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.querySelector(".close");
console.log("Video kolase background aktif");
document.querySelectorAll(".gallery img").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
  });
});

closeBtn.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("bgAudio");

  // Putar audio saat user pertama kali klik
  document.body.addEventListener("click", () => {
    audio.play().catch((e) => console.log("Audio gagal diputar:", e));
  }, { once: true });
});

window.onscroll = function() {
  document.getElementById("backToTop").style.display =
    (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200)
      ? "block" : "none";
};
document.getElementById("backToTop").onclick = function() {
  window.scrollTo({top: 0, behavior: 'smooth'});
};