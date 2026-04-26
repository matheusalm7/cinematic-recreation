
## Plano: Adicionar seção "Núcleo Estratégico" com fundo branco

Decisões confirmadas:
- **Fundo**: branco apenas nessa seção
- **Copy**: texto literal do print

### Arquivo novo: `src/components/landing/StrategicCoreSection.tsx`

Layout (grid):
```text
┌──────────────────────────────────────────┐
│  Card 1 (largo, centralizado)            │
│  "Consultoria em odontologia para        │
│   quem cansou do improviso."             │
│  + parágrafo descritivo                  │
└──────────────────────────────────────────┘
┌────────────────────┐ ┌───────────────────┐
│ Card 2             │ │ Card 3            │
│ [SVG line chart    │ │ • bullet 1        │
│  área azul +       │ │ • bullet 2        │
│  ponto branco no   │ │ • bullet 3        │
│  pico + divisor]   │ │ • bullet 4        │
│ Tagline + CTA      │ │ [3 abas stacked:  │
│                    │ │  Posicionamento / │
│                    │ │  Gestão / Cresc.] │
└────────────────────┘ └───────────────────┘
```

**Estilo (fundo branco)**:
- Section: `bg-white text-navy-deep py-24`
- Cards: `bg-white border border-navy-deep/15 rounded-2xl shadow-sm`
- Destaques em itálico serifado usando `font-display italic` na cor primária
- Bullets com pontinhos `bg-primary`
- Abas empilhadas: 3 divs com `translate-y` e leve `scale` decrescente para profundidade
- Gráfico inline SVG: path com `fill` gradiente azul (primary → transparent), linha sólida azul por cima, círculo branco com borda azul no pico, linha vertical pontilhada divisória

**Inserção**: `src/pages/Index.tsx` — entre `<StatementSection />` e `<ServicesSection />`.

**Texto** (literal do print): título com "cansou do improviso" em itálico; parágrafo descritivo; lista de 4 bullets; abas Posicionamento / Gestão / Crescimento; tagline "Não somos agência…" no card do gráfico.

Sem alterações em outros componentes. Sem dependências novas.
