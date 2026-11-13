export default function Contato() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12 md:py-24">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Vamos conversar
          </h1>
          <p className="mb-8 text-lg text-slate-600 dark:text-slate-400">
            Tem um projeto em mente ou quer apenas trocar uma ideia? Preencha o formulário ao lado ou me envie um e-mail diretamente.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
              <svg className="h-5 w-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>eduardowebdev@outlook.com.br</span>
            </div>
            <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
              <svg className="h-5 w-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Brasil</span>
            </div>
          </div>
        </div>

        <form className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div>
            <label htmlFor="nome" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">Nome</label>
            <input 
              type="text" 
              id="nome" 
              className="w-full rounded-lg border border-slate-300 bg-transparent px-4 py-2.5 text-slate-900 outline-none transition-colors focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 dark:border-slate-700 dark:text-white dark:focus:border-indigo-400 dark:focus:ring-indigo-400" 
              placeholder="Seu nome" 
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">E-mail</label>
            <input 
              type="email" 
              id="email" 
              className="w-full rounded-lg border border-slate-300 bg-transparent px-4 py-2.5 text-slate-900 outline-none transition-colors focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 dark:border-slate-700 dark:text-white dark:focus:border-indigo-400 dark:focus:ring-indigo-400" 
              placeholder="seu@email.com" 
            />
          </div>
          <div>
            <label htmlFor="mensagem" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">Mensagem</label>
            <textarea 
              id="mensagem" 
              rows={4} 
              className="w-full resize-none rounded-lg border border-slate-300 bg-transparent px-4 py-2.5 text-slate-900 outline-none transition-colors focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 dark:border-slate-700 dark:text-white dark:focus:border-indigo-400 dark:focus:ring-indigo-400" 
              placeholder="Como posso ajudar?"
            ></textarea>
          </div>
          <button 
            type="button" 
            className="w-full rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg hover:brightness-110"
          >
            Enviar mensagem
          </button>
        </form>
      </div>
    </div>
  );
}
