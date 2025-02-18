import rpi_node_resolve from '@rollup/plugin-node-resolve'
import rpi_jsy from 'rollup-plugin-jsy'
import rpi_dgnotify from 'rollup-plugin-dgnotify'

const entrypoints = [
  'code/itermusing.jsy',
]

export const _rpis_ = () => [
  rpi_jsy({PLAT_WEB: true}),
  rpi_node_resolve(),
  rpi_dgnotify(),
]

export default {
  external: [
    id => /\w+:/.test(id),
  ],
  output: { format: 'es', dir: 'esm/', sourcemap: true },
  plugins: _rpis_(),
  input: entrypoints
}

