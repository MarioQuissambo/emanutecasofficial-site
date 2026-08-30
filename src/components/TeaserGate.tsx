import { PlayCircle } from "lucide-react";

import { NotifyForm } from "@/components/NotifyForm";

type TeaserGateProps = {
  src: string;
  videoSrc: string;
  poster?: string;
};

export function TeaserGate({ src, videoSrc, poster }: TeaserGateProps) {
  return (
    <div className="mt-6">
      <div className="mx-auto max-w-lg rounded-2xl border border-border bg-secondary p-4">
        <p className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-primary">
          <PlayCircle className="h-4 w-4" /> Teaser do lançamento
        </p>
        <video
          controls
          playsInline
          preload="metadata"
          src={videoSrc}
          poster={poster}
          className="mt-3 w-full rounded-xl"
        >
          <track kind="captions" />
        </video>
        <p className="mt-4 text-xs uppercase tracking-widest text-primary">Pré-escuta</p>
        <audio controls preload="none" src={src} className="mt-2 w-full">
          <track kind="captions" />
        </audio>
        <p className="mt-3 text-xs text-muted-foreground">
          Vê o teaser, ouve a pré-escuta e activa o aviso para receberes o link no dia do
          lançamento.
        </p>
      </div>

      <NotifyForm />
    </div>
  );
}

