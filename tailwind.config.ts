// tailwind.config.ts
import type { Config } from "tailwindcss"

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    fontFamily: {
      // Override the default sans completely
      sans: ["Sansita", "system-ui", "-apple-system", "sans-serif"],
      sansita: ["Sansita", "system-ui", "-apple-system", "sans-serif"],
    },
    extend: {
      fontSize: {
        title: ["30px", { lineHeight: "1.15", letterSpacing: "0.01em" }],
        h1: ["24px", { lineHeight: "1.2" }],
        h2: ["20px", { lineHeight: "1.25" }],
        h3: ["18px", { lineHeight: "1.3" }],
        sub1: ["16px", { lineHeight: "1.4" }],
        sub2: ["14px", { lineHeight: "1.45" }],
        p: ["24px", { lineHeight: "1.55" }],
        nav: ["18px", { lineHeight: "1.25", letterSpacing: "0.01em" }],
        btn: ["14px", { lineHeight: "1.1", letterSpacing: "0.01em" }],
      },
      colors: {
        pjaBlue: "#0f1b2b",
        pjaBrand: "#74d1f6",
        pjaBlueSolid: "#0C356A",
        pjaOrange: "#E4AF23",
      },
      borderRadius: {
        btn: "2px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config