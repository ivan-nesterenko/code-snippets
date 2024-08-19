/* eslint-disable @typescript-eslint/naming-convention */
import type { Config } from "tailwindcss";
const plugin = require('tailwindcss/plugin');

const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./assets/**/*.svg"],
  darkMode: ["class"],
  plugins: [require("tailwindcss-animate"), plugin(function ({ addUtilities, addComponents, e, config }) {
      addComponents({
        '.centered': {
          'justify-content': 'center',
          'align-items': 'center',
        },
      });
    }),],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
     // cubic-bezier(0.42, 0, 0.58, 1)  ----  Ease In Out
    // cubic-bezier(0.42, 0, 1, 1)  ----  Ease In
    // cubic-bezier(0, 0, 0.58, 1)  ----  Ease Out
    // cubic-bezier(0.25, 0.1, 0.25, 1)  ----  Ease
    // cubic-bezier(0.47, 0, 0.745, 0.715)  ----  Ease In Sine
    // cubic-bezier(0.39, 0.575, 0.565, 1)  ----  Ease Out Sine
    // cubic-bezier(0.445, 0.05, 0.55, 0.95)  ----  Ease In Out Sine
    // cubic-bezier(0.55, 0.085, 0.68, 0.53)  ----  Ease In Quad
    // cubic-bezier(0.25, 0.46, 0.45, 0.94)  ----  Ease Out Quad
    // cubic-bezier(0.455, 0.03, 0.515, 0.955)  ----  Ease In Out Quad

    animation: {
      accordionDown: "accordion-down 0.2s ease-out",
      accordionUp: "accordion-up 0.2s ease-out",

      fadeIn: "fadeIn .1s ease-in-out",
      fadeOut: "fadeOut .1s ease-in-out",

      slideInLeft: "slideInLeft .3s ease-in-out",
      slideOutLeft: "slideOutLeft .3s ease-in-out",

      slideInRight: "slideInRight 0.3s ease-in-out",
      slideOutRight: "slideOutRight 0.3s ease-in-out",

      slideInUp: "slideInUp 0.3s ease-in-out",
      slideOutUp: "slideOutUp 0.3s ease-in-out",

      slideInDown: "slideInDown 0.3s ease-in-out",
      slideOutDown: "slideOutDown 0.3s ease-in-out",

      scaleIn: "scaleIn 0.3s ease-in-out",
      scaleOut: "scaleOut 0.3s ease-in-out",
    },
    keyframes: {
      accordionDown: {
        from: { height: "0" },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      accordionUp: {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: "0" },
      },

      fadeIn: {
        from: { opacity: "0" },
        to: { opacity: "1" },
      },
      fadeOut: {
        from: { opacity: "1" },
        to: { opacity: "0" },
      },

      slideInLeft: {
        from: { transform: "translateX(-100%)" },
        to: { transform: "translateX(0)" },
      },
      slideOutLeft: {
        from: { transform: "translateX(0)" },
        to: { transform: "translateX(-100%)" },
      },

      slideInRight: {
        from: { transform: "translateX(100%)" },
        to: { transform: "translateX(0)" },
      },
      slideOutRight: {
        from: { transform: "translateX(0)" },
        to: { transform: "translateX(100%)" },
      },

      slideInUp: {
        from: { transform: "translateY(-100%)" },
        to: { transform: "translateY(0)" },
      },
      slideOutUp: {
        from: { transform: "translateY(0)" },
        to: { transform: "translateY(-100%)" },
      },

      slideInDown: {
        from: { transform: "translateY(100%)" },
        to: { transform: "translateY(0)" },
      },
      slideOutDown: {
        from: { transform: "translateY(0)" },
        to: { transform: "translateY(100%)" },
      },

      scaleIn: {
        from: { transform: "scale(0.5)" },
        to: { transform: "scale(1)" },
      },
      scaleOut: {
        from: { transform: "scale(1)" },
        to: { transform: "scale(0.5)" },
      },
    },
    },
  },
} satisfies Config;

export default config;
