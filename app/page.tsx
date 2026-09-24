import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-4 py-12 sm:px-6">
      <Hero />
      <section id="library" className="scroll-mt-8" />
    </div>
  );
}
