export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--border)] py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="font-mono text-sm text-[var(--muted-fg)]">
          sy<span className="text-[#3b82f6]">.</span>dev
        </p>
        <p className="text-sm text-[#404040]">
          © {year} Said Yanak. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/saidyanak"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[var(--muted-fg)] transition-colors hover:text-white"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/saidyanak/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[var(--muted-fg)] transition-colors hover:text-white"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
