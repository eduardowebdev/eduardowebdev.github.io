import Link from "next/link";

type Projeto = {
  titulo: string;
  descricao: string;
  tags: string[];
};

const projetos: Projeto[] = [
  {
    titulo: "Ainda não tenho nenhum projeto :(",
    descricao: "Sem descrição",
    tags: ["sem", "tags"],
  },
];

export default function Projetos() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12 md:py-24">
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
        Projetos
      </h1>
      <p className="mb-12 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
        Uma seleção dos meus trabalhos mais recentes em desenvolvimento web.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {projetos.map((projeto: Projeto, index: number) => (
          <div 
            key={index} 
            className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-indigo-200 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-indigo-500/30"
          >
            <div>
              <h2 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {projeto.titulo}
              </h2>
              <p className="mb-6 text-slate-600 dark:text-slate-400">
                {projeto.descricao}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {projeto.tags.map((tag: string) => (
                <span key={tag} className="text-xs font-semibold tracking-wider text-indigo-500 uppercase dark:text-indigo-400">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
