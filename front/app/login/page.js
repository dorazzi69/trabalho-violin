document.body.innerHTML = `
  <h1> Login do Avaliador</h1>

  <div style="border:1px solid black; padding:10px;">
    <input placeholder="Email"><br><br>
    <input type="password" placeholder="Senha"><br><br>

    <button onclick="entrar()">Entrar</button>
  </div>
`;

function entrar() {
  alert("Login realizado (simulação)");
  window.location.href = "/app";
}