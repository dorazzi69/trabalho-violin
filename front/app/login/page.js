"use client";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-200">
      
      <div className="flex flex-col gap-3 p-6 bg-white rounded shadow w-80">
        <h1 className="text-2xl font-bold text-center">Login</h1>

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

        <button className="bg-blue-500 text-white p-2 rounded">
          Entrar
        </button>
      </div>

    </main>
  );
}