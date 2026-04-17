export default function HomePage() {
  const irLogin = () => {
    window.location.href = "/login";
  };

  const irCadastro = () => {
    window.location.href = "/cadastro";
  };

  return (
    <div>
      <h1> Sistema de Avaliação de Jogadores</h1>

      <div
        style={{
          border: "1px solid black",
          padding: "10px",
          margin: "10px",
        }}
      >
        <h3>Avalie Jogadores</h3>
        <p>Analise desempenho, habilidade e estatísticas dos jogadores.</p>
      </div>

      <div
        style={{
          border: "1px solid black",
          padding: "10px",
          margin: "10px",
        }}
      >
        <h3>Login</h3>
        <button onClick={irLogin}>Entrar</button>
      </div>

      <div
        style={{
          border: "1px solid black",
          padding: "10px",
          margin: "10px",
        }}
      >
        <h3>Cadastro</h3>
        <button onClick={irCadastro}>Cadastrar</button>
      </div>
    </div>
  );
}

function irLogin() {
  window.location.href = "/app/login";
}

function irCadastro() {
  window.location.href = "/app/cadastro";
}