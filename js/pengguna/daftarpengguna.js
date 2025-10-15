document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registerForm");
  const namaInput = document.getElementById("nama");
  const emailInput = document.getElementById("email");
  const nohpInput = document.getElementById("nohp");
  const passwordInput = document.getElementById("password");
  const ulangiPasswordInput = document.getElementById("ulangipassword");

  const errorMsg = document.getElementById("errorMsg");
  const notifSuccess = document.getElementById("notifSuccess");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nama = namaInput.value.trim();
    const email = emailInput.value.trim();
    const nohp = nohpInput.value.trim();
    const password = passwordInput.value.trim();
    const ulangiPassword = ulangiPasswordInput.value.trim();

    // Reset pesan
    errorMsg.style.display = "none";
    notifSuccess.style.display = "none";
    errorMsg.textContent = "";
    notifSuccess.textContent = "";

    // Validasi dasar
    if (!nama || !email || !nohp || !password || !ulangiPassword) {
      errorMsg.textContent = "Semua field wajib diisi!";
      errorMsg.style.display = "block";
      return;
    }

    // Validasi email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      errorMsg.textContent = "Format email tidak valid!";
      errorMsg.style.display = "block";
      return;
    }

    // Validasi nomor HP hanya angka
    const nohpPattern = /^[0-9]+$/;
    if (!nohpPattern.test(nohp)) {
      errorMsg.textContent = "Nomor HP harus berupa angka!";
      errorMsg.style.display = "block";
      return;
    }

    if (password.length < 5) {
      errorMsg.textContent = "Password minimal 5 karakter!";
      errorMsg.style.display = "block";
      return;
    }

    // Validasi kombinasi password
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
    if (!passwordPattern.test(password)) {
      errorMsg.textContent =
        "Password harus mengandung huruf besar, huruf kecil, dan angka!";
      errorMsg.style.display = "block";
      return;
    }

    if (password !== ulangiPassword) {
      errorMsg.textContent = "Password dan Ulangi Password tidak cocok!";
      errorMsg.style.display = "block";
      return;
    }

    // Simpan data user di localStorage
    const userData = { nama, email, nohp, password };
    localStorage.setItem("registeredUser", JSON.stringify(userData));

    // Tampilkan notif sukses
    notifSuccess.textContent = "✅ Pendaftaran berhasil! Silakan login.";
    notifSuccess.style.display = "block";

    // Redirect setelah 2 detik
    setTimeout(() => {
      window.location.href = "loginpengguna.html";
    }, 2000);
  });
});
