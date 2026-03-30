# Guia de Estilização Premium — ESALQ Júnior Florestal

Este documento estabelece os padrões visuais e técnicos para o website da EJF, garantindo consistência e uma experiência de usuário de alto nível em todas as páginas.

---

## 🎨 Paleta de Cores e Identidade

### Cores Principais
- **Deep Forest (Primária)**: `#1F4427`
  - Utilizada em: Header, Navbar, fundos de seções de conteúdo, cards e rodapé.
- **Natural Gold (Destaque)**: `#F1DD8C`
  - Utilizada em: Bordas de botões, destaques em cinza claro e estados de hover.
- **Mist Green**: `#8CC5A2`
  - Utilizada para títulos destacados em fundo verde escuro e detalhes de ícones.

### Tons Neutros e Acompanhamento
- **Pure White**: `#FFFFFF` (Texto principal e botões de contraste)
- **Soft Silver**: `#E9E9E9` (Textos de descrição e parágrafos secundários)
- **Royal Indigo**: `#2B0F70` (Utilizada em bordas de botões de destaque e ícones de Manejo)

---

## ✍️ Tipografia (Google Fonts)

### Headings (Títulos e UI) - **Montserrat**
Utilizado para dar um ar corporativo, técnico e moderno.
- **Hero Title**: `80px` - `84px` | ExtraBold (800) | Uppercase | Tracking 3.2px
- **Section Headers**: `28px` - `32px` | ExtraBold (800) | Uppercase | Tracking 1.12px
- **Card/Sub-headers**: `23px` | SemiBold (600) | Uppercase
- **UI Labels (Menu/Footer Titles)**: `18px` | Medium (500) | Standard Case | Tracking 0.72px

### Body (Caminho e Leitura) - **Montserrat**
- **Principais parágrafos**: `18px` | Regular (400) | Line-height relaxado.
- **Footer/Textos de apoio**: `14px` | Regular (400) | Opacidade 80%.

---

## 📐 Layout e Espaçamento

### Seções
- **Padding Horizontal**: `102px` a `122px` (Desktop) | `24px` (Mobile)
- **Padding Vertical (Sessões)**: `65px`
- **Gaps Padrão**: `20px` (Elementos próximos) | `70px` - `100px` (Grupos de conteúdo)

### Componentes Interactiveis
- **Botões (Standard)**: 
  - `rounded-full` (estilo pílula)
  - Transições de `105%` escala no hover.
- **Cards (Glassmorphism)**:
  - `border-radius: 37.35px`
  - Gradiente linear de `180deg`: `rgba(140, 197, 162, 0.15)` -> `rgba(204, 204, 204, 0.06)` -> `rgba(31, 68, 39, 0.15)`
  - Sem bordas externas para um visual mais limpo e leve.

---

## ✨ Elementos de Design Premium

1. **Backdrop Blur**: Utilizado em carrosséis e cards (`backdrop-blur-[2px]`) para criar profundidade.
2. **Animais de Contagem (Metrics)**: Números de escala massiva (`100px`) com animação dinâmica ao entrar no campo de visão.
3. **Marquee de Parceiros**: Fluxo contínuo horizontal com espaçamento de `100px` entre logos e opacidade suave para integrar ao fundo.
4. **Hero Dinâmico**: Fundo de floresta com overlay gradiente para garantir leitura perfeita do título.

---

## 🛠️ Regras de Desenvolvimento

- **Tailwind CSS**: Sempre utilizar classes utilitárias e evitar CSS "inline" puro onde possível.
- **Responsividade Fluida**: Utilizar `clamp()` para fontes e `px-6 md:px-20` para margens, garantindo que o site seja impecável do celular ao monitor ultrawide.
- **Alinhamento**: Mobile centralizado (`text-center`) | Desktop à esquerda (`text-left`) conforme o Hero.
