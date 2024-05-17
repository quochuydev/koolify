import { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        primary: "#CFCFCF",
        primaryDark: "#777777",
        primaryLight: "#ACACAC",
        secondary: "#FFBE1B",
        tertiary: "#2F1A04",
        pink: "#FF0080",
        blue: "#0070F3",
        cyan: "#50E3C2",
        orange: "#F5A623",
        violet: "#7928CA",
      },
      backgroundImage: {
        "component-pricing": "url('/component-pricing.jpg')",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
} satisfies Config;
