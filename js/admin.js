const frm = document.querySelector("form")

function togglePassword() {
  const input = document.getElementById("senha");
  const icon = document.getElementById("toggleIcon");

/**
 * Alterna a visibilidade do campo de senha
 * Primeiro verifica se o input está no tipo "password"
 * Caso esteja oculto, altera para "text" permitindo visualizar a senha
 * Caso já esteja visível, retorna para "password" ocultando a senha
 * Também altera o ícone para indicar o estado atual (🔓 ou 🔒)
 */
  if (input.type === "password") {
    input.type = "text";
    icon.textContent = "🔓";
  } else {
    input.type = "password";
    icon.textContent = "🔒";
  }
}

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const senha = document.getElementById("senha").value;

    if (senha.length < 4) {
        alert("Senha precisa ter 4 dígitos")
        return;
    }

    if (senha === "9878") {
        window.location.href = "agendageral.html"
    } else {
        alert("Senha incorreta")
    }
})