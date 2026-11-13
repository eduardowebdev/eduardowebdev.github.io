export default function Loading() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
      <div className="relative flex h-16 w-16 items-center justify-center">
        <div className="absolute h-full w-full rounded-full border-4 border-slate-200 dark:border-slate-800" />
        <div className="absolute h-full w-full animate-spin rounded-full border-4 border-transparent border-t-indigo-500 border-r-purple-600" />
      </div>
      <p className="animate-pulse text-sm font-medium text-slate-500 dark:text-slate-400">
        Carregando...
      </p>
    </div>
  );
}
