import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pastel: {
          lavender: "#E6E6FA", // Soft Lavender
          mint: "#98FF98",     // Soft Mint Green
          peach: "#FFDAB9",    // Soft Peach
          skyBlue: "#ADD8E6",   // Soft Sky Blue
          pink: "#FFB6C1",     // Soft Pink (optional extra)
          yellow: "#FFFACD",   // Soft Yellow (optional extra)
        },
      },
      borderRadius: {
        "soft": "12px", // Default rounded corners
      },
      fontFamily: {
        sans: ["Nunito", "sans-serif"], // English font
        arabic: ["Cairo", "Comic Neue Arabic", "sans-serif"], // Arabic fonts
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;

