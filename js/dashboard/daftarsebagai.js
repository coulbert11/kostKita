function goToLogin() {
  const role = document.querySelector('input[name="role"]:checked').value;

  if (role === "pengguna") {
    window.location.href = "../../kostkita/pengguna/loginpengguna.html";
  } else if (role === "pemilik") {
    window.location.href = "../../kostkita/pemilik/loginpemilik.html";
  }

  return false; // cegah form submit default
}
