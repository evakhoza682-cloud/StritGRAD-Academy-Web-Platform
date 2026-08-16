/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0a1628',
          50: '#eef1f6',
          100: '#d3dbe8',
          200: '#a7b7d1',
          300: '#7b93ba',
          400: '#4f6fa3',
          500: '#2c4a7c',
          600: '#1c3560',
          700: '#132648',
          800: '#0d1c36',
          900: '#0a1628',
          950: '#060d1a'
        },
        gold: {
          DEFAULT: '#c9a84c',
          light: '#ffd700',
          50: '#fbf6e9',
          100: '#f5eac6',
          200: '#ecd696',
          300: '#e2c266',
          400: '#d5b158',
          500: '#c9a84c',
          600: '#a8873a',
          700: '#846a2e',
          800: '#5f4c21',
          900: '#3d3115'
        },
        offwhite: '#f5f5f5',
        graytxt: '#5b6470'
      },
      fontFamily: {
        sans: ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        card: '0 4px 20px rgba(10,22,40,0.08)',
        cardHover: '0 12px 30px rgba(10,22,40,0.16)'
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, rgba(10,22,40,0.92) 0%, rgba(10,22,40,0.75) 45%, rgba(201,168,76,0.55) 100%)'
      }
    }
  },
  plugins: []
}
