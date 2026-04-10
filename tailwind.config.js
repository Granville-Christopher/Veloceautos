/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        showroom: {
          950: '#07090c',
          900: '#0c1118',
          800: '#121a24',
          700: '#1a2433',
        },
        chrome: {
          DEFAULT: '#c8d0dc',
          bright: '#e8ecf2',
        },
        accent: {
          DEFAULT: '#3b82f6',
          glow: '#60a5fa',
          deep: '#1d4ed8',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Syne"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(to bottom, rgba(7,9,12,0.2), rgba(7,9,12,0.95)), linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '64px 64px',
      },
      boxShadow: {
        glow: '0 0 60px -12px rgba(59, 130, 246, 0.45)',
        card: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        lift: '0 20px 40px -15px rgba(0, 0, 0, 0.6)',
      },
      animation: {
        'marquee-slow': 'marquee 40s linear infinite',
        'float-soft': 'floatSoft 6s ease-in-out infinite',
        shimmer: 'shimmer 2.5s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        floatSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
      },
    },
  },
  plugins: [],
};
