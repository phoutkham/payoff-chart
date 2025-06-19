import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';


export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/payoff-chart.js',
      format: 'umd',
      name: 'Payoffchart',
      globals: {
        'lightweight-charts': 'LightweightCharts'
      }
    },
    {
      file: 'dist/payoff-chart.esm.js',
      format: 'esm'
    }
  ],
  external: [], // or ['lightweight-charts'] if you want to keep it external
  plugins: [
    resolve(),
    commonjs(),
    babel({
      babelHelpers: 'bundled',
      presets: ['@babel/preset-env']
    })
  ]
};
