import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        brandFirst: {
          50: 'rgb(247, 230, 232)',
          100: 'rgb(231, 176, 182)',
          200: 'rgb(219, 138, 147)',
          300: 'rgb(203, 84, 98)',
          400: 'rgb(193, 51, 68)',
          500: 'rgb(177, 0, 21)',
          600: 'rgb(161, 0, 19)',
          700: 'rgb(126, 0, 15)',
          800: 'rgb(97, 0, 12)',
          900: 'rgb(74, 0, 9)',
        },
        brandSecond: {
          50: 'rgb(245, 245, 245)',
          100: 'rgb(223, 223, 224)',
          200: 'rgb(207, 208, 209)',
          300: 'rgb(185, 187, 189)',
          400: 'rgb(172, 173, 176)',
          500: 'rgb(151, 153, 156)',
          600: 'rgb(137, 139, 142)',
          700: 'rgb(107, 109, 111)',
          800: 'rgb(83, 84, 86)',
          900: 'rgb(63, 64, 66)',
        },
        brandThird: {
          50: 'rgb(234, 242, 253)',
          100: 'rgb(191, 216, 249)',
          200: 'rgb(159, 197, 247)',
          300: 'rgb(116, 170, 243)',
          400: 'rgb(89, 153, 241)',
          500: 'rgb(47, 128, 237)',
          600: 'rgb(43, 116, 216)',
          700: 'rgb(33, 91, 168)',
          800: 'rgb(26, 70, 130)',
          900: 'rgb(20, 54, 100)',
        },
        brandFourth: {
          50: 'rgb(233, 247, 239)',
          100: 'rgb(188, 230, 206)',
          200: 'rgb(156, 218, 182)',
          300: 'rgb(110, 201, 148)',
          400: 'rgb(82, 190, 128)',
          500: 'rgb(39, 174, 96)',
          600: 'rgb(35, 158, 87)',
          700: 'rgb(28, 124, 68)',
          800: 'rgb(21, 96, 53)',
          900: 'rgb(16, 73, 40)',
        },
        brandFive: {
          50: 'rgb(252, 248, 235)',
          100: 'rgb(246, 233, 194)',
          200: 'rgb(242, 223, 165)',
          300: 'rgb(236, 208, 124)',
          400: 'rgb(232, 199, 98)',
          500: 'rgb(226, 185, 59)',
          600: 'rgb(206, 168, 54)',
          700: 'rgb(160, 131, 42)',
          800: 'rgb(124, 102, 32)',
          900: 'rgb(95, 78, 25)',
        },
        brandSix: {
          50: 'rgb(255, 238, 230)',
          100: 'rgb(255, 203, 177)',
          200: 'rgb(255, 178, 139)',
          300: 'rgb(255, 142, 86)',
          400: 'rgb(255, 121, 53)',
          500: 'rgb(255, 87, 3)',
          600: 'rgb(232, 79, 3)',
          700: 'rgb(181, 62, 2)',
          800: 'rgb(140, 48, 2)',
          900: 'rgb(107, 37, 1)',
        },
        brandSeven: {
          50: 'rgb(240, 241, 241)',
          100: 'rgb(210, 211, 213)',
          200: 'rgb(188, 189, 192)',
          300: 'rgb(157, 159, 164)',
          400: 'rgb(138, 141, 146)',
          500: 'rgb(109, 112, 119)',
          600: 'rgb(99, 102, 108)',
          700: 'rgb(77, 80, 84)',
          800: 'rgb(60, 62, 65)',
          900: 'rgb(46, 47, 50)',
        },
        brandEight: {
          50: 'rgb(248, 248, 248)',
          100: 'rgb(235, 235, 235)',
          200: 'rgb(225, 225, 225)',
          300: 'rgb(211, 211, 211)',
          400: 'rgb(202, 202, 202)',
          500: 'rgb(189, 189, 189)',
          600: 'rgb(172, 172, 172)',
          700: 'rgb(134, 134, 134)',
          800: 'rgb(104, 104, 104)',
          900: 'rgb(79, 79, 79)',
        },
      },
      backgroundImage: {
        'background-login': "url('/images/background/background-login.svg')",
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    nextui({
      themes: {
        light: {
          layout: {},
          colors: {
            background: 'rgba(255, 255, 255, 100)',
          },
        },
        dark: {
          layout: {},
          colors: {
            background: 'rgba(8, 8, 9,100)',
          },
        },
      },
    }),
  ],
} satisfies Config;

export default config;
