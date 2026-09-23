import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import { Logo } from "@/components/logo";
import { NavLinks } from "@/components/nav-links";
import { PlanBadges } from "@/components/plan-badges";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-oswald",
});

export const metadata: Metadata = {
  title: "FitLog",
  description:
    "FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${oswald.variable} h-full antialiased`}
    >
      <body className={`${inter.className} flex min-h-full flex-col`}>
        <header className="border-b border-line bg-background/95">
          <div className="mx-auto grid h-20 w-full max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-3 px-4 sm:grid-cols-[1fr_auto_1fr] sm:px-6">
            <Logo />
            <NavLinks />
            <PlanBadges />
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
