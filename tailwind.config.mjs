/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      main: ['Roboto', 'sans-serif'],
      bevnpro: ['Be Vietnam Pro', 'sans-serif'],
    },
    keyframes: {
      'pulse-blur': {
        '0%, 100%': {
          filter: 'blur(20rem)',
        },
        '50%': {
          filter: 'blur(calc(20rem - 4rem))',
        },
      },
      'pulse-blur-small': {
        '0%, 100%': {
          filter: 'blur(15rem)',
        },
        '50%': {
          filter: 'blur(calc(15rem - 4rem))',
        },
      },
    },
    animation: {
      'pulse-blur': 'pulse-blur 5s ease-in-out infinite',
      'pulse-blur-small': 'pulse-blur-small 5s ease-in-out infinite',
    },
    extend: {},
  },
  plugins: [],
}
