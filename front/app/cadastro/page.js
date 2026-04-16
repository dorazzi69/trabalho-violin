"use client";

export default function CadastroPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-200">
      
      <div className="flex flex-col gap-3 p-6 bg-white rounded shadow w-80">
        <h1 className="text-2xl font-bold text-center">Cadastro</h1>

        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded"
        />

        <input
          type="password"
          placeholder="Senha"
          className="border p-2 rounded"
        />

        <input
          type="password"
          placeholder="Confirmar Senha"
          className="border p-2 rounded"
        />

        <button className="bg-green-500 text-white p-2 rounded">
          Cadastrar
        </button>
      </div>

    </main>
  );
}