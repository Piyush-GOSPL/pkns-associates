/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F172A',
          hover: '#1E293B',
          light: '#334155',
        },
        secondary: {
          DEFAULT: '#D97706',
          hover: '#B45309',
          light: '#FDE68A',
        },
        accent: {
          DEFAULT: '#C9A227',
          hover: '#B38D1C',
          light: '#FEF3C7',
        },
        surface: '#FFFFFF',
        background: '#F8FAFC',
        dark: '#1E293B',
        muted: '#64748B',
        border: '#E2E8F0',
      },
      fontFamily: {
        sans: ['"Manrope"', '"Inter"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      borderRadius: {
        'sm': '8px',
        DEFAULT: '10px',
        'md': '12px',
        'lg': '14px',
        'xl': '16px',
        '2xl': '16px', // Constrained to 16px as per client specification
        '3xl': '16px', // Prevent oversized rounded corners
      },
      boxShadow: {
        subtle: '0 1px 3px 0 rgba(15, 23, 42, 0.04), 0 1px 2px -1px rgba(15, 23, 42, 0.03)',
        card: '0 1px 4px 0 rgba(15, 23, 42, 0.05), 0 2px 8px -2px rgba(15, 23, 42, 0.03)',
        hover: '0 8px 24px -4px rgba(15, 23, 42, 0.08), 0 4px 8px -2px rgba(15, 23, 42, 0.03)',
        dropdown: '0 10px 30px -5px rgba(15, 23, 42, 0.1)',
      },
    },
  },
  plugins: [],
}
