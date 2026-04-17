'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const cadastrar = () => {
    alert("Cadastro realizado (simulação)");
    router.push("/app/login");
  };

  return (
    <>
      <h1>Cadastro de Usuário</h1>

      <div style={{ border: '1px solid black', padding: '10px' }}>
        <input 
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ display: 'block', marginBottom: '10px' }}
        />
        <input 
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ display: 'block', marginBottom: '10px' }}
        />
        <input 
          type="password" 
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ display: 'block', marginBottom: '10px' }}
        />
        <button onClick={cadastrar}>Cadastrar</button>
      </div>

      <h2> Jogadores em Destaque</h2>

      <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
        <h3>Neymar Jr</h3>
        <p>Posição: Atacante</p>
        <p>Nota: 9.0</p>
      </div>

      <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
        <h3>Lionel Messi</h3>
        <p>Posição: Atacante</p>
        <p>Nota: 9.5</p>
      </div>

      <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
        <h3>Cristiano Ronaldo</h3>
        <p>Posição: Atacante</p>
        <p>Nota: 9.3</p>
      </div>
    </>
  );
}
function cadastrar() {
  alert("Cadastro realizado (simulação)");
  window.location.href = "/app/login";
}