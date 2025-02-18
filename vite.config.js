import {_rpis_, default as rollupOptions} from './rollup.config.js'

const entrypoints = [
  './index.html',
  './sw.js',
]

export default {
  appType: 'mpa',
  define: {
  },

  plugins: _rpis_(),
  build: {
    rollupOptions: {
      input: entrypoints,
      plugins: _rpis_(),
    },
    target: 'esnext',
    modulePreload: {
      polyfill: false,
    },
    watch: {
      buildDelay: 100,
    }
  },

  worker: {
    format: 'es',
    plugins: _rpis_,
  },
}
