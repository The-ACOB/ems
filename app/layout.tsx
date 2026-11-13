export default function UnderConstruction() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-amber-950 px-6 text-center text-white">
      <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-amber-300">
        Work In Progress
      </p>

      <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
        Under <span className="text-amber-400">Construction</span>
      </h1>

      <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
        We're building something here. Please check back later.
      </p>

      <div className="mt-10 h-1 w-24 animate-pulse rounded-full bg-amber-500" />

      <footer className="absolute bottom-6 text-sm text-slate-500">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </footer>
    </main>
  );
}
