import { Logo } from "@/components/logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-footer-line bg-footer">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-start gap-3 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <Logo size="footer" />
        <p className="text-xs text-copyright">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}
