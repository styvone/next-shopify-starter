module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: theme => ({
        '112': '28rem',
        '120': '30rem',
      }),
      minHeight: theme => ({
        '80': '20rem',
      }),
      colors: {
        palette: {
          lighter: '#F5F3FF',
          light: '#DDD6FE',
          primary: '#5B21B6',
          dark: '#4C1D95',
        },
      },
      fontFamily: {
        primary: ['"Josefin Sans"']
      },
      fontSize: {
        'desktop-oneOff-lg': '140px',
        'desktop-oneOff-md': '100px',
        'desktop-h1': '60px',
        'desktop-h2': '44px',
        'desktop-h3': '30px',
        'desktop-p3': ['16px', '20px'],
        'desktop-p2': ['18px', '22px'],
        'desktop-p1': ['22px', '27px'],
        'mobile-oneOff-lg': '40px',
        'mobile-oneOff-md': '20px',
        'mobile-h1': '40px',
        'mobile-h2': '32px',
        'mobile-h3': '26px',
        'mobile-p1': '18px',
        'mobile-p2': '16px',
        'mobile-p3': '14px',
        'tablet-oneOff-lg': '48px',
        'tablet-oneOff-md': '36px',
        'tablet-h1': '48px',
        'tablet-h2': '36px',
        'tablet-h3': '28px',
        'tablet-p1': '20px',
        'tablet-p2': '18px',
        'tablet-p3': '16px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: 'class',
    }),
  ],
}
