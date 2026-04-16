import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/gr-bike-logo.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "GR Bike — 1º Pedal Oficial | 03/05/2026" },
      {
        name: "description",
        content:
          "Participe do primeiro pedal oficial da GR Bike! 25km saindo da Praça Morada do Sol. Café da manhã, sorteio de brindes. Vagas limitadas.",
      },
      { property: "og:title", content: "GR Bike — 1º Pedal Oficial 🚴" },
      {
        property: "og:description",
        content: "03/05/2026 — 25km, café da manhã e sorteio de brindes. Garanta sua vaga!",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
});

const FORM_URL = "https://forms.google.com";

function CTAButton({ label = "QUERO PARTICIPAR" }: { label?: string }) {
  return (
    <a
      href={FORM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full rounded-2xl bg-brand-yellow px-6 py-5 text-center text-xl font-bold tracking-wide text-brand-yellow-foreground shadow-[0_8px_30px_-8px_var(--brand-yellow)] transition-transform active:scale-95 hover:brightness-110"
    >
      {label} 🚴‍♂️
    </a>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
      <main className="mx-auto flex max-w-md flex-col items-center px-6 pt-10 pb-16 text-center">
        {/* Logo */}
        <img
          src={logo}
          alt="GR Bike Shop & Service"
          className="h-44 w-44 rounded-full object-cover drop-shadow-[0_8px_30px_rgba(245,207,47,0.35)]"
        />

        {/* Headline */}
        <h1
          className="mt-8 text-4xl leading-tight tracking-wide text-brand-yellow"
          style={{ fontFamily: "Bebas Neue, sans-serif" }}
        >
          Você está a um passo de pedalar com a GR Bike 🚴‍♂️
        </h1>

        <p className="mt-4 text-lg text-foreground/80">Garanta sua vaga agora.</p>

        {/* Primary CTA */}
        <div className="mt-8 w-full">
          <CTAButton />
        </div>

        <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-brand-yellow/40 bg-brand-yellow/10 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-brand-yellow">
          ⚡ Vagas limitadas
        </div>

        {/* Sobre */}
        <section className="mt-16 w-full">
          <h2
            className="text-3xl tracking-wide text-brand-yellow"
            style={{ fontFamily: "Bebas Neue, sans-serif" }}
          >
            📅 Sobre o evento
          </h2>

          <ul className="mt-6 space-y-4 text-left">
            <li className="rounded-xl border border-foreground/10 bg-foreground/5 p-4">
              <div className="text-sm uppercase tracking-wider text-foreground/60">🗓 Data</div>
              <div className="mt-1 text-lg font-semibold">03/05/2026 (Domingo)</div>
            </li>
            <li className="rounded-xl border border-foreground/10 bg-foreground/5 p-4">
              <div className="text-sm uppercase tracking-wider text-foreground/60">⏰ Horário</div>
              <div className="mt-1 text-lg font-semibold">07h às 08h — café + concentração</div>
            </li>
            <li className="rounded-xl border border-foreground/10 bg-foreground/5 p-4">
              <div className="text-sm uppercase tracking-wider text-foreground/60">📍 Local</div>
              <div className="mt-1 text-lg font-semibold">Praça Morada do Sol</div>
            </li>
          </ul>
        </section>

        {/* Como vai funcionar */}
        <section className="mt-16 w-full">
          <h2
            className="text-3xl tracking-wide text-brand-yellow"
            style={{ fontFamily: "Bebas Neue, sans-serif" }}
          >
            🚴‍♂️ Como vai funcionar
          </h2>

          <ul className="mt-6 space-y-4 text-left text-lg">
            <li className="flex gap-3">
              <span className="text-brand-yellow">•</span>
              <span>Pedal de aproximadamente <strong>25km</strong></span>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-yellow">•</span>
              <span>Final na <strong>GR Bike</strong></span>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-yellow">🍞</span>
              <span>Café da manhã no início e no final</span>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-yellow">🎁</span>
              <span>Sorteio de brindes</span>
            </li>
          </ul>
        </section>

        {/* Destaque */}
        <section className="mt-16 w-full rounded-2xl border-2 border-brand-yellow bg-brand-yellow/10 p-6">
          <div className="text-3xl">🔥</div>
          <p className="mt-3 text-xl font-bold leading-snug text-brand-yellow">
            Primeiro pedal oficial da GR Bike
          </p>
          <p className="mt-2 text-base text-foreground/80">Você não pode ficar de fora!</p>
        </section>

        {/* CTA Final */}
        <div className="mt-12 w-full">
          <CTAButton />
          <p className="mt-4 text-sm uppercase tracking-wider text-foreground/60">
            ⚡ Vagas limitadas
          </p>
        </div>

        <footer className="mt-16 text-xs text-foreground/40">
          © {new Date().getFullYear()} GR Bike — Shop &amp; Service
        </footer>
      </main>
    </div>
  );
}
