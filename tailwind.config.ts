import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Enable dark mode using the `class` strategy
  theme: {
    extend: {
      colors: {
        background: "var(--background)", // Custom variable for background
        foreground: "var(--foreground)", // Custom variable for foreground
        darkBackground: "#1E293B", // Dark mode background
        darkForeground: "#F8FAFC", // Dark mode text color
        primary: "#000000", // Custom primary color
        secondary: "#000000", // Custom secondary color
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"], // Add a custom sans-serif font
        serif: ["Georgia", "ui-serif", "serif"], // Add a custom serif font
      },
      spacing: {
        18: "4.5rem", // Custom spacing for padding/margin
        72: "18rem", // Larger custom spacing
      },
      screens: {
        xs: "480px", // Extra small screens
        "3xl": "1920px", // Extra large screens
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"), // Plugin for styling forms
    require("@tailwindcss/typography"), // Plugin for typography utilities
  ],
} satisfies Config;
