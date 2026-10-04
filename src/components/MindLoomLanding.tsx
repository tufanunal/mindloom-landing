import React, { useState } from 'react';
import { WovenHashtagIcon } from './WovenHashtagIcon';

// Theme definition token structure (8 distinct 22-token systems)
interface ThemePreview {
  id: string;
  name: string;
  category: 'functional' | 'seasonal';
  bg: string;
  surface: string;
  border: string;
  accent: string;
  text: string;
  description: string;
}

const THEMES: ThemePreview[] = [
  // 4 Functional Modes
  {
    id: 'dark',
    name: 'Dark Obsidian',
    category: 'functional',
    bg: '#0A0D12',
    surface: '#11151D',
    border: '#1F2633',
    accent: '#5AA7D9',
    text: '#F0F4F8',
    description: 'High-contrast near-black workspace tuned for late-night research sessions.',
  },
  {
    id: 'light',
    name: 'Paper Minimal',
    category: 'functional',
    bg: '#F8FAFC',
    surface: '#FFFFFF',
    border: '#E2E8F0',
    accent: '#3B82F6',
    text: '#0F172A',
    description: 'High-legibility editorial canvas reflecting archival print typesetting.',
  },
  {
    id: 'gray',
    name: 'Slate Technical',
    category: 'functional',
    bg: '#181A1F',
    surface: '#21252B',
    border: '#2D323B',
    accent: '#61AFEF',
    text: '#ABB2BF',
    description: 'Balanced low-glare neutral palette inspired by Unix workstation monitors.',
  },
  {
    id: 'terminal',
    name: 'Monochrome Amber',
    category: 'functional',
    bg: '#080808',
    surface: '#121212',
    border: '#262626',
    accent: '#F59E0B',
    text: '#D97706',
    description: 'Phosphor cathode terminal palette with high scanline readability.',
  },
  // 4 Seasonal Moods
  {
    id: 'spring',
    name: 'Vernal Moss',
    category: 'seasonal',
    bg: '#0A120E',
    surface: '#121F18',
    border: '#1E362A',
    accent: '#10B981',
    text: '#ECFDF5',
    description: 'Chlorophyll greens and early-season soil tones for exploratory seedling notes.',
  },
  {
    id: 'summer',
    name: 'Solar Solstice',
    category: 'seasonal',
    bg: '#120F08',
    surface: '#1F1A0E',
    border: '#332914',
    accent: '#EAB308',
    text: '#FEFCE8',
    description: 'Sunlit gold and warm parchment accents for active deliverable production.',
  },
  {
    id: 'autumn',
    name: 'Deciduous Rust',
    category: 'seasonal',
    bg: '#140D0B',
    surface: '#211613',
    border: '#38221B',
    accent: '#EA580C',
    text: '#FFF7ED',
    description: 'Terracotta and dry oak gradients suited for vault synthesis and pruning.',
  },
  {
    id: 'winter',
    name: 'Boreal Frost',
    category: 'seasonal',
    bg: '#090F14',
    surface: '#101B24',
    border: '#1B2E3D',
    accent: '#38BDF8',
    text: '#F0F9FF',
    description: 'Crisp subzero azure and glacier tones for deep structured knowledge indexing.',
  },
];

export const MindLoomLanding: React.FC = () => {
  const [activeTheme, setActiveTheme] = useState<string>('dark');
  const [trMode, setTrMode] = useState<boolean>(false);

  const currentTheme = THEMES.find((t) => t.id === activeTheme) || THEMES[0];

  return (
    <div className="min-h-screen bg-[#0A0D12] text-[#F0F4F8] font-sans antialiased selection:bg-[#5AA7D9]/20 selection:text-[#5AA7D9]">
      {/* ─────────────────────────────────────────────────────────────
          1. NAVIGATION
          ───────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0A0D12]/85 border-b border-white/[0.07]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo Wordmark */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-8 h-8 rounded-lg bg-[#11151D] border border-white/10 flex items-center justify-center p-1 group-hover:border-[#5AA7D9]/40 transition-colors">
              <WovenHashtagIcon size={22} className="text-[#5AA7D9]" />
            </div>
            <div className="flex items-baseline tracking-tight">
              <span className="font-sans font-bold text-lg text-white">Mind</span>
              <span className="font-mono text-lg text-[#5AA7D9] font-medium">Loom</span>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 font-mono text-xs text-[#8B9BB0]">
            <a href="#principles" className="hover:text-white transition-colors">01//principles</a>
            <a href="#bento" className="hover:text-white transition-colors">02//architecture</a>
            <a href="#differentiation" className="hover:text-white transition-colors">03//comparison</a>
            <a href="#specs" className="hover:text-white transition-colors">04//spec_sheet</a>
            <a href="#themes" className="hover:text-white transition-colors">05//themes</a>
          </nav>

          {/* External Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/tufanunal/mindloom"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-md font-mono text-xs text-[#8B9BB0] border border-white/10 hover:border-white/20 hover:text-white transition-all"
            >
              <span>src:github</span>
            </a>
            <a
              href="https://app.mindloom.me"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md font-sans text-xs font-semibold bg-[#5AA7D9] text-[#0A0D12] hover:bg-[#6FB5E3] transition-colors"
            >
              <span>Open Vault</span>
              <span className="font-mono text-[10px] opacity-75">(:8091)</span>
            </a>
          </div>
        </div>
      </header>

      {/* ─────────────────────────────────────────────────────────────
          2. HERO SECTION
          ───────────────────────────────────────────────────────────── */}
      <section className="pt-20 pb-24 border-b border-white/[0.06] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Descriptive Positioning */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-white/10 bg-[#11151D] font-mono text-xs text-[#8B9BB0]">
                <span className="w-2 h-2 rounded-full bg-[#5AA7D9]"></span>
                <span>self_hosted // single_operator // markdown_native</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.12]">
                Personal knowledge engine where{' '}
                <span className="text-[#5AA7D9]">plain .md files</span> are the database.
              </h1>

              <p className="text-base text-[#8B9BB0] leading-relaxed max-w-xl">
                One capture endpoint takes links, audio, screenshots, and raw thoughts. 
                An asynchronous pipeline parses, transcribes, OCRs, tags, and links each 
                item into your knowledge graph as a plain text file with YAML frontmatter. 
                Postgres holds only a disposable index.
              </p>

              {/* Direct Proof Chips */}
              <div className="grid grid-cols-2 gap-3 pt-2 max-w-md font-mono text-xs">
                <div className="p-3 rounded-lg bg-[#11151D] border border-white/[0.08]">
                  <div className="text-[#5AA7D9] font-medium">&lt; 500ms</div>
                  <div className="text-[#576577] text-[11px] mt-0.5">Non-blocking capture latency</div>
                </div>
                <div className="p-3 rounded-lg bg-[#11151D] border border-white/[0.08]">
                  <div className="text-[#5AA7D9] font-medium">0 Lock-in</div>
                  <div className="text-[#576577] text-[11px] mt-0.5">Drop folder into Obsidian</div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual — Real Canonical Markdown Frontmatter */}
            <div className="lg:col-span-6">
              <div className="rounded-xl border border-white/10 bg-[#0E1219] overflow-hidden shadow-2xl">
                {/* Terminal Header */}
                <div className="h-9 bg-[#141923] border-b border-white/[0.06] px-4 flex items-center justify-between font-mono text-xs text-[#576577]">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#262C38]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#262C38]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#262C38]"></div>
                    <span className="ml-2 text-[#8B9BB0]">vault/notes/2026-10-04_distributed-mesh.md</span>
                  </div>
                  <span>UTF-8</span>
                </div>

                {/* File Contents */}
                <div className="p-5 font-mono text-xs leading-relaxed text-[#ABB2BF] overflow-x-auto space-y-1">
                  <div className="text-[#576577]">---</div>
                  <div><span className="text-[#E06C75]">id</span>: <span className="text-[#98C379]">"01HZY8X9K2MQ4NVB9F7G8"</span></div>
                  <div><span className="text-[#E06C75]">title</span>: <span className="text-[#98C379]">"Distributed Knowledge Meshes & Local-First Storage"</span></div>
                  <div><span className="text-[#E06C75]">created_at</span>: <span className="text-[#61AFEF]">2026-10-04T19:42:00Z</span></div>
                  <div><span className="text-[#E06C75]">source_url</span>: <span className="text-[#98C379]">"https://research.org/distributed-systems"</span></div>
                  <div><span className="text-[#E06C75]">container</span>: <span className="text-[#D19A66]">"Systems Architecture"</span></div>
                  <div><span className="text-[#E06C75]">bin</span>: <span className="text-[#D19A66]">"Drafting v2 Engine Spec"</span></div>
                  <div><span className="text-[#E06C75]">tags</span>:</div>
                  <div className="pl-4 text-[#98C379]">- <span className="text-[#5AA7D9]">#architecture</span></div>
                  <div className="pl-4 text-[#98C379]">- <span className="text-[#5AA7D9]">#local-first</span></div>
                  <div className="pl-4 text-[#98C379]">- <span className="text-[#5AA7D9]">#crdt</span></div>
                  <div><span className="text-[#E06C75]">enrichment</span>:</div>
                  <div className="pl-4"><span className="text-[#E06C75]">whisper_model</span>: <span className="text-[#98C379]">"large-v3"</span></div>
                  <div className="pl-4"><span className="text-[#E06C75]">classifier</span>: <span className="text-[#98C379]">"nvidia/llama-3.3-70b-instruct"</span></div>
                  <div className="pl-4"><span className="text-[#E06C75]">ocr_engine</span>: <span className="text-[#98C379]">"docling-v2"</span></div>
                  <div className="text-[#576577]">---</div>
                  <div className="pt-2 text-white font-sans text-sm font-semibold">
                    # Distributed Knowledge Meshes & Local-First Storage
                  </div>
                  <p className="pt-1 text-[#8B9BB0] font-sans text-xs">
                    Local-first topologies guarantee availability regardless of edge connectivity. 
                    Referenced in [[2026-09-15_vault-invariants]] and [[Obsidian Specification]].
                  </p>
                  <div className="pt-2 font-mono text-[11px] text-[#5AA7D9] flex gap-2">
                    <span className="px-1.5 py-0.5 rounded bg-[#5AA7D9]/10 border border-[#5AA7D9]/20">[[2026-09-15_vault-invariants]]</span>
                    <span className="px-1.5 py-0.5 rounded bg-[#5AA7D9]/10 border border-[#5AA7D9]/20">[[Obsidian Specification]]</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. CORE ARCHITECTURAL INVARIANTS
          ───────────────────────────────────────────────────────────── */}
      <section id="principles" className="py-20 border-b border-white/[0.06] bg-[#0D1017]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <span className="font-mono text-xs text-[#5AA7D9] tracking-wider uppercase">01 // Architectural Invariants</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
              Engineered constraints, not marketing slogans
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl bg-[#11151D] border border-white/[0.08] flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-[#5AA7D9] font-medium">RULE // 01</span>
                <h3 className="text-base font-bold text-white mt-2 mb-3">
                  Markdown is source of truth
                </h3>
                <p className="text-sm text-[#8B9BB0] leading-relaxed">
                  The database is derived and completely disposable. Delete PostgreSQL, run 
                  <code className="mx-1 px-1.5 py-0.5 rounded bg-black/40 font-mono text-xs text-[#5AA7D9]">pnpm reindex</code>, 
                  and the relational index rebuilds entirely from the filesystem.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/[0.06] font-mono text-xs text-[#576577]">
                fs::canonical_storage
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[#11151D] border border-white/[0.08] flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-[#5AA7D9] font-medium">RULE // 02</span>
                <h3 className="text-base font-bold text-white mt-2 mb-3">
                  Capture never blocks on intelligence
                </h3>
                <p className="text-sm text-[#8B9BB0] leading-relaxed">
                  Share a link or screenshot and receive a 200 OK within 500ms. OCR, transcription, 
                  tagging, and embeddings execute asynchronously in background worker queues.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/[0.06] font-mono text-xs text-[#576577]">
                latency::&lt;500ms_ack
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[#11151D] border border-white/[0.08] flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-[#5AA7D9] font-medium">RULE // 03</span>
                <h3 className="text-base font-bold text-white mt-2 mb-3">
                  Sensitive is chosen, not guessed
                </h3>
                <p className="text-sm text-[#8B9BB0] leading-relaxed">
                  Confidential notes enter client-side AES-256-GCM encryption because you 
                  toggled Vault Mode before dispatch — never because an LLM guessed classification.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/[0.06] font-mono text-xs text-[#576577]">
                crypto::client_age_gcm
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[#11151D] border border-white/[0.08] flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-[#5AA7D9] font-medium">RULE // 04</span>
                <h3 className="text-base font-bold text-white mt-2 mb-3">
                  Deterministic before probabilistic
                </h3>
                <p className="text-sm text-[#8B9BB0] leading-relaxed">
                  Wikilinks, container paths, and tags are computed exactly. AI models suggest 
                  connections; only the operator can permanently write links into a note.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/[0.06] font-mono text-xs text-[#576577]">
                graph::human_in_loop
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. BENTO GRID (Mixed cell sizes: 2x2 anchors + 1x1 cells)
          ───────────────────────────────────────────────────────────── */}
      <section id="bento" className="py-24 border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <span className="font-mono text-xs text-[#5AA7D9] tracking-wider uppercase">02 // Deep Architecture</span>
            <h2 className="text-3xl font-bold text-white tracking-tight mt-1">
              Bento Grid: The Core Mechanics
            </h2>
            <p className="text-sm text-[#8B9BB0] mt-2 max-w-2xl">
              Constructed specifically for technical operators managing long-tail knowledge libraries. 
              Varying functional density across discrete systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[minmax(280px,auto)]">
            {/* ── BENTO CELL 1 (2x2 ANCHOR): Project Bins vs Containers ── */}
            <div className="md:col-span-2 lg:col-span-2 md:row-span-2 p-8 rounded-2xl bg-[#11151D] border border-white/[0.08] flex flex-col justify-between relative overflow-hidden">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 font-mono text-xs text-[#5AA7D9] px-2.5 py-1 rounded bg-[#5AA7D9]/10 border border-[#5AA7D9]/20">
                  <span>DUALITY // TAXONOMY_VS_TELEOLOGY</span>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Containers are what a note is <em className="text-[#5AA7D9] not-italic">about</em>. 
                  Bins are what it's <em className="text-[#5AA7D9] not-italic">for</em>.
                </h3>
                <p className="text-sm text-[#8B9BB0] leading-relaxed">
                  Traditional folders force an unnatural collision between topic taxonomy and project deliverables. 
                  MindLoom decouples them:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-[#0A0D12] border border-white/[0.06]">
                    <div className="font-mono text-xs text-white font-semibold flex items-center justify-between">
                      <span>Containers</span>
                      <span className="text-[#576577]">Categorical</span>
                    </div>
                    <p className="text-xs text-[#8B9BB0] mt-2">
                      Passive categories (e.g. <code>Distributed Systems</code>, <code>3D Printing</code>). 
                      Notes retain this category for their lifetime.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#0A0D12] border border-white/[0.06]">
                    <div className="font-mono text-xs text-[#5AA7D9] font-semibold flex items-center justify-between">
                      <span>Project Bins</span>
                      <span className="text-[#5AA7D9]/60">Deliverable</span>
                    </div>
                    <p className="text-xs text-[#8B9BB0] mt-2">
                      Active working sets (e.g. <code>Voron 2.4 Build Manual</code>). Ordered, sectioned, 
                      and temporary until shipping.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#171C26] border border-[#5AA7D9]/30">
                  <div className="font-mono text-xs text-[#5AA7D9] font-medium flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
                    <span>ACTIVE BIN ROUTING MODE</span>
                  </div>
                  <p className="text-xs text-[#8B9BB0] mt-1.5">
                    Toggle an active bin on your phone or browser extension. Every capture taken over the next 4 hours 
                    automatically files into this working set without prompts.
                  </p>
                </div>
              </div>

              <div className="pt-6 font-mono text-xs text-[#576577] border-t border-white/[0.06]">
                spec::decoupled_orthogonal_classification
              </div>
            </div>

            {/* ── BENTO CELL 2 (2x2 ANCHOR): The Three-Tier Knowledge Graph ── */}
            <div className="md:col-span-2 lg:col-span-2 md:row-span-2 p-8 rounded-2xl bg-[#11151D] border border-white/[0.08] flex flex-col justify-between relative overflow-hidden">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 font-mono text-xs text-[#5AA7D9] px-2.5 py-1 rounded bg-[#5AA7D9]/10 border border-[#5AA7D9]/20">
                  <span>GRAPH // HONEST_EDGE_DISCRIMINATION</span>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Three distinct edge types. Zero hallucinations written as fact.
                </h3>
                <p className="text-sm text-[#8B9BB0] leading-relaxed">
                  Many tools blend probabilistic guesses into your notes. MindLoom’s graph strictly differentiates 
                  ground truth from statistical similarity:
                </p>

                <div className="space-y-3 pt-1">
                  <div className="p-3.5 rounded-lg bg-[#0A0D12] border border-white/[0.06] flex items-start gap-3">
                    <span className="font-mono text-xs px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mt-0.5">
                      EXPLICIT
                    </span>
                    <div>
                      <div className="font-mono text-xs font-semibold text-white">[[wikilinks]] (Ground Truth)</div>
                      <div className="text-xs text-[#8B9BB0] mt-0.5">Direct references manually typed in markdown body. Immutable.</div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-lg bg-[#0A0D12] border border-white/[0.06] flex items-start gap-3">
                    <span className="font-mono text-xs px-2 py-0.5 rounded bg-[#5AA7D9]/10 text-[#5AA7D9] border border-[#5AA7D9]/20 mt-0.5">
                      STRUCTURAL
                    </span>
                    <div>
                      <div className="font-mono text-xs font-semibold text-white">Shared Tags & Containers</div>
                      <div className="text-xs text-[#8B9BB0] mt-0.5">Computed relations derived from relational lookup tables.</div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-lg bg-[#0A0D12] border border-white/[0.06] flex items-start gap-3">
                    <span className="font-mono text-xs px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 mt-0.5">
                      SEMANTIC
                    </span>
                    <div>
                      <div className="font-mono text-xs font-semibold text-white">Embedding Cosine Similarity</div>
                      <div className="text-xs text-[#8B9BB0] mt-0.5">Suggested links in graph overlay. Never written to disk unless accepted.</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 font-mono text-xs text-[#576577] border-t border-white/[0.06]">
                spec::bidirectional_adjacency_matrices
              </div>
            </div>

            {/* ── BENTO CELL 3 (1x1): Capture Surfaces & PWA Outbox ── */}
            <div className="p-6 rounded-2xl bg-[#11151D] border border-white/[0.08] flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-[#5AA7D9]">SURFACES // INGEST</span>
                <h4 className="text-base font-bold text-white mt-1 mb-2">
                  PWA Outbox & Extension
                </h4>
                <p className="text-xs text-[#8B9BB0] leading-relaxed">
                  Android share target caches to IndexedDB when offline and flushes on reconnect. 
                  Desktop extension injects native share shortcuts on YouTube, Reddit, X, Discord, and LinkedIn.
                </p>
              </div>
              <div className="pt-4 font-mono text-[11px] text-[#576577] border-t border-white/[0.06]">
                offline::indexeddb_replay
              </div>
            </div>

            {/* ── BENTO CELL 4 (1x1): Client-side AES-256-GCM Vault ── */}
            <div className="p-6 rounded-2xl bg-[#11151D] border border-white/[0.08] flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-[#5AA7D9]">SECURITY // VAULT</span>
                <h4 className="text-base font-bold text-white mt-1 mb-2">
                  Client-Side Encrypted (`age`)
                </h4>
                <p className="text-xs text-[#8B9BB0] leading-relaxed">
                  Encrypted with AES-256-GCM before transport. Stored in the standard 
                  <code className="text-[#5AA7D9] mx-1">age</code> format. If MindLoom ceases 
                  development, decrypt your files with a standard command-line binary.
                </p>
              </div>
              <div className="pt-4 font-mono text-[11px] text-[#576577] border-t border-white/[0.06]">
                format::standard_age_spec
              </div>
            </div>

            {/* ── BENTO CELL 5 (1x1): Hybrid Multi-Model AI Router ── */}
            <div className="p-6 rounded-2xl bg-[#11151D] border border-white/[0.08] flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-[#5AA7D9]">ROUTING // INFERENCE</span>
                <h4 className="text-base font-bold text-white mt-1 mb-2">
                  Task-by-Task Model Router
                </h4>
                <p className="text-xs text-[#8B9BB0] leading-relaxed">
                  Local Ollama, NVIDIA NIM, and Google behind one router. Docling vision for PDFs, 
                  Whisper for audio, Llama-3.3 for classification. Zero vendor capture lock-in.
                </p>
              </div>
              <div className="pt-4 font-mono text-[11px] text-[#576577] border-t border-white/[0.06]">
                engine::hybrid_multitask_ai
              </div>
            </div>

            {/* ── BENTO CELL 6 (1x1): Turkish-First NLP ── */}
            <div className="p-6 rounded-2xl bg-[#11151D] border border-white/[0.08] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#5AA7D9]">LINGUISTICS // TR</span>
                  <button
                    onClick={() => setTrMode(!trMode)}
                    className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-[#8B9BB0] hover:text-white"
                  >
                    {trMode ? 'Switch to EN' : 'Türkçe Göster'}
                  </button>
                </div>
                <h4 className="text-base font-bold text-white mt-1 mb-2">
                  {trMode ? 'Türkçe Odaklı Dil İşleme' : 'Turkish-First Morphology'}
                </h4>
                <p className="text-xs text-[#8B9BB0] leading-relaxed">
                  {trMode
                    ? 'Eklemeli dil yapısı klasik kök bulucuları bozar. pg_trgm trigram araması ve İ/ı, I/i özel font haritalaması ile tam metin arama.'
                    : 'Agglutinative suffixing breaks English stemmers. Built with pg_trgm trigram + embedding hybrid search and dotted/dotless I font feature testing.'}
                </p>
              </div>
              <div className="pt-4 font-mono text-[11px] text-[#576577] border-t border-white/[0.06]">
                nlp::trigram_embedding_hybrid
              </div>
            </div>

            {/* ── BENTO CELL 7 (2x1 WIDE): Self-Hosted Zero-Inbound Topology ── */}
            <div className="md:col-span-2 lg:col-span-2 p-6 rounded-2xl bg-[#11151D] border border-white/[0.08] flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-[#5AA7D9]">INFRASTRUCTURE // TOPOLOGY</span>
                <h4 className="text-base font-bold text-white mt-1 mb-2">
                  Zero Inbound Ports on Single VPS
                </h4>
                <p className="text-xs text-[#8B9BB0] leading-relaxed">
                  Deployed via Docker Compose. Zero open inbound ports on the host. 
                  Outbound-only Cloudflare Tunnel with Edge Zero Trust authentication and TOTP. 
                  Runs on low-cost VPS instances without requiring public IPv4 addresses.
                </p>
              </div>
              <div className="pt-4 flex items-center justify-between font-mono text-[11px] text-[#576577] border-t border-white/[0.06]">
                <span>cloudflared::zero_trust_tunnel</span>
                <span className="text-[#5AA7D9]">Ports 8090 (Landing) // 8091 (Web) // 3011 (API)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. DIFFERENTIATION SECTION ("Why not just use X")
          ───────────────────────────────────────────────────────────── */}
      <section id="differentiation" className="py-20 border-b border-white/[0.06] bg-[#0D1017]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <span className="font-mono text-xs text-[#5AA7D9] tracking-wider uppercase">03 // Differentiation</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
              Why not just use existing self-hosted tools?
            </h2>
            <p className="text-sm text-[#8B9BB0] mt-2 max-w-2xl">
              Mature self-hosted knowledge tools already exist. Here is the objective technical breakdown 
              of how MindLoom contrasts with specific alternatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-[#11151D] border border-white/[0.08]">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-bold text-white">Karakeep</h4>
                <span className="font-mono text-xs text-[#8B9BB0] bg-white/5 px-2 py-0.5 rounded">Bookmarking</span>
              </div>
              <p className="text-xs text-[#8B9BB0] mt-3 leading-relaxed">
                Karakeep excels at AI-tagged web bookmarking and link archiving. However, it lacks 
                human-editable Markdown files as the canonical source, contains no knowledge graph 
                traversal, and lacks Project Bins for organizing active physical or digital deliverables.
              </p>
              <div className="mt-4 pt-3 border-t border-white/[0.06] font-mono text-[11px] text-[#5AA7D9]">
                MindLoom adds: Canonical raw .md files, 3-tier graph, container/bin duality.
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[#11151D] border border-white/[0.08]">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-bold text-white">flatnotes & SilverBullet</h4>
                <span className="font-mono text-xs text-[#8B9BB0] bg-white/5 px-2 py-0.5 rounded">Markdown Editors</span>
              </div>
              <p className="text-xs text-[#8B9BB0] mt-3 leading-relaxed">
                flatnotes and SilverBullet provide excellent file-based Markdown notes. 
                However, they do not include asynchronous multi-model capture pipelines (Whisper transcription, 
                Docling PDF OCR, background LLM enrichment) or mobile share-target offline outboxes.
              </p>
              <div className="mt-4 pt-3 border-t border-white/[0.06] font-mono text-[11px] text-[#5AA7D9]">
                MindLoom adds: Ingestion workers, autonomous OCR/transcription, vector index.
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[#11151D] border border-white/[0.08]">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-bold text-white">Joplin</h4>
                <span className="font-mono text-xs text-[#8B9BB0] bg-white/5 px-2 py-0.5 rounded">Encrypted Sync</span>
              </div>
              <p className="text-xs text-[#8B9BB0] mt-3 leading-relaxed">
                Joplin provides battle-tested end-to-end encrypted note synchronization across clients. 
                However, it stores notes inside an internal SQLite database or opaque synchronized bundles, 
                rather than raw, human-inspectable Obsidian-ready vault directories.
              </p>
              <div className="mt-4 pt-3 border-t border-white/[0.06] font-mono text-[11px] text-[#5AA7D9]">
                MindLoom adds: Standard age-format encryption, zero-export Obsidian drop-in.
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[#11151D] border border-white/[0.08]">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-bold text-white">Obsidian Sync / Commercial PKMS</h4>
                <span className="font-mono text-xs text-[#8B9BB0] bg-white/5 px-2 py-0.5 rounded">Commercial SaaS</span>
              </div>
              <p className="text-xs text-[#8B9BB0] mt-3 leading-relaxed">
                Obsidian is the gold standard for desktop thought work. MindLoom is built to feed Obsidian: 
                an autonomous headless server that collects clips from mobile and browser, enriches them via AI, 
                and writes them into your existing Obsidian directory.
              </p>
              <div className="mt-4 pt-3 border-t border-white/[0.06] font-mono text-[11px] text-[#5AA7D9]">
                MindLoom adds: Autonomous 24/7 background capture and enrichment backend.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. ARCHITECTURE SPEC SHEET STRIP
          ───────────────────────────────────────────────────────────── */}
      <section id="specs" className="py-20 border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10">
            <span className="font-mono text-xs text-[#5AA7D9] tracking-wider uppercase">04 // Engineering Credibility</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
              System Specifications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-mono text-xs">
            <div className="p-5 rounded-lg bg-[#11151D] border border-white/[0.08]">
              <div className="text-[#576577] text-[10px] uppercase">Job Queue Daemon</div>
              <div className="text-white font-semibold text-sm mt-1">pg-boss (Zero Redis)</div>
              <p className="text-[#8B9BB0] font-sans text-xs mt-2">
                Job scheduling and worker coordination operate directly on PostgreSQL. Eliminates Redis memory overhead for single-operator deployments.
              </p>
            </div>

            <div className="p-5 rounded-lg bg-[#11151D] border border-white/[0.08]">
              <div className="text-[#576577] text-[10px] uppercase">Job Replayability</div>
              <div className="text-white font-semibold text-sm mt-1">100% Idempotent Runs</div>
              <p className="text-[#8B9BB0] font-sans text-xs mt-2">
                Re-process entire multi-year note archives on newer frontier model weights with a single CLI command without corrupting links or frontmatter.
              </p>
            </div>

            <div className="p-5 rounded-lg bg-[#11151D] border border-white/[0.08]">
              <div className="text-[#576577] text-[10px] uppercase">Query Architecture</div>
              <div className="text-white font-semibold text-sm mt-1">pgvector + pg_trgm</div>
              <p className="text-[#8B9BB0] font-sans text-xs mt-2">
                Hybrid search marries dense vector cosine distance with trigram substring lexical matching, providing resilience across exact code snippets.
              </p>
            </div>

            <div className="p-5 rounded-lg bg-[#11151D] border border-white/[0.08]">
              <div className="text-[#576577] text-[10px] uppercase">Security Boundary</div>
              <div className="text-white font-semibold text-sm mt-1">JSON-Schema Constraints</div>
              <p className="text-[#8B9BB0] font-sans text-xs mt-2">
                Models are constrained by strict JSON schemas. AI cannot emit raw paths, HTML, or unvalidated tags, neutralizing prompt injection attacks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          7. THEME SHOWCASE (8 Themes: 4 Functional, 4 Seasonal)
          ───────────────────────────────────────────────────────────── */}
      <section id="themes" className="py-20 border-b border-white/[0.06] bg-[#0D1017]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10">
            <span className="font-mono text-xs text-[#5AA7D9] tracking-wider uppercase">05 // Design System</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
              Eight Themes, Not a Dark/Light Toggle
            </h2>
            <p className="text-sm text-[#8B9BB0] mt-2 max-w-2xl">
              Four functional modes for varied environmental glare and four seasonal moods. 
              Each theme implements a complete 22-token CSS design system.
            </p>
          </div>

          {/* Theme Selector Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 mb-8">
            {THEMES.map((theme) => {
              const isSelected = activeTheme === theme.id;
              return (
                <button
                  key={theme.id}
                  onClick={() => setActiveTheme(theme.id)}
                  className={`p-3 rounded-lg border text-left transition-all ${
                    isSelected
                      ? 'border-[#5AA7D9] bg-[#171C26] shadow-lg'
                      : 'border-white/[0.08] bg-[#11151D] hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-1.5 mb-2">
                    <span
                      className="w-3 h-3 rounded-full border border-black/20"
                      style={{ backgroundColor: theme.accent }}
                    ></span>
                    <span
                      className="w-3 h-3 rounded-full border border-black/20"
                      style={{ backgroundColor: theme.surface }}
                    ></span>
                  </div>
                  <div className="font-sans text-xs font-semibold text-white truncate">{theme.name}</div>
                  <div className="font-mono text-[10px] text-[#576577] capitalize">{theme.category}</div>
                </button>
              );
            })}
          </div>

          {/* Selected Theme Interactive Preview Card */}
          <div
            className="p-8 rounded-2xl border transition-colors duration-300"
            style={{
              backgroundColor: currentTheme.surface,
              borderColor: currentTheme.border,
              color: currentTheme.text,
            }}
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b pb-6" style={{ borderColor: currentTheme.border }}>
              <div>
                <span className="font-mono text-xs px-2 py-0.5 rounded" style={{ backgroundColor: currentTheme.bg, color: currentTheme.accent }}>
                  PALETTE // {currentTheme.id.toUpperCase()}
                </span>
                <h3 className="text-2xl font-bold mt-2 font-sans" style={{ color: currentTheme.text }}>
                  {currentTheme.name}
                </h3>
                <p className="text-xs mt-1 opacity-80 max-w-xl font-sans">
                  {currentTheme.description}
                </p>
              </div>

              {/* Swatch chips */}
              <div className="flex items-center gap-2 font-mono text-[11px]">
                <div className="px-3 py-1.5 rounded border flex items-center gap-2" style={{ backgroundColor: currentTheme.bg, borderColor: currentTheme.border }}>
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: currentTheme.bg }}></span>
                  <span>bg</span>
                </div>
                <div className="px-3 py-1.5 rounded border flex items-center gap-2" style={{ backgroundColor: currentTheme.bg, borderColor: currentTheme.border }}>
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: currentTheme.accent }}></span>
                  <span>accent</span>
                </div>
                <div className="px-3 py-1.5 rounded border flex items-center gap-2" style={{ backgroundColor: currentTheme.bg, borderColor: currentTheme.border }}>
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: currentTheme.text }}></span>
                  <span>text</span>
                </div>
              </div>
            </div>

            {/* Mock note preview rendered in the active theme */}
            <div className="pt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl border" style={{ backgroundColor: currentTheme.bg, borderColor: currentTheme.border }}>
                <span className="font-mono text-[10px] uppercase opacity-60">Active Bin</span>
                <div className="font-sans font-semibold text-sm mt-1" style={{ color: currentTheme.text }}>Firmware Refactor</div>
                <p className="font-sans text-xs mt-1.5 opacity-70">3 clips queued, 1 transcription pending.</p>
              </div>
              <div className="p-4 rounded-xl border" style={{ backgroundColor: currentTheme.bg, borderColor: currentTheme.border }}>
                <span className="font-mono text-[10px] uppercase opacity-60">Graph Neighbors</span>
                <div className="font-mono text-xs mt-1" style={{ color: currentTheme.accent }}>[[Embedded Linux]]</div>
                <div className="font-mono text-xs mt-0.5" style={{ color: currentTheme.accent }}>[[CAN Bus Specs]]</div>
              </div>
              <div className="p-4 rounded-xl border" style={{ backgroundColor: currentTheme.bg, borderColor: currentTheme.border }}>
                <span className="font-mono text-[10px] uppercase opacity-60">Status</span>
                <div className="font-mono text-xs mt-1 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: currentTheme.accent }}></span>
                  <span>Vault synced to disk</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          8. FOOTER
          ───────────────────────────────────────────────────────────── */}
      <footer className="py-16 bg-[#080A0E]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/[0.06]">
            <div>
              <div className="flex items-center gap-3">
                <WovenHashtagIcon size={24} className="text-[#5AA7D9]" />
                <div className="flex items-baseline tracking-tight">
                  <span className="font-sans font-bold text-lg text-white">Mind</span>
                  <span className="font-mono text-lg text-[#5AA7D9] font-medium">Loom</span>
                </div>
              </div>
              <p className="text-xs text-[#8B9BB0] mt-2 max-w-sm">
                Self-hosted, Markdown-native, AI-augmented personal knowledge engine. 
                Single operator system. No telemetry, no cloud lock-in.
              </p>
            </div>

            <div className="flex flex-wrap gap-8 font-mono text-xs text-[#8B9BB0]">
              <div>
                <div className="text-white font-semibold mb-2">Instance</div>
                <ul className="space-y-1">
                  <li><a href="https://app.mindloom.me" className="hover:text-[#5AA7D9] transition-colors">app.mindloom.me</a></li>
                  <li><a href="https://mindloom.me" className="hover:text-[#5AA7D9] transition-colors">mindloom.me</a></li>
                </ul>
              </div>
              <div>
                <div className="text-white font-semibold mb-2">Repositories</div>
                <ul className="space-y-1">
                  <li><a href="https://github.com/tufanunal/mindloom" target="_blank" rel="noopener noreferrer" className="hover:text-[#5AA7D9] transition-colors">tufanunal/mindloom</a></li>
                  <li><a href="https://github.com/tufanunal/mindloom-landing" target="_blank" rel="noopener noreferrer" className="hover:text-[#5AA7D9] transition-colors">tufanunal/mindloom-landing</a></li>
                </ul>
              </div>
              <div>
                <div className="text-white font-semibold mb-2">Endpoints</div>
                <ul className="space-y-1">
                  <li><span className="text-[#576577]">API: :3011</span></li>
                  <li><span className="text-[#576577]">Landing: :8090</span></li>
                  <li><span className="text-[#576577]">Dashboard: :8091</span></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#576577] font-mono gap-4">
            <div>mindloom.me // 2026 // MIT License</div>
            <div>Plain text is sovereign.</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MindLoomLanding;
