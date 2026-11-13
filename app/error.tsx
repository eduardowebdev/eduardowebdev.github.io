"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-6 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-100 dark:bg-red-500/10">
        <svg className="h-10 w-10 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      </div>
      
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Algo deu errado!
        </h2>
        <p className="max-w-md text-slate-600 dark:text-slate-400">
          Ocorreu um erro inesperado ao carregar esta página. Por favor, tente novamente.
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          onClick={() => reset()}
          className="rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg hover:brightness-110"
        >
          Tentar novamente
        </button>
        <Link
          href="/"
          className="rounded-lg border border-slate-300 px-6 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
        >
          Voltar ao início
        </Link>
      </div>
    </div>
  );
}
