import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        triskell: "url('/images/triskell_bbh.svg')",
      },
      fontFamily: {
        Druk: ['DRUK', 'sans-serif'],
      },
    },
  },

  plugins: [],
};
export default config;
