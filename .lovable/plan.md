## Objetivo

Duas alterações cirúrgicas na landing, sem tocar em mais nada:

1. Remover a seção FAQ (`FaqSection`) da landing.
2. Duplicar o card "Matheus Nascimento" dentro da seção "Who is behind" (`FounderSection`), ajustando apenas o layout dessa seção para ficar proporcional e responsivo.

---

## Fase 1 — Remover a seção FAQ

Arquivo: `src/pages/Index.tsx`

- Remover o import `import { FaqSection } from "@/components/landing/FaqSection";`
- Remover a renderização `<FaqSection />` (fica entre `<FounderSection />` e `<FinalCtaSection />`).
- Manter o arquivo `src/components/landing/FaqSection.tsx` no projeto (não deletar), apenas deixar de chamá-lo. Isso evita risco e mantém o componente disponível caso seja reaproveitado.

Observação importante: a `FaqSection` atual contém dois blocos:
- um **CTA intermediário** ("Quer fotos que vendam e posicionem?") no topo;
- a lista de **perguntas frequentes** abaixo.

Como ambos vivem dentro da mesma `<section id="faq">` e o pedido é "remover completamente a seção de FAQ", os dois sairão juntos. O fluxo final passa direto de `FounderSection` para `FinalCtaSection` (que já é o CTA/formulário final), o que conecta naturalmente sem buraco visual.

Nenhuma outra mudança em `Index.tsx`.

---

## Fase 2 — Duplicar o card "Matheus Nascimento" na seção Who is behind

Arquivo: `src/components/landing/FounderSection.tsx`

Estrutura atual:
- Coluna esquerda (`lg:grid-cols-2`): retrato + card escuro sobreposto "Matheus Nascimento" + badge circular giratória.
- Coluna direita: headline "We were born to change the game." + parágrafos.

Alteração: dentro da coluna esquerda, em vez de um único bloco retrato+card, mostrar **dois blocos idênticos** de Matheus Nascimento (mesma foto, mesmo nome, mesmo cargo, mesma descrição, mesmos estilos, mesmos efeitos).

### Layout

- Manter o grid externo `lg:grid-cols-2` (cards à esquerda, texto à direita) — equilíbrio premium preservado.
- Substituir o conteúdo da coluna esquerda por um sub-grid:
  - Mobile (`grid-cols-1`): cards empilhados verticalmente, gap confortável (`gap-10`) para acomodar a sobreposição do card escuro.
  - Desktop (`sm:grid-cols-2`): dois cards lado a lado, `gap-6 lg:gap-8`.
- Reduzir levemente a escala interna de cada card duplicado para caber bem em duas colunas:
  - Remover a badge circular giratória do segundo card (e opcionalmente do primeiro) só se ficar visualmente apertado em desktop; manter por padrão em ambos.
  - Manter `aspect-[4/5]` no retrato; o `max-w-[560px]` original sai do wrapper externo (que era para 1 card grande) e cada card fica fluido dentro da sua coluna do sub-grid.
- O card escuro sobreposto continua com o mesmo posicionamento relativo (`-bottom-6 -right-4 sm:right-0`), com larguras relativas (`w-[78%] sm:w-[62%]`) — funciona igual em escala menor.
- Coluna direita (texto): inalterada.

### Implementação

Para reduzir duplicação de JSX e risco, extrair o JSX do "card Matheus" (retrato + card escuro sobreposto + badge circular) em um pequeno componente local **dentro do mesmo arquivo** `FounderSection.tsx` — sem criar arquivo novo, sem novo import.

```tsx
const MatheusCard = () => (
  <div className="relative w-full">
    {/* Portrait */}
    <div className="relative overflow-hidden rounded-sm shadow-2xl">
      <img src={founder} alt="Matheus Nascimento, fundador" loading="lazy"
           className="w-full h-auto object-cover aspect-[4/5]" />
    </div>
    {/* Overlapping dark info card — mesmo conteúdo de hoje */}
    <div className="absolute -bottom-6 -right-4 sm:right-0 w-[78%] sm:w-[62%] bg-hero text-white p-6 sm:p-8 shadow-glow">
      {/* …mesmo JSX atual: nome, ícone, divider, 3 linhas… */}
    </div>
    {/* Badge circular giratória — mesmo JSX atual */}
  </div>
);
```

E na seção:

```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-6 lg:gap-8 max-w-[560px] sm:max-w-none mx-auto lg:mx-0">
  <MatheusCard />
  <MatheusCard />
</div>
```

Nada do conteúdo (texto, imagem, classes do card escuro, badge) é alterado — é cópia fiel.

### Responsividade

- 375px / mobile: dois cards empilhados, cada um ocupando largura confortável, sem overflow.
- 640–1024px: dois cards lado a lado em duas colunas.
- ≥1024px: layout `grid-cols-2` externo mantém cards à esquerda e texto à direita; cards lado a lado dentro da coluna esquerda.

---

## Arquivos tocados

- `src/pages/Index.tsx` — remover import e uso de `FaqSection`.
- `src/components/landing/FounderSection.tsx` — extrair `MatheusCard` interno, renderizar duas vezes em sub-grid, ajustar wrapper externo (sair de `max-w-[560px]` único para grid responsivo).

## Não tocar

Header, Hero, StrategicCoreSection, StatementSection, ServicesSection, TestimonialsSection, ProcessSection, FinalCtaSection, Footer, assets, Tailwind config, CSS global, rotas, integrações. Conteúdo textual e imagens permanecem idênticos.

## Critérios de sucesso

- FAQ não aparece em nenhum breakpoint; transição `FounderSection → FinalCtaSection` natural, sem buraco.
- "Who is behind" mostra dois cards Matheus idênticos, proporcionais, com mesma foto/texto/estilo.
- Mobile empilhado, desktop lado a lado, sem overflow horizontal.
- Sem erros de TS, sem imports não usados, sem mudanças fora do escopo.
