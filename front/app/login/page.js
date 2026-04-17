"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const entrar = () => {
    console.log({ email, senha });

  };

  return (
    <div>
      <h1>Craque ou Bagre</h1>

      <div
        style={{
          border: "1px solid black",
          padding: "10px",
          margin: "10px",
        }}
      >
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br /><br />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        /><br /><br />

        <button onClick={entrar}>Entrar</button>
      </div>
    </div>
  );
}
function entrar() {
  alert("Login realizado (simulação)");
  window.location.href = "/app";
}