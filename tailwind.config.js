/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        loom: {
          bg: '#0A0D12',
          surface: '#11151D',
          elevated: '#171C26',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-subtle': 'rgba(255, 255, 255, 0.04)',
          'border-active': 'rgba(90, 167, 217, 0.35)',
          muted: '#8B9BB0',
          dim: '#576577',
          light: '#F0F4F8',
          // Brand accent: strictly muted cool blue (#5AA7D9 range)
          accent: '#5AA7D9',
          'accent-hover': '#6FB5E3',
          'accent-dim': '#3E769B',
          'accent-bg': 'rgba(90, 167, 217, 0.08)',
          'accent-border': 'rgba(90, 167, 217, 0.22)',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
    },
  },
  plugins: [],
};
