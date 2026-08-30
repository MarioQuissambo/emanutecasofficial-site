import { createFileRoute } from "@tanstack/react-router";
import { Download, Play, Music4, CalendarCheck, Handshake, Instagram, MessageCircle } from "lucide-react";


import { TeaserGate } from "@/components/TeaserGate";


import heroAsset from "@/assets/hero.jpg.asset.json";
import profileAsset from "@/assets/profile.jpg.asset.json";
import vencedorAsset from "@/assets/vencedor.mp3.asset.json";
import bweAsset from "@/assets/bwe-d-foco.mp3.asset.json";
import novoSingleAsset from "@/assets/novo-single.mp3.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Emanú Tecas — Músico Oficial | Shows, Músicas e Parcerias" },
      {
        name: "description",
        content:
          "Página oficial de Emanú Tecas. Ouve e baixa as músicas, solicita shows e fala de parcerias diretamente pelo WhatsApp.",
      },
      { property: "og:title", content: "Emanú Tecas — Músico Oficial" },
      {
        property: "og:description",
        content: "Músicas para baixar, pedidos de show e parcerias com Emanú Tecas.",
      },
      { property: "og:image", content: `https://emanutecas.lovable.app${profileAsset.url}` },
      { name: "twitter:image", content: `https://emanutecas.lovable.app${profileAsset.url}` },
    ],
  }),
  component: Index,
});

const WHATSAPP = "244927184471";
const wa = (text: string) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;
const wab = () => `https://wa.me/${WHATSAPP}`;


const tracks = [
  {
    title: "Vencedor",
    subtitle: "Single oficial",
    url: vencedorAsset.url,
    file: "Emanu-Tecas-Vencedor.mp3",
  },
  {
    title: "Bwê D' Foco",
    subtitle: "Projecto Bwê D'Talentos",
    url: bweAsset.url,
    file: "Emanu-Tecas-Bwe-D-Foco.mp3",
  },
  {
    title: "Faixa Inédita",
    subtitle: "Pré-lançamento",
    url: novoSingleAsset.url,
    file: "Emanu-Tecas-Faixa-Inedita.mp3",
  },
];

function Index() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src={heroAsset.url}
          alt="Emanú Tecas em sessão de fotos"
          className="absolute inset-0 h-full w-full object-cover object-top opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-20 text-center sm:py-28">
          <img
            src={profileAsset.url}
            alt="Retrato oficial de Emanú Tecas"
            className="h-36 w-36 rounded-full border-2 border-primary/70 object-cover shadow-[var(--shadow-glow)] sm:h-44 sm:w-44"
          />
          <p className="mt-6 text-sm uppercase tracking-[0.35em] text-primary">Músico · Angola</p>
          <h1 className="mt-3 font-display text-5xl leading-none tracking-wide sm:text-7xl">
            Emanú Tecas
          </h1>
          <p className="mt-4 max-w-xl text-base text-muted-foreground">
            Voz, mensagem e verdade. Músicas com propósito para inspirar quem ouve — disponíveis
            aqui para ouvir e baixar.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#musicas"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
            >
              <Music4 className="h-4 w-4" /> Ouvir músicas
            </a>
            <a
              href={wa("Olá Emanú Tecas! Quero contratar-te para um show.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary/50 px-6 py-3 text-sm font-semibold text-primary transition hover:bg-primary/10"
            >
              <CalendarCheck className="h-4 w-4" /> Contactos para show
            </a>
            <a
              href={wab()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3 text-sm font-semibold text-whatsapp-foreground transition hover:opacity-90"
            >
              <MessageCircle className="h-4 w-4" /> Conversar via WhatsApp
            </a>

          </div>
          <p className="mt-4 text-sm text-muted-foreground">WhatsApp: +244 927 184 471</p>

        </div>
      </section>

      {/* Sobre */}
      <section className="mx-auto max-w-3xl px-6 py-14">
        <h2 className="font-display text-3xl tracking-wide sm:text-4xl">Sobre o artista</h2>
        <p className="mt-4 text-muted-foreground">
          Emanú Tecas é cantor e compositor do grupo <strong>Projecto Bwê D'Talentos</strong>. O seu som junta
          batidas de afrobeat a letras honestas de rap, falando de fé, luta e superação. Já subiu a palcos
          de projectos e eventos culturais, e continua a trabalhar em novas faixas para levar a mensagem
          mais longe.
        </p>
        <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {[
            ["Estilo", "Afrobeat · Rap"],
            ["Base", "Angola"],
            ["Grupo", "Projecto Bwê D'Talentos"],
          ].map(([k, v]) => (
            <div key={k} className="rounded-xl border border-border bg-card p-4">
              <dt className="text-xs uppercase tracking-widest text-primary">{k}</dt>
              <dd className="mt-1 text-sm font-medium">{v}</dd>
            </div>
          ))}
        </dl>
      </section>


      {/* Músicas */}
      <section id="musicas" className="mx-auto max-w-5xl px-6 py-14">
        <h2 className="font-display text-3xl tracking-wide sm:text-4xl">Músicas para baixar</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Ouve aqui e baixa gratuitamente. Mais faixas em breve.
        </p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tracks.map((t) => (
            <li
              key={t.title}
              className="flex flex-col rounded-2xl border border-border bg-card p-5"
            >
              <div className="flex flex-1 flex-col">
                <h3 className="flex items-center gap-2 font-display text-2xl tracking-wide">
                  <Play className="h-4 w-4 text-primary" /> {t.title}
                </h3>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  {t.subtitle}
                </p>
                <div className="mt-auto pt-4">
                  <audio controls preload="none" src={t.url} className="w-full">
                    <track kind="captions" />
                  </audio>
                </div>
              </div>
              <a
                href={t.url}
                download={t.file}
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
              >
                <Download className="h-4 w-4" /> Baixar
              </a>
            </li>
          ))}
        </ul>
      </section>


      {/* Em breve */}
      <section className="mx-auto max-w-3xl px-6 py-14">
        <div className="rounded-3xl border border-primary/30 bg-card p-8 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Muito breve</p>
          <h2 className="mt-3 font-display text-4xl tracking-wide">Novo lançamento a caminho</h2>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
            Um novo trabalho de Emanú Tecas está em fase final. Pede para ser notificado e recebes o
            link no dia do lançamento, antes de todos.
          </p>
          <TeaserGate src={novoSingleAsset.url} videoSrc={teaserAsset.url} poster={heroAsset.url} />


        </div>
      </section>

      {/* Contactos */}
      <section id="contactos" className="mx-auto max-w-3xl px-6 py-14">
        <h2 className="font-display text-3xl tracking-wide sm:text-4xl">Contactos</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Todas as mensagens chegam directamente ao WhatsApp +244 927 184 471.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <a
            href={wa("Olá Emanú Tecas! Quero convidar-te para um evento/show. Data e local:")}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-border bg-card p-6 transition hover:border-primary/60"
          >
            <CalendarCheck className="h-6 w-6 text-primary" />
            <h3 className="mt-3 font-display text-2xl tracking-wide">Solicitar show</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Eventos, igrejas, festivais e convites especiais.
            </p>
          </a>
          <a
            href={wa("Olá Emanú Tecas! Tenho uma proposta de parceria/colaboração.")}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-border bg-card p-6 transition hover:border-primary/60"
          >
            <Handshake className="h-6 w-6 text-primary" />
            <h3 className="mt-3 font-display text-2xl tracking-wide">Parcerias</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Features, produção, marcas e projectos musicais.
            </p>
          </a>
          <a
            href={wab()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-whatsapp/50 bg-card p-6 transition hover:border-whatsapp"
          >
            <MessageCircle className="h-6 w-6 text-whatsapp" />
            <h3 className="mt-3 font-display text-2xl tracking-wide">Conversar</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Fala directamente com Emanú Tecas pelo WhatsApp.
            </p>
          </a>
        </div>
      </section>


      <footer className="border-t border-border px-6 py-10 text-center text-sm text-muted-foreground">
        <p className="flex items-center justify-center gap-2">
          <Instagram className="h-4 w-4 text-primary" /> Emanú Tecas Oficial
        </p>
        <p className="mt-2">© {new Date().getFullYear()} Emanú Tecas. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}
