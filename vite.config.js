import rpi_jsy from 'rollup-plugin-jsy'

export default {
  plugins: [
    rpi_jsy(),
  ],

  define: {
  },

  build: {
    target: 'esnext',
    modulePreload: {
      polyfill: false,
    },
    lib: {
      fileName: (format, entryName) => `esm/${entryName}.js`,
      formats: ['es'],
      entry: [
        './index.html'
      ],
    }
  }
}
