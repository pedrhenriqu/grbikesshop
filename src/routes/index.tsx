import { createFileRoute } from "@tanstack/react-router";

import logo from "@/assets/gr-bike-logo.png";

const WHATSAPP_URL = "https://wa.me/556493346073";

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

const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSc5JE9-ndT6zowyRgmCuXEISmA0bsfcQQ3wYtIMZ1XPrzjHOw/viewform";

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

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco no WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_-4px_rgba(37,211,102,0.6)] transition-transform hover:scale-110 active:scale-95"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413"/>
        </svg>
      </a>
    </div>
  );
}
