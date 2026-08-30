import { useState } from "react";
import { Lock, PlayCircle } from "lucide-react";

import { NotifyForm } from "@/components/NotifyForm";

type TeaserGateProps = {
  src: string;
  videoSrc: string;
  poster?: string;
};

export function TeaserGate({ src, videoSrc, poster }: TeaserGateProps) {
  const [watched, setWatched] = useState(false);

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
          onEnded={() => setWatched(true)}
          className="mt-3 w-full rounded-xl"
        >
          <track kind="captions" />
        </video>
        {watched && (
          <>
            <p className="mt-4 text-xs uppercase tracking-widest text-primary">Pré-escuta</p>
            <audio controls preload="none" src={src} className="mt-2 w-full">
              <track kind="captions" />
            </audio>
          </>
        )}
        <p className="mt-3 text-xs text-muted-foreground">
          {watched
            ? "Boa! Ouve a pré-escuta e activa o aviso para receberes o link no dia do lançamento."
            : "Vê o teaser até ao fim para desbloqueares a pré-escuta e o botão de notificação."}
        </p>
      </div>

      {watched ? (
        <NotifyForm />
      ) : (
        <div className="mt-6 flex flex-col items-center gap-2">
          <button
            type="button"
            disabled
            aria-disabled="true"
            title="Vê o teaser até ao fim para desbloquear"
            className="inline-flex cursor-not-allowed items-center gap-2 rounded-full bg-accent/40 px-6 py-3 text-sm font-semibold text-accent-foreground/60"
          >
            <Lock className="h-4 w-4" /> Quero ser notificado
          </button>
          <p className="text-xs text-muted-foreground">
            🔒 Disponível depois de veres o teaser completo
          </p>
        </div>
      )}
    </div>
  );
}
