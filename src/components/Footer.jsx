export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-8 text-sm text-slate-600 dark:text-slate-400 md:flex-row md:items-center md:justify-between">
        <p>© {year} Your Name. All rights reserved.</p>

        <p className="text-slate-500 dark:text-slate-500">
          Built with React + Vite + Tailwind
        </p>
      </div>
    </footer>
  );
}
