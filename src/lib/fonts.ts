import { Playfair_Display, Inter } from "next/font/google";

/**
 * Playfair Display - Elegant serif font for headings
 * Used for hero headlines, section titles, and brand elements
 */
export const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

/**
 * Inter - Clean sans-serif font for body text
 * Used for paragraphs, navigation, buttons, and general UI text
 */
export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

/**
 * Combined font class names for applying to the HTML element
 * This enables the CSS variables to be used throughout the app
 */
export const fontVariables = `${playfairDisplay.variable} ${inter.variable}`;
