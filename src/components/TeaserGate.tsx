import { useState } from "react";
import { Lock, PlayCircle } from "lucide-react";

import { NotifyForm } from "@/components/NotifyForm";

type TeaserGateProps = {
  src: string;
  kind?: "audio" | "video";
};

export function TeaserGate({ src, kind = "audio" }: TeaserGateProps) {
  const [unlocked, setUnlocked] = useState(false);
  const [started, setStarted] = useState(false);

  return (
    <div className="mt-6">
      <div className="mx-auto max-w-lg rounded-2xl border border-border bg-secondary p-4">
        <p className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-primary">
          <PlayCircle className="h-4 w-4" /> Pré-visualização do lançamento
        </p>
        {kind === "video" ? (
          <video
            controls
            preload="metadata"
            src={src}
            className="mt-3 w-full rounded-xl"
            onPlay={() => setStarted(true)}
            onEnded={() => setUnlocked(true)}
          >
            <track kind="captions" />
          </video>
        ) : (
          <audio
            controls
            preload="none"
            src={src}
            className="mt-3 w-full"
            onPlay={() => setStarted(true)}
            onEnded={() => setUnlocked(true)}
          >
            <track kind="captions" />
          </audio>
        )}
        <p className="mt-3 text-xs text-muted-foreground">
          {unlocked
            ? "Obrigado por ouvires até ao fim. Já podes activar o aviso de lançamento."
            : started
              ? "A tocar... o botão de aviso aparece no fim."
              : "Ouve o teaser até ao fim para desbloquear o aviso de lançamento."}
        </p>
      </div>

      {unlocked ? (
        <NotifyForm />
      ) : (
        <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-muted-foreground">
          <Lock className="h-4 w-4" /> Quero ser notificado
        </p>
      )}
    </div>
  );
}
