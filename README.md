# MindLoom Landing Page (`mindloom.me`)

Marketing and architectural overview landing page for **MindLoom**, a self-hosted, Markdown-native, AI-augmented personal knowledge engine.

Built as a single React + TypeScript component styled with Tailwind CSS, conforming strictly to the MindLoom design language.

## Design Directives

- **Typography**: 
  - Prose & Display: **Plus Jakarta Sans** (strictly no Inter).
  - Structure, Data, Wordmark second half, Code, Labels: **JetBrains Mono**.
- **Palette**: Near-black background (`#0A0D12`), muted cool blue accent (`#5AA7D9`), zero saturated neon cyan.
- **Layout**: Bento Grid of varying cell density (2x2 anchors + 1x1 cells). No 3-column uniform card grids.
- **Tone**: Zero SaaS marketing clichés (no "revolutionary", "seamless", "effortless", or exclamation points). Falsifiable technical engineering claims only.
- **Primary Mark**: Woven interlace hashtag (`src/components/WovenHashtagIcon.tsx`).

## Development

```bash
# Install dependencies
npm install

# Start development server (Port 8090)
npm run dev

# Build production bundle
npm run build
```

## Structure

```
landing_page/
├── src/
│   ├── components/
│   │   ├── MindLoomLanding.tsx    # Single React + TypeScript component
│   │   └── WovenHashtagIcon.tsx   # Dummy 4-strand over/under woven mark (ready to replace)
│   ├── App.tsx                    # Root wrapper
│   ├── main.tsx                   # DOM entrypoint
│   └── index.css                  # Tailwind directives & typography layers
├── index.html                     # Fonts loader & meta
├── tailwind.config.js             # Token definitions (#5AA7D9, Plus Jakarta Sans, JetBrains Mono)
└── package.json
```
