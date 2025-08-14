// tailwind.config.ts

import type { Config } from "tailwindcss"


export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Sansita for brand, headings, nav
        sansita: ["Sansita", "system-ui"],
        // Helvetica for paragraphs
        helvetica: ["Helvetica Neue", "Helvetica", "Arial", "system-ui"],
      },
      fontSize: {
        // Named scale per spec
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
      // Optional: brand colors for buttons (tweak if needed)
      colors: {
        pjaBlue: "#0f1b2b",     // deep navy (bar)
        pjaBrand: "#74d1f6",    // light brand blue
        pjaBlueSolid: "#0C356A",// button blue
        pjaOrange: "#E4AF23",   // hover orange
      },
      borderRadius: {
        btn: "2px",             // per spec (Rad 2)
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config
