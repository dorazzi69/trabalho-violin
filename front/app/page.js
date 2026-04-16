import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center bg-gray-200">
      
      <h1 className="text-4xl font-bold mb-4">Futebol App</h1>

      <p className="mb-6">
        Aplicação para cadastro e comparação de jogadores.
      </p>

      <div className="flex gap-4">
        <Link href="/login">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Login
          </button>
        </Link>

        <Link href="/cadastro">
          <button className="bg-green-500 text-white px-4 py-2 rounded">
            Cadastro
          </button>
        </Link>
      </div>

    </main>
  );
}