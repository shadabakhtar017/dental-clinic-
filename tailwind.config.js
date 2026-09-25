/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        clinic: {
          bg: "#FAFBFC",
          surface: "#FFFFFF",
          "surface-alt": "#F4F7FB",
          navy: "#0A1128",
          "navy-dark": "#050914",
          "navy-light": "#1C274C",
          slate: "#3E4C59",
          muted: "#627D98",
          cyan: "#00B4D8",
          "cyan-dark": "#0077B6",
          "cyan-light": "#90E0EF",
          "cyan-pale": "#E8F7FB",
          accent: "#0284C7",
          border: "rgba(10, 17, 40, 0.08)",
          glass: "rgba(255, 255, 255, 0.82)",
          "glass-dark": "rgba(10, 17, 40, 0.75)",
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', '-apple-system', 'sans-serif'],
        display: ['Outfit', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 30px -5px rgba(10, 17, 40, 0.05), 0 4px 12px -2px rgba(10, 17, 40, 0.025)',
        'soft-lg': '0 20px 40px -10px rgba(10, 17, 40, 0.08), 0 10px 20px -5px rgba(10, 17, 40, 0.03)',
        'soft-xl': '0 30px 60px -15px rgba(10, 17, 40, 0.12), 0 15px 30px -10px rgba(10, 17, 40, 0.05)',
        'cyan-glow': '0 0 25px rgba(0, 180, 216, 0.25)',
        'cyan-glow-lg': '0 0 45px rgba(0, 180, 216, 0.35)',
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '0.8', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.03)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
