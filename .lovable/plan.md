## Objetivo

Refinar exclusivamente o bloco abaixo dos 3 pilares ("Direção / Intenção / Execução") na seção "Você não precisa de mais conteúdo. Precisa de direção." (`StatementSection.tsx`), sem alterar nenhuma outra parte do site.

Dois ajustes:
1. **Texto** mais compacto, sutil e claramente acoplado aos 3 cards acima (não parecer nova seção).
2. **Imagem** com aparência de objeto recortado/flutuante, no mesmo padrão visual da câmera/lente da seção Processes (`DecorativeGear`): sem fundo retangular visível, com glow azul suave e `drop-shadow`.

## Problema da imagem atual

O asset usado é `src/assets/strategic-capture-clapper.jpg` — JPG não suporta transparência, por isso aparece como retângulo. A câmera de Processes usa `camera-gear.png` / `lens-gear.png` (PNG transparente), o que dá o efeito flutuante.

Como a regra é **não substituir a imagem enviada por outra**, a solução é: continuar usando o asset enviado, mas mascarar o fundo branco do JPG via CSS — `mix-blend-mode: multiply` sobre fundo branco da seção (que já é `bg-white`) faz o fundo branco do JPG sumir visualmente, deixando apenas o objeto. Isso replica a aparência "sem fundo" sem trocar o arquivo.

> Observação: se o usuário preferir, em uma próxima iteração podemos pedir/adicionar uma versão PNG transparente do mesmo asset para resultado ainda mais limpo. Para esta tarefa, ficamos só no CSS.

## Mudanças (somente em `src/components/landing/StatementSection.tsx`)

Substituir o bloco "Por trás de cada captação" atual por uma versão mais compacta e melhor integrada:

- Container: `max-w-3xl` (mais estreito, encaixa com os cards), `mt-10 md:mt-12` (proximidade maior com os pilares acima), grid `md:grid-cols-[0.85fr_1.15fr]`, `items-center`, `gap-6 md:gap-8`.
- **Imagem** (esquerda no desktop, topo no mobile):
  - Glow azul suave atrás: `absolute inset-0 rounded-full bg-primary/10 blur-3xl`.
  - `<img>` com `max-w-[150px] sm:max-w-[180px] md:max-w-[210px]`, `object-contain`, `drop-shadow-2xl`, `relative z-10`.
  - `style={{ mixBlendMode: "multiply" }}` para apagar o fundo branco do JPG contra o `bg-white` da seção (efeito "sem fundo" estilo `DecorativeGear`).
  - Sem card, sem borda, sem moldura.
- **Texto** (direita no desktop, abaixo no mobile):
  - Título `text-sm font-semibold tracking-tight text-foreground` + `mb-3`.
  - Lista `text-sm leading-relaxed text-foreground/60`, `space-y-1.5`, conteúdo exato:
    ```
    → direção comercial
    → narrativa visual
    → posicionamento estratégico
    → execução orientada à conversão
    ```
  - Alinhamento: `text-center md:text-left`.

## Arquivos tocados

- `src/components/landing/StatementSection.tsx` — única alteração (substituir o JSX do bloco "Por trás de cada captação"). Import de `strategicCaptureImage` permanece.

## Não tocar

Header, Hero, HeroVideoPanel, StrategicCoreSection, ServicesSection, TestimonialsSection, ProcessSection (e a câmera/`DecorativeGear`), FounderSection, FaqSection, FinalCtaSection, Footer, `Index.tsx`, assets, Tailwind config, CSS global, rotas. Os 3 cards/pilares e o título da própria `StatementSection` também ficam intactos.

## Critérios de sucesso

- Bloco encostado nos 3 cards (espaçamento reduzido), `max-w-3xl`, parece extensão dos pilares.
- Imagem menor, sem retângulo branco visível, com glow azul e drop-shadow — visual equivalente à câmera de Processes.
- Texto pequeno, sutil, exatamente as 4 linhas com setas.
- Mobile: imagem em cima, texto abaixo, centralizado, sem overflow.
- Nenhuma outra seção alterada; sem erros de TS / imports não usados.