import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-6 text-center">
      <h1 className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-8xl font-black text-transparent">
        404
      </h1>
      
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Página não encontrada
        </h2>
        <p className="max-w-md text-slate-600 dark:text-slate-400">
          Desculpe, o link que você acessou pode estar quebrado ou a página pode ter sido removida.
        </p>
      </div>

      <Link
        href="/"
        className="rounded-lg bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
      >
        Voltar para o início
      </Link>
    </div>
  );
}
