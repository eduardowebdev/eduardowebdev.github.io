export default function Sobre() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12 md:py-24">
      <h1 className="mb-8 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
        Sobre mim
      </h1>
      
      <div className="grid gap-12 md:grid-cols-2">
        <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400">
          <p>
            Sou um desenvolvedor apaixonado por transformar ideias complexas em interfaces simples e funcionais. Minha jornada na programação começou com a curiosidade de entender como as coisas funcionam na web, e desde então não parei mais.
          </p>
          <p>
            Acredito que um bom software não é apenas aquele que funciona, mas aquele que proporciona uma excelente experiência para quem o usa. Por isso, mantenho um foco rigoroso em detalhes, acessibilidade e performance.
          </p>
          <p>
            Quando não estou codando, você provavelmente me encontrará explorando novas tecnologias, contribuindo para projetos open-source ou tomando um bom café.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 className="mb-6 text-xl font-semibold text-slate-900 dark:text-white">Minha Stack</h2>
          <div className="flex flex-wrap gap-2">
            {["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Node.js", "Git", "Python", "Docker", "C#"].map((tech) => (
              <span 
                key={tech} 
                className="rounded-md bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
