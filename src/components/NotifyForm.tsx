import { useState } from "react";
import { Bell, CheckCircle2, Loader2 } from "lucide-react";
import { z } from "zod";

import { supabase } from "@/integrations/supabase/client";

const schema = z
  .object({
    nome: z.string().trim().min(2, "Escreve o teu nome").max(100, "Nome muito longo"),
    email: z
      .string()
      .trim()
      .max(255, "E-mail muito longo")
      .email("E-mail inválido")
      .optional()
      .or(z.literal("")),
    whatsapp: z
      .string()
      .trim()
      .max(30, "Número muito longo")
      .regex(/^[0-9+\s()-]*$/, "Número inválido")
      .optional()
      .or(z.literal("")),
  })
  .refine((d) => (d.email && d.email.length > 0) || (d.whatsapp && d.whatsapp.length > 0), {
    message: "Indica o e-mail ou o WhatsApp",
    path: ["email"],
  });

export function NotifyForm() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({ nome: "", email: "", whatsapp: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Verifica os dados");
      return;
    }
    setLoading(true);
    const { error: dbError } = await supabase.from("notificacoes").insert({
      nome: parsed.data.nome,
      email: parsed.data.email ? parsed.data.email : null,
      whatsapp: parsed.data.whatsapp ? parsed.data.whatsapp : null,
    });
    setLoading(false);
    if (dbError) {
      setError("Não foi possível registar agora. Tenta novamente.");
      return;
    }
    setDone(true);
  };

  if (done) {
    return (
      <div className="mt-6 flex flex-col items-center gap-2 rounded-2xl border border-primary/40 bg-secondary p-6">
        <CheckCircle2 className="h-8 w-8 text-primary" />
        <p className="font-display text-2xl tracking-wide">Inscrição confirmada!</p>
        <p className="text-sm text-muted-foreground">
          Obrigado, {form.nome.split(" ")[0]}. Serás avisado no dia do lançamento.
        </p>
      </div>
    );
  }

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition hover:opacity-90"
      >
        <Bell className="h-4 w-4" /> Quero ser notificado
      </button>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-6 max-w-md space-y-3 text-left">
      <div>
        <label htmlFor="nome" className="text-xs uppercase tracking-widest text-primary">
          Nome
        </label>
        <input
          id="nome"
          value={form.nome}
          maxLength={100}
          onChange={(e) => setForm({ ...form, nome: e.target.value })}
          className="mt-1 w-full rounded-xl border border-input bg-secondary px-4 py-3 text-sm outline-none focus:border-primary"
          placeholder="O teu nome"
        />
      </div>
      <div>
        <label htmlFor="email" className="text-xs uppercase tracking-widest text-primary">
          E-mail
        </label>
        <input
          id="email"
          type="email"
          value={form.email}
          maxLength={255}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="mt-1 w-full rounded-xl border border-input bg-secondary px-4 py-3 text-sm outline-none focus:border-primary"
          placeholder="exemplo@email.com"
        />
      </div>
      <div>
        <label htmlFor="whatsapp" className="text-xs uppercase tracking-widest text-primary">
          WhatsApp
        </label>
        <input
          id="whatsapp"
          type="tel"
          value={form.whatsapp}
          maxLength={30}
          onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
          className="mt-1 w-full rounded-xl border border-input bg-secondary px-4 py-3 text-sm outline-none focus:border-primary"
          placeholder="+244 9XX XXX XXX"
        />
      </div>
      <p className="text-xs text-muted-foreground">Basta deixar o e-mail ou o WhatsApp.</p>
      {error && <p className="text-sm text-destructive">{error}</p>}
      <button
        type="submit"
        disabled={loading}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition hover:opacity-90 disabled:opacity-60"
      >
        {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Bell className="h-4 w-4" />}
        {loading ? "A registar..." : "Confirmar inscrição"}
      </button>
    </form>
  );
}
