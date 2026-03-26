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
        // Primary - Dark/Black theme
        primary: {
          900: "#0a0a0a", // Deepest black - backgrounds
          800: "#141414", // Dark backgrounds
          700: "#1f1f1f", // Card backgrounds
          600: "#2a2a2a", // Elevated surfaces
        },
        // Accent - White to match logo
        accent: {
          500: "#ffffff", // Primary accent - white
          400: "#f5f5f5", // Hover states - slightly off-white
          300: "#e5e5e5", // Light accent - light gray
        },
        // Neutral - Text and borders
        // WCAG AA compliant text colors
        neutral: {
          100: "#ffffff", // Primary text - 21:1 on dark backgrounds
          200: "#e5e5e5", // Secondary text - 16.3:1 on dark backgrounds
          300: "#b3b3b3", // Muted text - 8.5:1 on dark backgrounds (improved from #a3a3a3)
          400: "#525252", // Borders
        },
        // Semantic colors - WCAG AA compliant
        success: "#22c55e", // 5.1:1 on dark backgrounds
        error: "#f87171",  // 6.3:1 on dark backgrounds (improved from #ef4444)
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Playfair Display", "serif"],
        body: ["var(--font-body)", "Inter", "sans-serif"],
      },
      fontSize: {
        xs: "0.75rem",    // 12px
        sm: "0.875rem",   // 14px
        base: "1rem",     // 16px
        lg: "1.125rem",   // 18px
        xl: "1.25rem",    // 20px
        "2xl": "1.5rem",  // 24px
        "3xl": "1.875rem", // 30px
        "4xl": "2.25rem", // 36px
        "5xl": "3rem",    // 48px
        "6xl": "3.75rem", // 60px
      },
      spacing: {
        1: "0.25rem",  // 4px
        2: "0.5rem",   // 8px
        3: "0.75rem",  // 12px
        4: "1rem",     // 16px
        6: "1.5rem",   // 24px
        8: "2rem",     // 32px
        12: "3rem",    // 48px
        16: "4rem",    // 64px
        24: "6rem",    // 96px
      },
      screens: {
        sm: "640px",   // Mobile landscape
        md: "768px",   // Tablet
        lg: "1024px",  // Desktop
        xl: "1280px",  // Large desktop
        "2xl": "1536px", // Extra large
      },
      borderRadius: {
        button: "0.375rem",
        card: "0.5rem",
      },
      boxShadow: {
        card: "0 4px 6px -1px rgba(0, 0, 0, 0.3)",
      },
      transitionDuration: {
        fast: "150ms",
        base: "300ms",
        slow: "500ms",
      },
      transitionTimingFunction: {
        DEFAULT: "ease",
      },
      height: {
        nav: "80px",
        "nav-mobile": "64px",
      },
      minHeight: {
        button: "44px", // Touch target compliance
      },
    },
  },
  plugins: [],
};

export default config;
