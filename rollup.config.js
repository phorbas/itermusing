import rpi_node_resolve from '@rollup/plugin-node-resolve'
import rpi_jsy from 'rollup-plugin-jsy'
import rpi_dgnotify from 'rollup-plugin-dgnotify'

const entrypoints = [
  'code/itermusing.jsy',
]
const mock_entrypoints = [
  'mock/itm_wa_views.jsy',
  'mock/mock_data.jsy',
]

export const _rpis_ = () => [
  rpi_jsy({PLAT_WEB: true}),
  rpi_node_resolve(),
  rpi_dgnotify(),
]

export const external = [
  id => /\w+:/.test(id),
]

export default [
  {
    output: { format: 'es', dir: 'esm/', sourcemap: true },
    external, plugins: _rpis_(),
    input: entrypoints
  },
  {
    output: { format: 'es', dir: 'esm-mock/', sourcemap: true },
    external, plugins: _rpis_(),
    input: mock_entrypoints
  },
]

