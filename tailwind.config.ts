import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1F5233',
        secondary: '#F5A623',
        accent: '#E8F5E9',
        background: '#FFFFFF',
        foreground: '#1A1A1A',
        muted: '#F8F8F8',
        border: '#E0E0E0',
      },
      fontFamily: {
        sans: ['system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
