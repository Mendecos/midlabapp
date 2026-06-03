"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // validação simples
    if (email === "Midlab" && password === "123456") {
      setError("");

      // salva autenticação
      localStorage.setItem("auth", "true");

      // redireciona
      router.push("/emprestimosForm");
    } else {
      setError("Credenciais inválidas");
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-100 dark:bg-black">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-sm rounded-lg bg-white p-6 shadow-md dark:bg-zinc-900"
      >
        <h1 className="mb-6 text-center text-2xl font-bold text-zinc-800 dark:text-white">
          Login
        </h1>

        {/* Usuário */}
        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-200">
            Usuário
          </label>

          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu usuário"
            className="w-full rounded-md border border-zinc-300 px-3 py-2 outline-none focus:border-blue-500"
            required
          />
        </div>

        {/* Senha */}
        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-200">
            Senha
          </label>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="w-full rounded-md border border-zinc-300 px-3 py-2 outline-none focus:border-blue-500"
            required
          />
        </div>

        {/* Mensagem de erro */}
        {error && <p className="mb-4 text-sm text-red-500">{error}</p>}

        {/* Botão */}
        <button
          type="submit"
          className="w-full rounded-md bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
