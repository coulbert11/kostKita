document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("resetForm");
  const emailInput = document.getElementById("email");
  const notif = document.getElementById("notif");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // reset notif dulu
    notif.style.display = "none";
    notif.className = "notif";

    if (email === "") {
      showNotif("Email tidak boleh kosong!", "error");
      return;
    }

    if (!emailRegex.test(email)) {
      showNotif("Format email tidak valid!", "error");
      return;
    }

    // Simulasi sukses
    showNotif(
      `Jika email "${email}" terdaftar, link reset password telah dikirim.`,
      "success"
    );

    form.reset();
  });

  function showNotif(message, type) {
    notif.textContent = message;
    notif.classList.add(type);
    notif.style.display = "block";

    // otomatis hilang setelah 4 detik
    setTimeout(() => {
      notif.style.display = "none";
    }, 4000);
  }
});
