import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      dreg: ['SF Pro Display Regular'],
      dmed: ['SF Pro Display Medium'],
      dbold: ['SF Pro Display Bold'],
    },

    extend: {
      colors: {
        solar: 'var(--solar-color)',
      },
      backgroundImage: {
        'sky-stars': "url('../images/sky-stars.png')",
        soplarBg:
          'radial-gradient(circle, rgba(12,81,203,1) 1%, rgba(0,0,0,0) 70%);',
      },
      dropShadow: {
        main: '20px 30px 100px rgba(255, 255, 255, 0.05)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontSize: {
        xs: 'var(--fz-xs)',
        base: 'var(--fz-base)',
      },
      lineHeight: {
        base: 'var(--lh-base)',
      },
    },
  },
  plugins: [],
};
export default config;
