import { type Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Coffee theme colors
        coffee: {
          dark: "#2C1E1E",      // Rich dark brown
          medium: "#5E4B3A",    // Medium brown
          light: "#D2B48C",     // Light tan/coffee with cream
          cream: "#F5F5DC",     // Cream/beige
          accent: "#D4A76A",    // Golden accent color
          beige: "#E8DCCA",     // Light beige
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Imprima", "sans-serif"],
        serif: ["Playfair Display", "serif"],
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
        steam1: {
          "0%, 100%": { transform: "translateY(0) translateX(0) scale(1)", opacity: "0.3" },
          "50%": { transform: "translateY(-100px) translateX(20px) scale(1.2)", opacity: "0.6" },
        },
        steam2: {
          "0%, 100%": { transform: "translateY(0) translateX(0) scale(1)", opacity: "0.2" },
          "50%": { transform: "translateY(-120px) translateX(-30px) scale(1.3)", opacity: "0.5" },
        },
        steam3: {
          "0%, 100%": { transform: "translateY(0) translateX(0) scale(1)", opacity: "0.25" },
          "50%": { transform: "translateY(-110px) translateX(10px) scale(1.15)", opacity: "0.55" },
        },
        shimmer: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        slideUp: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        steam1: "steam1 6s ease-in-out infinite",
        steam2: "steam2 7s ease-in-out infinite",
        steam3: "steam3 8s ease-in-out infinite",
        shimmer: "shimmer 3s ease-in-out infinite",
        float: "float 3s ease-in-out infinite",
        slideUp: "slideUp 0.3s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
