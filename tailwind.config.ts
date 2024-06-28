/* eslint-disable @typescript-eslint/naming-convention */
import type { Config } from "tailwindcss";

const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./assets/**/*.svg"],
  darkMode: ["class"],
  plugins: [require("tailwindcss-animate")],
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
      // cubic-bezier(0.68, -0.55, 0.265, 1.55)
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        
        fadeIn: "fadeIn .1s ease-in-out",
        fadeOut: "fadeOut .1s ease-in-out",

        slideInLeft: "slideInLeft 0.3s ease-in-out",
        slideOutLeft: "slideOutLeft 0.3s ease-in-out",

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
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
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
