document.body.innerHTML = `
  <h1> Sistema de Avaliação de Jogadores</h1>

  <div style="border:1px solid black; padding:10px; margin:10px;">
    <h3 Avalie Jogadores</h3>
    <p>Analise desempenho, habilidade e estatísticas dos jogadores.</p>
  </div>

  <div style="border:1px solid black; padding:10px; margin:10px;">
    <h3> Login</h3>
    <button onclick="irLogin()">Entrar</button>
  </div>

  <div style="border:1px solid black; padding:10px; margin:10px;">
    <h3> Cadastro</h3>
    <button onclick="irCadastro()">Cadastrar</button>
  </div>
`;

function irLogin() {
  window.location.href = "/app/login";
}

function irCadastro() {
  window.location.href = "/app/cadastro";
}