import { Logo } from "@/components/logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-base-300 bg-footer">
      <div className="footer footer-vertical mx-auto w-full max-w-7xl px-4 py-10 sm:footer-horizontal sm:items-center sm:justify-between sm:px-6">
        <Logo size="footer" />
        <p className="text-xs text-copyright">
          © {new Date().getFullYear()} FitLog — Workout Library. Train hard, log
          honest.
        </p>
      </div>
    </footer>
  );
}
