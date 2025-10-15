document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const rememberMe = document.getElementById("rememberMe");
  const errorMsg = document.getElementById("errorMsg");

  // Tambahkan elemen notif sukses
  let successMsg = document.createElement("p");
  successMsg.id = "successMsg";
  successMsg.style.color = "#28a745"; // hijau
  successMsg.style.fontSize = "14px";
  successMsg.style.textAlign = "center";
  successMsg.style.marginTop = "10px";
  successMsg.style.display = "none";
  form.appendChild(successMsg);

  // Dummy akun
  const validEmail = "user@gmail.com";
  const validPassword = "User123!";

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // reset pesan
    errorMsg.style.display = "none";
    errorMsg.textContent = "";
    successMsg.style.display = "none";
    successMsg.textContent = "";

    if (!email || !password) {
      errorMsg.textContent = "E-mail dan password wajib diisi!";
      errorMsg.style.display = "block";
      return;
    }

    if (email === validEmail && password === validPassword) {
      if (rememberMe.checked) {
        localStorage.setItem("userEmail", email);
      } else {
        localStorage.removeItem("userEmail");
      }

      // tampilkan notif sukses
      successMsg.textContent = "✅ Login berhasil! Mengarahkan ke dashboard...";
      successMsg.style.display = "block";

      // tunggu 1,5 detik lalu redirect
      setTimeout(() => {
        window.location.href = "../../kostkita/dashboard2/dashboard.html";
      }, 1500);
    } else {
      errorMsg.textContent = "Email atau password salah!";
      errorMsg.style.display = "block";
    }
  });

  const savedEmail = localStorage.getItem("userEmail");
  if (savedEmail) {
    emailInput.value = savedEmail;
    rememberMe.checked = true;
  }
});
