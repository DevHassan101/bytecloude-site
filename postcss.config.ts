module.exports = {
  plugins: {
    'tailwindcss': {},
    'autoprefixer': {},
    
    // ⭐ Production mein CSS optimize karo
    ...(process.env.NODE_ENV === 'production' ? {
      'cssnano': {
        preset: ['default', {
          discardComments: {
            removeAll: true,
          },
          minifyFontValues: {
            removeQuotes: false,
          },
        }],
      },
    } : {}),
  },
}