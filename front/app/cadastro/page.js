"use client";

export default function CadastroPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-green-600">
      
      <div className="flex flex-col gap-3 p-6 bg-white rounded shadow w-80 border border-green-700">
        <h1 className="text-2xl font-bold text-center text-green-700">
          Cadastro
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
        />

        <input
          type="password"
          placeholder="Senha"
          className="border p-2 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
        />

        <input
          type="password"
          placeholder="Confirmar Senha"
          className="border p-2 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
        />

        <button className="bg-green-700 text-white p-2 rounded hover:bg-green-800 transition">
          Cadastrar
        </button>
      </div>

    </main>
  );
}