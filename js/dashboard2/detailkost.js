// Ambil elemen foto utama
const mainImg = document.querySelector(".main-img");
// Ambil semua thumbnail
const thumbs = document.querySelectorAll(".thumbs img");

// Event: klik thumbnail → ganti foto utama
thumbs.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    mainImg.src = thumb.src;
    mainImg.alt = thumb.alt;
  });
});

// Event: klik overlay → arahkan ke galeri (atau popup nanti)
const overlayBtn = document.querySelector(".with-overlay .overlay");
if (overlayBtn) {
  overlayBtn.addEventListener("click", () => {
    alert("Fitur galeri segera hadir 😊");
    // contoh kalau mau redirect ke halaman galeri:
    // window.location.href = "galeri.html";
  });
}

// Tombol Hubungi Pemilik (opsional pindahkan logika ke JS)
const btnOwner = document.querySelector(".btn-owner");
if (btnOwner) {
  btnOwner.addEventListener("click", () => {
    window.open("https://wa.me/628123456789", "_blank");
  });
}

// Tombol Sewa
const btnSewa = document.querySelector(".btn-sewa");
if (btnSewa) {
  btnSewa.addEventListener("click", () => {
    window.location.href = "sewa.html";
  });
}
