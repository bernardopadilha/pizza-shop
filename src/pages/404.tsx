import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-4xl font-bold">Página não encontrada</h1>

      <img src="/404t.svg" alt="Página não encontrada" className="h-52" />

      <p className="text-accent-foreground font-medium mt-4">
        Voltar para o <Link to="/" className="text-sky-500 dark:text-sky-400">Dashboard</Link>
      </p>
    </div>
  )
}