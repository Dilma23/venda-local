function fazerLogin() {
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  if (email === "admin@site.com" && senha === "1234") {
    alert("Login realizado com sucesso!");
  } else {
    alert("Email ou senha incorretos.");
  }
}
