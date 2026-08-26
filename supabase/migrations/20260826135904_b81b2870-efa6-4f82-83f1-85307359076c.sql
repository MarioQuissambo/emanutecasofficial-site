CREATE TABLE public.notificacoes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  nome TEXT NOT NULL,
  email TEXT,
  whatsapp TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT INSERT ON public.notificacoes TO anon;
GRANT INSERT ON public.notificacoes TO authenticated;
GRANT ALL ON public.notificacoes TO service_role;

ALTER TABLE public.notificacoes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Qualquer pessoa pode inscrever-se"
ON public.notificacoes
FOR INSERT
TO anon, authenticated
WITH CHECK (
  char_length(nome) BETWEEN 1 AND 100
  AND (email IS NOT NULL OR whatsapp IS NOT NULL)
  AND (email IS NULL OR char_length(email) <= 255)
  AND (whatsapp IS NULL OR char_length(whatsapp) <= 30)
);