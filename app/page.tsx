import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12 md:py-24">
      <section className="flex flex-col items-start gap-6 md:w-2/3">
        <div className="rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
          Disponível para novos projetos
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl dark:text-white">
          Criando sites e sistemas{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
            sem igual.
          </span>
        </h1>
        <p className="max-w-xl text-lg text-slate-600 dark:text-slate-400">
          Olá, sou Eduardo Amorim Pereira. Desenvolvedor web focado em construir interfaces modernas, acessíveis e de alta performance. Sem lixo digital.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row pt-4">
          <Link 
            href="/contato" 
            className="rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-3 text-center text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg hover:brightness-110"
          >
            Iniciar um projeto
          </Link>
          <Link 
            href="/projetos" 
            className="rounded-lg border border-slate-300 px-6 py-3 text-center text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            Ver portfólio
          </Link>
        </div>
      </section>

      <section className="mt-24 grid gap-8 border-t border-slate-200 pt-12 md:grid-cols-3 dark:border-slate-800">
        <div>
          <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">Desenvolvimento Front-end</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">Interfaces responsivas e acessíveis construídas com React, Next.js e Tailwind CSS.</p>
        </div>
        <div>
          <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">Sistemas Web</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">Aplicações robustas e escaláveis com foco em performance e experiência do usuário.</p>
        </div>
        <div>
          <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">Otimização</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">Auditoria de código, SEO técnico e melhoria contínua de Core Web Vitals.</p>
        </div>
      </section>
    </div>
  );
}
