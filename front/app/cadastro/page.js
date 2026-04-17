document.body.innerHTML = `
  <h1> Cadastro de Usuário</h1>

  <div style="border:1px solid black; padding:10px;">
    <input placeholder="Nome"><br><br>
    <input placeholder="Email"><br><br>
    <input type="password" placeholder="Senha"><br><br>

    <button onclick="cadastrar()">Cadastrar</button>
  </div>

  <h2>⭐ Jogadores em Destaque</h2>

  <div style="border:1px solid black; padding:10px; margin:10px;">
    <h3>Neymar Jr</h3>
    <p>Posição: Atacante</p>
    <p>Nota: 9.0</p>
  </div>

  <div style="border:1px solid black; padding:10px; margin:10px;">
    <h3>Lionel Messi</h3>
    <p>Posição: Atacante</p>
    <p>Nota: 9.5</p>
  </div>

  <div style="border:1px solid black; padding:10px; margin:10px;">
    <h3>Cristiano Ronaldo</h3>
    <p>Posição: Atacante</p>
    <p>Nota: 9.3</p>
  </div>
`;

function cadastrar() {
  alert("Cadastro realizado (simulação)");
  window.location.href = "/app/login";
}