import { createFileRoute } from "@tanstack/react-router";

import logo from "@/assets/gr-bike-logo.png";

const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=556493346073&text&type=phone_number&app_absent=0";

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
        <svg viewBox="0 0 32 32" className="h-8 w-8" fill="currentColor" aria-hidden="true">
          <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.155-.388.27-.81.27-1.236 0-.5-1.886-1.473-2.736-1.473zm-2.522 8.12a10.65 10.65 0 0 1-5.428-1.49l-3.79 1.218 1.231-3.66a10.625 10.625 0 1 1 7.987 3.932zM16.59 4.683a13.064 13.064 0 0 0-13.07 13.06 12.96 12.96 0 0 0 1.745 6.515L2.5 31.5l7.45-2.39a13.054 13.054 0 0 0 6.64 1.808 13.064 13.064 0 0 0 0-26.25z"/>
        </svg>
      </a>
    </div>
  );
}
